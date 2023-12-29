import { pluginPerfectionist } from '../plugins'
import type { FlatConfigItem } from '../types'

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<FlatConfigItem[]> {
  return [
    {
      name: 'coderwyd:perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
  ]
}
