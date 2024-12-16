import prettierRules from 'eslint-config-prettier'
import type { TypedFlatConfigItem } from '../types'

const { rules: eslintRules } = prettierRules

export function prettier(): TypedFlatConfigItem[] {
  return [
    {
      name: 'coderwyd/prettier/rules',
      rules: {
        ...eslintRules,
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ]
}
