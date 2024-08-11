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
        'perfectionist/sort-vue-attributes': [
          'error',
          {
            // Based on: https://vuejs.org/style-guide/rules-recommended.html#element-attribute-order
            customGroups: {
              CONDITIONALS: 'v-*(else-if|if|else|show|cloak)',
              CONTENT: 'v-*(html|text)',
              DEFINITION: '*(is|:is|v-is)',
              // OTHER_DIRECTIVES e.g. 'v-custom-directive'
              EVENTS: '*(v-on|@*)',
              GLOBAL: '*(:id|id)',
              LIST_RENDERING: 'v-for',
              RENDER_MODIFIERS: 'v-*(pre|once)',
              SLOT: '*(v-slot|slot)',
              TWO_WAY_BINDING: '*(v-model|v-model:*)',
              UNIQUE: '*(ref|key|:ref|:key)',

            },
            groups: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              'UNIQUE',
              'SLOT',
              'TWO_WAY_BINDING',
              'unknown',
              'EVENTS',
              'CONTENT',
            ],
            type: 'natural',
          },
        ],
      },
    },
  ]
}
