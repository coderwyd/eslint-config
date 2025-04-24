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
              // Side effect style imports (e.g. 'normalize.css')
              'side-effect-style',
              // Styles (e.g. *.{css,scss,less})
              'value-style',
              // Node.js built-in modules. (e.g. fs, path)
              'value-builtin',
              // External modules installed in the project (e.g. vue, lodash)
              'value-external',
              // Node.js subpath imports (e.g. fs/promises)
              'value-subpath',
              // Internal modules (e.g. @/utils, @/components)
              'value-internal',
              // Modules from parent directory (e.g. ../utils)
              'value-parent',
              // Modules from the same directory (e.g. ./utils)
              'value-sibling',
              // Main file from the current directory (e.g. ./index)
              'value-index',
              // TypeScript import-equals imports (e.g. import log = console.log)
              'ts-equals-import',
              // Side effect imports (e.g. import 'babel-polyfill')
              'side-effect',
              /**
               * Type import at the end
               */
              'type-builtin',
              'type-external',
              'type-subpath',
              'type-internal',
              'type-parent',
              'type-sibling',
              'type-index',
              /**
               * Imports that don’t fit into any other group
               */
              'unknown',
            ],
            internalPattern: ['^[~@#]/.*'],
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
