import { pluginAntfu } from '../plugins'
import { interopDefault } from '../shared'
import type { TypedFlatConfigItem } from '../types'

export async function imports(): Promise<TypedFlatConfigItem[]> {
  const pluginImport = await interopDefault(import('eslint-plugin-import-lite'))

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

        'import/consistent-type-specifier-style': ['error', 'top-level'],
        'import/first': 'error',
        'import/newline-after-import': ['error', { count: 1 }],
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
      },
    },
  ]
}
