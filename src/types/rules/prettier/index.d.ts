import type { RuleConfig } from '../rule-config'
import type { BuiltInParserName, LiteralUnion, RequiredOptions } from 'prettier'

type PrettierCustomParser = 'toml'
export type PrettierParser = BuiltInParserName | PrettierCustomParser
export interface PrettierOptions extends RequiredOptions {
  parser: LiteralUnion<PrettierParser>
}
export type PartialPrettierExtendedOptions = Partial<PrettierOptions>

/**
 * Use Prettier to format code.
 *
 */
type PrettierRuleConfig = RuleConfig<PrettierOptions>

/**
 * Use Prettier to format code.
 *
 */
export interface PrettierRule {
  /**
   * Use Prettier to format code.
   *
   */
  'prettier/prettier': PrettierRuleConfig
}
