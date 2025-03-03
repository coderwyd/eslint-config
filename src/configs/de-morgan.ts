import { pluginDeMorgan } from '../plugins'
import type { TypedFlatConfigItem } from '../types'

export function deMorgan(): TypedFlatConfigItem[] {
  return [
    {
      name: 'coderwyd/de-morgan/rules',
      plugins: {
        'de-morgan': pluginDeMorgan,
      },
      rules: {
        'de-morgan/no-negated-conjunction': 'error',
        'de-morgan/no-negated-disjunction': 'error',
      },
    },
  ]
}
