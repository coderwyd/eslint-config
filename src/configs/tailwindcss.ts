import { ensurePackages, interopDefault } from '../shared'
import type { OptionsOverrides, TypedFlatConfigItem } from '../types'

export async function tailwindcss(
  options: OptionsOverrides = {},
): Promise<TypedFlatConfigItem[]> {
  const { overrides } = options

  await ensurePackages(['eslint-plugin-tailwindcss'])

  const pluginTailwindcss = await interopDefault(
    import('eslint-plugin-tailwindcss'),
  )

  return [
    {
      name: 'coderwyd/tailwindcss/rules',
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'warn',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-contradicting-classname': 'warn',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/no-unnecessary-arbitrary-value': 'warn',

        ...overrides,
      },
    },
  ]
}
