import type { RuleConfig } from '../rule-config'

/**
 * Option.
 */
export interface NoUnnecessaryArbitraryValueOption {
  callees?: string[]
  ignoredKeys?: string[]
  config?: string | Record<string, any>
  tags?: string[]

  [k: string]: any
}

/**
 * Options.
 */
export type NoUnnecessaryArbitraryValueOptions = [
  NoUnnecessaryArbitraryValueOption?,
]

/**
 * Avoid unjustified arbitrary classnames.
 * @see [no-unnecessary-arbitrary-value](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-unnecessary-arbitrary-value.md)
 */
export type NoUnnecessaryArbitraryValueRuleConfig =
  RuleConfig<NoUnnecessaryArbitraryValueOptions>

/**
 * Avoid unjustified arbitrary classnames.
 * @see [no-unnecessary-arbitrary-value](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-unnecessary-arbitrary-value.md)
 */
export interface NoUnnecessaryArbitraryValueRule {
  /**
   * Avoid unjustified arbitrary classnames.
   * @see [no-unnecessary-arbitrary-value](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-unnecessary-arbitrary-value.md)
   */
  'tailwindcss/no-unnecessary-arbitrary-value': NoUnnecessaryArbitraryValueRuleConfig
}
