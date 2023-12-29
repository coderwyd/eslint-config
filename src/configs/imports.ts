import { pluginAntfu, pluginImport } from '../plugins'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT } from '../constants/glob'
import type { FlatConfigItem } from '../types'

export async function imports(): Promise<FlatConfigItem[]> {
  return [
    {
      name: 'coderwyd:imports',
      plugins: {
        antfu: pluginAntfu,
        import: pluginImport,
      },
      rules: {
        'antfu/import-dedupe': 'error',
        'antfu/no-import-dist': 'error',
        'antfu/no-import-node-modules-by-path': 'error',

        'import/first': 'error',
        'import/newline-after-import': [
          'error',
          { considerComments: true, count: 1 },
        ],
        'import/no-default-export': 'error',
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
      },
    },
    {
      files: [
        `**/*config*.${GLOB_SRC_EXT}`,
        `**/views/${GLOB_SRC}`,
        `**/pages/${GLOB_SRC}`,
        `**/{index,vite,esbuild,rollup,webpack,rspack}.ts`,
        '**/*.d.ts',
        `${GLOB_MARKDOWN}/**`,
        '**/.prettierrc*',
      ],
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      name: 'antfu:imports:bin',
      rules: {
        'antfu/no-import-dist': 'off',
        'antfu/no-import-node-modules-by-path': 'off',
      },
    },
  ]
}
