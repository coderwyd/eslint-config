import { pluginComments } from '../plugins'
import type { FlatConfigItem } from '../types'

export async function comments(): Promise<FlatConfigItem[]> {
  return [
    {
      name: 'coderwyd:eslint-comments',
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
      },
    },
  ]
}
