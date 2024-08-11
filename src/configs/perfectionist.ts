import { pluginPerfectionist } from '../plugins'
import type { TypedFlatConfigItem } from '../types'

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export function perfectionist(): TypedFlatConfigItem[] {
  return [
    {
      name: 'coderwyd/perfectionist/rules',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-imports': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'internal-type',
              'parent',
              'parent-type',
              'sibling',
              'sibling-type',
              'index',
              'index-type',
              'object',
              'type',
              'side-effect',
              'side-effect-style',
            ],
            internalPattern: ['~/**', '@/**', '#**'],
            newlinesBetween: 'ignore',
          },
        ],
        'perfectionist/sort-named-exports': [
          'warn',
          { groupKind: 'values-first' },
        ],
        'perfectionist/sort-named-imports': [
          'warn',
          { groupKind: 'values-first' },
        ],
      },
    },
  ]
}
