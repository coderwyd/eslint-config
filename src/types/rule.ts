import type { Linter } from 'eslint'
import type { ConfigNames, RuleOptions } from './typegen'

export type Rules = RuleOptions

export type { ConfigNames }

export type TypedFlatConfigItem = Omit<
  Linter.Config<Linter.RulesRecord & Rules>,
  'plugins'
> & {
  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>
}

export type BuiltInParserName =
  | 'acorn'
  | 'angular'
  | 'babel-flow'
  | 'babel-ts'
  | 'babel'
  | 'css'
  | 'espree'
  | 'flow'
  | 'glimmer'
  | 'graphql'
  | 'html'
  | 'json-stringify'
  | 'json'
  | 'json5'
  | 'less'
  | 'lwc'
  | 'markdown'
  | 'mdx'
  | 'meriyah'
  | 'scss'
  | 'typescript'
  | 'vue'
  | 'xml'
  | 'yaml'

type PrettierCustomParser = 'toml'
export type PrettierParser = BuiltInParserName | PrettierCustomParser

export type LiteralUnion<T extends U, U = string> =
  | T
  | (Pick<U, never> & { _?: never | undefined })

interface RequiredOptions {
  /**
   * Specify the line length that the printer will wrap on.
   * @default 120
   */
  printWidth: number
  /**
   * Specify the number of spaces per indentation-level.
   */
  tabWidth: number
  /**
   * Indent lines with tabs instead of spaces
   */
  useTabs?: boolean
  /**
   * Print semicolons at the ends of statements.
   */
  semi: boolean
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote: boolean
  /**
   * Use single quotes in JSX.
   */
  jsxSingleQuote: boolean
  /**
   * Print trailing commas wherever possible.
   */
  trailingComma: 'none' | 'es5' | 'all'
  /**
   * Print spaces between brackets in object literals.
   */
  bracketSpacing: boolean
  /**
   * Put the `>` of a multi-line HTML (HTML, XML, JSX, Vue, Angular) element at the end of the last line instead of being
   * alone on the next line (does not apply to self closing elements).
   */
  bracketSameLine: boolean
  /**
   * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
   * @deprecated use bracketSameLine instead
   */
  jsxBracketSameLine: boolean
  /**
   * Format only a segment of a file.
   */
  rangeStart: number
  /**
   * Format only a segment of a file.
   * @default Number.POSITIVE_INFINITY
   */
  rangeEnd: number
  /**
   * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
   * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
   * @default "preserve"
   */
  proseWrap: 'always' | 'never' | 'preserve'
  /**
   * Include parentheses around a sole arrow function parameter.
   * @default "always"
   */
  arrowParens: 'avoid' | 'always'
  /**
   * Provide ability to support new languages to prettier.
   */
  plugins: Array<string | any>
  /**
   * How to handle whitespaces in HTML.
   * @default "css"
   */
  htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore'
  /**
   * Which end of line characters to apply.
   * @default "lf"
   */
  endOfLine: 'auto' | 'lf' | 'crlf' | 'cr'
  /**
   * Change when properties in objects are quoted.
   * @default "as-needed"
   */
  quoteProps: 'as-needed' | 'consistent' | 'preserve'
  /**
   * Whether or not to indent the code inside <script> and <style> tags in Vue files.
   * @default false
   */
  vueIndentScriptAndStyle: boolean
  /**
   * Enforce single attribute per line in HTML, XML, Vue and JSX.
   * @default false
   */
  singleAttributePerLine: boolean

  /**
   * Control whether Prettier formats quoted code embedded in the file.
   * @default auto
   */
  embeddedLanguageFormatting: 'auto' | 'off'
}

export interface PrettierOptions extends RequiredOptions {
  parser: LiteralUnion<PrettierParser>
}
export type PartialPrettierExtendedOptions = Partial<PrettierOptions>
