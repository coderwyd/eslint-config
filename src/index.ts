import type { Linter } from 'eslint'
import {
  command,
  comments,
  disables,
  formatter,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  jsx,
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
  hasTypeScript,
  hasVue,
} from './env'
import {
  combine,
  getOverrides,
  interopDefault,
  isInEditorEnv,
  renamePluginInConfigs,
  resolveSubOptions,
} from './shared'
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from './types'

const flatConfigProps = [
  'name',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
] satisfies (keyof TypedFlatConfigItem)[]

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
 * @param {Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {Promise<TypedFlatConfigItem[]>}
 *  The merged ESLint configurations.
 */
export async function defineConfig(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<
    TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config[]
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
    jsx: enableJsx = true,
    react: enableReact = false,
    regexp: enableRegexp = true,
    svelte: enableSvelte = false,
    tailwindcss: enableTailwindCSS = false,
    typescript: enableTypeScript = hasTypeScript,
    unocss: enableUnoCSS = false,
    vue: enableVue = hasVue,
  } = options

  let isInEditor = options.isInEditor
  if (isInEditor == null) {
    isInEditor = isInEditorEnv()
    if (isInEditor)
      // eslint-disable-next-line no-console
      console.log('[@coderwyd/eslint-config] Detected running in editor, some rules are disabled.')
  }

  const stylisticOptions
    = options.stylistic === false
      ? false
      : typeof options.stylistic === 'object'
        ? options.stylistic
        : {}

  if (stylisticOptions && !('jsx' in stylisticOptions))
    stylisticOptions.jsx = enableJsx

  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push(
        interopDefault(import('eslint-config-flat-gitignore')).then(r => [
          r({
            ...enableGitignore,
            name: 'coderwyd/gitignore',
          }),
        ]),
      )
    }
    else {
      configs.push(interopDefault(import('eslint-config-flat-gitignore'))
        .then(r => [r({ name: 'coderwyd/gitignore', strict: false })]))
    }
  }

  const typescriptOptions = resolveSubOptions(options, 'typescript')
  const tsconfigPath = 'tsconfigPath' in typescriptOptions ? typescriptOptions.tsconfigPath : undefined

  // Base configs
  configs.push(
    ignores(options.ignores),
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

  if (enableJsx) {
    configs.push(jsx())
  }

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

  configs.push(disables())

  if ('files' in options) {
    throw new Error('[@coderwyd/eslint-config] The first argument should not contain the "files" property as the options are supposed to be global. Place it in the second or later config instead.')
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
