import { interopDefault } from '../shared'
import type { FlatConfigItem, OptionsOverrides } from '../types'

export async function tailwindcss(
  options: OptionsOverrides = {},
): Promise<FlatConfigItem[]> {
  const { overrides } = options
  const pluginTailwindcss = await interopDefault(
    import('eslint-plugin-tailwindcss'),
  )

  return [
    {
      name: 'coderwyd:tailwindcss',
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'warn',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-contradicting-classname': 'error',
        'tailwindcss/no-custom-classname': 'off',

        ...overrides,
      },
    },
  ]
}
