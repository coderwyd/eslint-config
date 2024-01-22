import type { PartialPrettierExtendedOptions } from '../types'

export const DEFAULT_PRETTIER_RULES: PartialPrettierExtendedOptions = {
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 120,
  semi: false,
  singleQuote: true,
}
