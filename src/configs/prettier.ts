import prettierRules from 'eslint-config-prettier'
import type { TypedFlatConfigItem } from '../types'

const rules = prettierRules.rules
delete rules['vue/html-self-closing']

export function prettier(): TypedFlatConfigItem[] {
  return [
    {
      name: 'coderwyd/prettier/rules',
      rules: {
        ...rules,
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ]
}
