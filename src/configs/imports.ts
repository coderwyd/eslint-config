import { pluginAntfu, pluginImport } from '../plugins'
import { GLOB_SRC_EXT } from '../constants/glob'
import type { OptionsStylistic, TypedFlatConfigItem } from '../types'

export async function imports(
  options: OptionsStylistic = {},
): Promise<TypedFlatConfigItem[]> {
  const { stylistic = true } = options
  return [
    {
      name: 'coderwyd/imports/rules',
      plugins: {
        antfu: pluginAntfu,
        import: pluginImport,
      },
      rules: {
        'antfu/import-dedupe': 'error',
        'antfu/no-import-dist': 'error',
        'antfu/no-import-node-modules-by-path': 'error',

        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            pathGroups: [{ group: 'internal', pattern: '{{@,~}/,#}**' }],
            pathGroupsExcludedImportTypes: ['type'],
          },
        ],

        ...(stylistic
          ? {
              'import/newline-after-import': ['error', { count: 1 }],
            }
          : {}),
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      name: 'coderwyd/imports/disables/bin',
      rules: {
        'antfu/no-import-dist': 'off',
        'antfu/no-import-node-modules-by-path': 'off',
      },
    },
  ]
}
