import process from 'node:process'
import fs from 'node:fs'
import { isPackageExists } from 'local-pkg'
import { DEFAULT_PRETTIER_RULES } from './constants/prettier'
import {
  comments,
  formatter,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  prettier,
  react,
  sortPackageJson,
  sortTsconfig,
  svelte,
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
  loadPrettierConfig,
  resolveSubOptions,
} from './shared'
import type {
  Awaitable,
  FlatConfigItem,
  OptionsConfig,
  UserConfigItem,
} from './types'

const flatConfigProps: (keyof FlatConfigItem)[] = [
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

const VuePackages = ['vue', 'nuxt', 'vitepress', '@slidev/cli']

/**
 * Construct an array of ESLint flat config items.
 */
export async function defineConfig(
  options: OptionsConfig & FlatConfigItem = {},
  ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]
): Promise<UserConfigItem[]> {
  const {
    componentExts = [],
    gitignore: enableGitignore = true,
    isInEditor = !!(
      (process.env.VSCODE_PID ||
        process.env.JETBRAINS_IDE ||
        process.env.VIM) &&
      !process.env.CI
    ),
    react: enableReact = false,
    svelte: enableSvelte = false,
    typescript: enableTypeScript = isPackageExists('typescript'),
    unocss: enableUnoCSS = false,
    usePrettierrc = true,
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
  } = options

  const configs: Awaitable<FlatConfigItem[]>[] = []

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push(
        interopDefault(import('eslint-config-flat-gitignore')).then(r => [
          r(enableGitignore),
        ]),
      )
    } else {
      if (fs.existsSync('.gitignore'))
        configs.push(
          interopDefault(import('eslint-config-flat-gitignore')).then(r => [
            r(),
          ]),
        )
    }
  }

  // Base configs
  configs.push(
    ignores(),
    javascript({
      isInEditor,
      overrides: getOverrides(options, 'javascript'),
    }),
    comments(),
    node(),
    jsdoc(),
    imports(),
    unicorn(),

    // Optional plugins (installed but not enabled by default)
    perfectionist(),
  )

  if (enableVue) componentExts.push('vue')

  if (enableTypeScript) {
    configs.push(
      typescript({
        ...resolveSubOptions(options, 'typescript'),
        componentExts,
        overrides: getOverrides(options, 'typescript'),
      }),
    )
  }

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
        typescript: !!enableTypeScript,
      }),
    )
  }

  if (enableReact) {
    configs.push(
      react({
        overrides: getOverrides(options, 'react'),
        typescript: !!enableTypeScript,
      }),
    )
  }

  if (enableSvelte) {
    configs.push(
      svelte({
        overrides: getOverrides(options, 'svelte'),
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

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: getOverrides(options, 'jsonc'),
      }),
      sortPackageJson(),
      sortTsconfig(),
    )
  }

  let prettierRules = {
    ...DEFAULT_PRETTIER_RULES,
  }

  if (options.prettierRules) {
    prettierRules = { ...prettierRules, ...options.prettierRules }
  }

  if (usePrettierrc) {
    const prettierConfig = await loadPrettierConfig(
      options.cwd ?? process.cwd(),
    )
    Object.assign(prettierRules, prettierConfig)
  }

  configs.push(
    prettier(prettierRules),
    formatter(options.formatter, prettierRules),
  )

  // User can optionally pass a flat config item to the first argument
  // We pick the known keys as ESLint would do schema validation
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options) acc[key] = options[key] as any
    return acc
  }, {} as FlatConfigItem)
  if (Object.keys(fusedConfig).length > 0) configs.push([fusedConfig])

  const merged = combine(...configs, ...userConfigs)

  return merged
}
