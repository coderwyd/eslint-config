import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'
import type { ParserOptions } from '@typescript-eslint/parser'
import type {
  PartialPrettierExtendedOptions,
  TypedFlatConfigItem,
} from './rule'
import type { Options as VueBlocksOptions } from 'eslint-processor-vue-blocks'
import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'

export * from './rule'

export type Awaitable<T> = T | Promise<T>

export interface OptionsFiles {
  /**
   * Override the `files` option to provide custom globs.
   */
  files?: string[]
}

export type OptionsTypescript =
  | (OptionsTypeScriptWithTypes & OptionsOverrides)
  | (OptionsTypeScriptParserOptions & OptionsOverrides)

export interface OptionsFormatters {
  /**
   * Enable formatting support for HTML.
   */
  html?: boolean

  /**
   * Enable formatting support for CSS, Less, Sass, and SCSS.
   */
  css?: boolean

  /**
   * Enable formatting support for Markdown.
   */
  markdown?: boolean

  /**
   * Enable formatting support for GraphQL.
   */
  graphql?: boolean

  /**
   * Enable formatting support for Yaml.
   */
  yaml?: boolean

  /**
   * Enable formatting support for Toml.
   */
  toml?: boolean

  /**
   * Custom options for Prettier.
   *
   * By default it's controlled by our own config.
   *
   */
  prettierOptions?: PartialPrettierExtendedOptions
}

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[]
}

export interface OptionsTypeScriptParserOptions {
  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>

  /**
   * Glob patterns for files that should be type aware.
   * @default ['**\/*.{ts,tsx}']
   */
  filesTypeAware?: string[]

  /**
   * Glob patterns for files that should not be type aware.
   * @default ['**\/*.md\/**', '**\/*.astro/*.ts']
   */
  ignoresTypeAware?: string[]
}

export interface OptionsTypeScriptWithTypes {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string | string[]
}

export interface OptionsHasTypeScript {
  typescript?: boolean
}

export interface OptionsStylistic {
  stylistic?: boolean | StylisticConfig
}

export interface StylisticConfig
  extends Pick<
    StylisticCustomizeOptions,
    'indent' | 'quotes' | 'jsx' | 'semi'
  > {}

export interface OptionsIsInEditor {
  isInEditor?: boolean
}

export interface OptionsOverrides {
  overrides?: TypedFlatConfigItem['rules']
}

export interface OptionsRegExp {
  /**
   * Override rulelevels
   */
  level?: 'error' | 'warn'
}

export interface OptionsUnoCSS extends OptionsOverrides {
  /**
   * Enable attributify support.
   * @default true
   */
  attributify?: boolean
  /**
   * Enable strict mode by throwing errors about blocklisted classes.
   * @default false
   */
  strict?: boolean
}

export interface OptionsVue extends OptionsOverrides {
  /**
   * Create virtual files for Vue SFC blocks to enable linting.
   *
   * @see https://github.com/antfu/eslint-processor-vue-blocks
   * @default true
   */
  sfcBlocks?: boolean | VueBlocksOptions

  /**
   * The vue version
   *
   * @default 3
   */
  version?: 2 | 3
}

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * The current working directory
   *
   * @default process.cwd()
   */
  cwd?: string

  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   * @default true
   */
  gitignore?: boolean | FlatGitignoreOptions

  /**
   * Core rules. Can't be disabled.
   */
  javascript?: OptionsOverrides

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: boolean | OptionsTypescript

  /**
   * Enable JSX related rules.
   *
   * Currently only stylistic rules are included.
   *
   * @default true
   */
  jsx?: boolean

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: boolean | OptionsOverrides

  /**
   * Enable Vue support.
   *
   * @default auto-detect based on the dependencies
   */
  vue?: boolean | OptionsVue

  /**
   * Enable JSONC support.
   *
   * @default true
   */
  jsonc?: boolean | OptionsOverrides

  /**
   * Enable react rules.
   *
   * Requires installing:
   * - `@eslint-react/eslint-plugin`
   * - `eslint-plugin-react-hooks`
   * - `eslint-plugin-react-refresh`
   *
   * @default false
   */
  react?: boolean | OptionsOverrides

  /**
   * Enable svelte rules.
   *
   * Requires installing:
   * - `eslint-plugin-svelte`
   *
   * @default false
   */
  svelte?: boolean | OptionsOverrides

  /**
   * Enable tainwindcss rules.
   *
   * @default auto-detect based on the dependencies
   */
  tailwindcss?: boolean | OptionsOverrides

  /**
   * Enable unocss rules.
   *
   * Requires installing:
   * - `@unocss/eslint-plugin`
   *
   * @default false
   */
  unocss?: boolean | OptionsUnoCSS

  /**
   * Enable stylistic rules.
   *
   * @see https://eslint.style/
   * @default true
   */
  stylistic?: boolean | (StylisticConfig & OptionsOverrides)

  /**
   * Enable regexp rules.
   *
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/
   * @default true
   */
  regexp?: boolean | (OptionsRegExp & OptionsOverrides)

  /**
   * Use external formatters to format files.
   *
   * @default
   * {
   *  "html": true,
   *  "css": true,
   *  "graphql": false,
   *  "markdown": false
   *  "yaml": false
   *  "toml": false
   * }
   *
   * When set to `true`, it will enable all formatters.
   */
  formatter?: boolean | OptionsFormatters

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean

  /**
   * Automatically rename plugins in the config.
   *
   * @default true
   */
  autoRenamePlugins?: boolean
}

export type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>
