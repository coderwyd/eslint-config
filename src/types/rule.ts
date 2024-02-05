import type {
  EslintCommentsRules,
  EslintRules,
  FlatESLintConfigItem,
  ImportRules,
  JSDocRules,
  JsoncRules,
  MergeIntersection,
  NRules,
  Prefix,
  ReactHooksRules,
  ReactRules,
  RenamePrefix,
  RuleConfig,
  TypeScriptRules,
  UnicornRules,
  VitestRules,
  VueRules,
} from '@antfu/eslint-define-config'
import type { Linter } from 'eslint'
import type { Rules as AntfuRules } from 'eslint-plugin-antfu'

import type { BuiltInParserName, LiteralUnion, RequiredOptions } from 'prettier'

export type PrettierCustomParser = 'astro' | 'svelte' | 'toml'

export type PrettierParser = BuiltInParserName | PrettierCustomParser
export interface PrettierOptions extends RequiredOptions {
  parser: LiteralUnion<PrettierParser>
}

export type PartialPrettierExtendedOptions = Partial<PrettierOptions>

export type WrapRuleConfig<T extends { [key: string]: any }> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<T[K]>
}

export type EslintFlatRules = WrapRuleConfig<
  MergeIntersection<
    RenamePrefix<TypeScriptRules, '@typescript-eslint/', 'ts/'> &
      RenamePrefix<VitestRules, 'vitest/', 'test/'> &
      RenamePrefix<NRules, 'n/', 'node/'> &
      Prefix<AntfuRules, 'antfu/'> &
      ReactHooksRules &
      ReactRules &
      JSDocRules &
      ImportRules &
      EslintRules &
      JsoncRules &
      VueRules &
      UnicornRules &
      EslintCommentsRules & {
        // TODO: TOML rules
        'test/no-only-tests': RuleConfig<[]>
      }
  >
>

export type FlatConfigItem = Omit<
  FlatESLintConfigItem<EslintFlatRules, false>,
  'plugins'
> & {
  /**
   * Custom name of each config item
   */
  name?: string

  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>
}

export type UserConfigItem = FlatConfigItem | Linter.FlatConfig
