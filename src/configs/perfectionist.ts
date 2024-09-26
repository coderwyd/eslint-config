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
        'perfectionist/sort-exports': [
          'error',
          { order: 'asc', type: 'natural' },
        ],
        'perfectionist/sort-imports': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'type',
              ['internal', 'internal-type'],
              ['parent', 'sibling', 'index'],
              ['parent-type', 'sibling-type', 'index-type'],
              'object',
              'side-effect',
              'side-effect-style',
              'style',
              'unknown',
            ],
            internalPattern: ['~/**', '@/**', '#**'],
            newlinesBetween: 'ignore',
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-named-exports': [
          'warn',
          { groupKind: 'values-first', order: 'asc', type: 'natural' },
        ],
        'perfectionist/sort-named-imports': [
          'warn',
          { groupKind: 'values-first', order: 'asc', type: 'natural' },
        ],
      },
    },
  ]
}
