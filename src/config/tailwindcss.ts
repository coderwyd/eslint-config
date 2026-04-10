import type { OptionsFiles, OptionsOverrides, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { OptionsTailwindcss } from '../types'
import { GLOB_SRC, interopDefault } from '@antfu/eslint-config'

export async function tailwindcss(
  options: OptionsOverrides & OptionsFiles & OptionsTailwindcss = {},
): Promise<TypedFlatConfigItem[]> {
  const { files = [GLOB_SRC], overrides = {}, settings = {} } = options

  const tailwindCSSPlugin = await interopDefault(import('eslint-plugin-better-tailwindcss'))

  return [
    {
      name: 'coderwyd/tailwindcss/setup',
      plugins: {
        tailwindcss: tailwindCSSPlugin,
      },
    },
    {
      files,
      name: 'coderwyd/tailwindcss/rules',
      rules: {
        'tailwindcss/enforce-consistent-class-order': 'warn',
        'tailwindcss/no-duplicate-classes': 'warn',
        'tailwindcss/no-unnecessary-whitespace': 'warn',
        'tailwindcss/no-deprecated-classes': 'warn',
        'tailwindcss/no-conflicting-classes': 'warn',
        'tailwindcss/enforce-shorthand-classes': 'warn',
        'tailwindcss/enforce-consistent-variable-syntax': 'warn',
        // 'tailwindcss/no-unknown-classes': 'warn',
        ...overrides,
      },
      settings: {
        'better-tailwindcss': settings,
      },
    },
  ]
}
