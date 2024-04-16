import type { Linter } from 'eslint'
import type { ConfigNames, RuleOptions } from './typegen'
import type { BuiltInParserName, LiteralUnion, RequiredOptions } from 'prettier'

export type Rules = RuleOptions

export type { ConfigNames }

export type TypedFlatConfigItem = Omit<
  Linter.FlatConfig<Linter.RulesRecord & Rules>,
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

type PrettierCustomParser = 'toml'
export type PrettierParser = BuiltInParserName | PrettierCustomParser

export interface PrettierOptions extends RequiredOptions {
  parser: LiteralUnion<PrettierParser>
}
export type PartialPrettierExtendedOptions = Partial<PrettierOptions>
