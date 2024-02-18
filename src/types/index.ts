import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'
import type { ParserOptions } from '@typescript-eslint/parser'
import type { FlatConfigItem, PartialPrettierExtendedOptions } from './rule'

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

export interface OptionsIsInEditor {
  isInEditor?: boolean
}

export interface OptionsOverrides {
  overrides?: FlatConfigItem['rules']
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
   * - `eslint-plugin-react`
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
   * Whether to use prettierrc
   *
   * If true, the rules in prettierrc will override the default rules
   *
   * @default true
   */
  usePrettierrc?: boolean

  /**
   * Use external formatters to format files.
   *
   * Requires installing:
   * - `eslint-plugin-prettier`
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
   */
  formatter?: OptionsFormatters

  /**
   * Default prettier rules
   *
   * @default
   * ```json
   * {
   *   "arrowParens": "avoid",
   *   "htmlWhitespaceSensitivity": "ignore"
   *   "printWidth": 80,
   *   "semi": false,
   *   "singleQuote": true,
   * }
   * ```
   */
  prettierRules?: PartialPrettierExtendedOptions

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean
}

export type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>
