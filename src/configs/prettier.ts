import prettierRules from 'eslint-config-prettier'
import { GLOB_PRETTIER_LINT } from '../constants/glob'
import { interopDefault } from '../shared'
import type { TypedFlatConfigItem } from '../types'

const { rules: eslintRules } = prettierRules

export async function prettier(): Promise<TypedFlatConfigItem[]> {
  const pluginPrettier = await interopDefault(import('eslint-plugin-prettier'))

  return [
    {
      files: GLOB_PRETTIER_LINT,
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...eslintRules,
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'prettier/prettier': 'warn',
      },
    },
  ]
}
