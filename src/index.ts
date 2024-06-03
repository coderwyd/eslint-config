import fs from 'node:fs'
import {
  command,
  comments,
  formatter,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  react,
  regexp,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  svelte,
  tailwindcss,
  test,
  typescript,
  unicorn,
  unocss,
  vue,
} from './configs'
import {
  combine,
  getOverrides,
  interopDefault,
  renamePluginInConfigs,
  resolveSubOptions,
} from './shared'
import {
  isInEditor as defaultIsInEditor,
  hasTypeScript,
  hasVue,
} from './env'
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from './types'
import type { Linter } from 'eslint'

const flatConfigProps: (keyof TypedFlatConfigItem)[] = [
  'name',
  'files',
  'ignores',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
]

export const defaultPluginRenaming = {
  '@eslint-react': 'react',
  '@eslint-react/dom': 'react-dom',
  '@eslint-react/hooks-extra': 'react-hooks-extra',
  '@eslint-react/naming-convention': 'react-naming-convention',

  '@stylistic': 'style',
  '@typescript-eslint': 'ts',
  'import-x': 'import',
  'n': 'node',
  'vitest': 'test',
  'yml': 'yaml',
}

/**
 * Construct an array of ESLint flat config items.
 *
 * @param {OptionsConfig & TypedFlatConfigItem} options
 *  The options for generating the ESLint configurations.
 * @param {Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.FlatConfig[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {Promise<TypedFlatConfigItem[]>}
 *  The merged ESLint configurations.
 */
export async function defineConfig(
  options: OptionsConfig & TypedFlatConfigItem = {},
  ...userConfigs: Awaitable<
    TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.FlatConfig[]
  >[]
): Promise<TypedFlatConfigItem[]> {
  const {
    autoRenamePlugins = true,
    componentExts = [],
    formatter: formatterOptions = {
      css: true,
      html: true,
    },
    gitignore: enableGitignore = true,
    isInEditor = defaultIsInEditor,
    react: enableReact = false,
    regexp: enableRegexp = true,
    svelte: enableSvelte = false,
    tailwindcss: enableTailwindCSS = false,
    typescript: enableTypeScript = hasTypeScript,
    unocss: enableUnoCSS = false,
    vue: enableVue = hasVue,
  } = options

  const stylisticOptions
    = options.stylistic === false
      ? false
      : typeof options.stylistic === 'object'
        ? options.stylistic
        : {}

  if (stylisticOptions && !('jsx' in stylisticOptions))
    stylisticOptions.jsx = options.jsx ?? true

  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push(
        interopDefault(import('eslint-config-flat-gitignore')).then(r => [
          r(enableGitignore),
        ]),
      )
    }
    else {
      if (fs.existsSync('.gitignore')) {
        configs.push(
          interopDefault(import('eslint-config-flat-gitignore')).then(r => [
            r(),
          ]),
        )
      }
    }
  }

  const typescriptOptions = resolveSubOptions(options, 'typescript')
  const tsconfigPath = 'tsconfigPath' in typescriptOptions ? typescriptOptions.tsconfigPath : undefined

  // Base configs
  configs.push(
    ignores(),
    javascript({
      isInEditor,
      overrides: getOverrides(options, 'javascript'),
    }),
    comments(),
    node(),
    jsdoc({
      stylistic: stylisticOptions,
    }),
    imports({
      stylistic: stylisticOptions,
    }),
    unicorn(),
    command(),

    // Optional plugins (installed but not enabled by default)
    perfectionist(),
  )

  if (enableVue)
    componentExts.push('vue')

  if (enableTypeScript) {
    configs.push(
      typescript({
        ...typescriptOptions,
        componentExts,
        overrides: getOverrides(options, 'typescript'),
      }),
    )
  }

  if (stylisticOptions) {
    configs.push(
      stylistic({
        ...stylisticOptions,
        overrides: getOverrides(options, 'stylistic'),
      }),
    )
  }

  if (enableRegexp)
    configs.push(regexp(typeof enableRegexp === 'boolean' ? {} : enableRegexp))

  if (options.test ?? true) {
    configs.push(
      test({
        isInEditor,
        overrides: getOverrides(options, 'test'),
      }),
    )
  }

  if (enableVue) {
    configs.push(
      vue({
        ...resolveSubOptions(options, 'vue'),
        overrides: getOverrides(options, 'typescript'),
        stylistic: stylisticOptions,
        typescript: !!enableTypeScript,
      }),
    )
  }

  if (enableReact) {
    configs.push(
      react({
        overrides: getOverrides(options, 'react'),
        tsconfigPath,
      }),
    )
  }

  if (enableSvelte) {
    configs.push(
      svelte({
        overrides: getOverrides(options, 'svelte'),
        stylistic: stylisticOptions,
        typescript: !!enableTypeScript,
      }),
    )
  }

  if (enableUnoCSS) {
    configs.push(
      unocss({
        ...resolveSubOptions(options, 'unocss'),
        overrides: getOverrides(options, 'unocss'),
      }),
    )
  }
  if (enableTailwindCSS) {
    configs.push(
      tailwindcss({
        ...resolveSubOptions(options, 'tailwindcss'),
        overrides: getOverrides(options, 'tailwindcss'),
      }),
    )
  }

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: getOverrides(options, 'jsonc'),
        stylistic: stylisticOptions,
      }),
      sortPackageJson(),
      sortTsconfig(),
    )
  }
  if (formatterOptions) {
    configs.push(
      formatter(
        formatterOptions,
        typeof stylisticOptions === 'boolean' ? {} : stylisticOptions,
      ),
    )
  }

  // User can optionally pass a flat config item to the first argument
  // We pick the known keys as ESLint would do schema validation
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key] as any
    return acc
  }, {} as TypedFlatConfigItem)
  if (Object.keys(fusedConfig).length > 0)
    configs.push([fusedConfig])

  const merged = await combine(...configs, ...userConfigs)

  if (autoRenamePlugins)
    return renamePluginInConfigs(merged, defaultPluginRenaming)

  return merged
}

export * from './shared'
export * from './types'
