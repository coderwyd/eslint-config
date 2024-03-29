import prettierRules from 'eslint-config-prettier'
import { GLOB_PRETTIER_LINT } from '../constants/glob'
import { interopDefault } from '../shared'
import type { FlatConfigItem, PartialPrettierExtendedOptions } from '../types'

const { rules: eslintRules } = prettierRules

export async function prettier(rules: PartialPrettierExtendedOptions = {}) {
  const pluginPrettier = await interopDefault(import('eslint-plugin-prettier'))

  const pRules: PartialPrettierExtendedOptions = {
    ...rules,
  }

  const configs: FlatConfigItem[] = [
    {
      name: 'coderwyd:prettier:setup',
      plugins: {
        prettier: pluginPrettier,
      },
    },
    {
      files: GLOB_PRETTIER_LINT,
      name: 'coderwyd:prettier:rules',
      rules: {
        ...eslintRules,
        'prettier/prettier': ['warn', pRules],
        // eslint-disable-next-line perfectionist/sort-objects
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ]

  return configs
}
