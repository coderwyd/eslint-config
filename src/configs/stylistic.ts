import { interopDefault } from '../shared'
import { pluginAntfu } from '../plugins'
import type {
  OptionsOverrides,
  StylisticConfig,
  TypedFlatConfigItem,
} from '../types'

export const StylisticConfigDefaults: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
}

export async function stylistic(
  options: StylisticConfig & OptionsOverrides = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    indent,
    jsx,
    overrides = {},
    quotes,
    semi,
  } = {
    ...StylisticConfigDefaults,
    ...options,
  }

  const pluginStylistic = await interopDefault(
    import('@stylistic/eslint-plugin'),
  )

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  })

  return [
    {
      name: 'coderwyd/stylistic/rules',
      plugins: {
        antfu: pluginAntfu,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,

        'antfu/consistent-list-newline': 'error',

        'antfu/if-newline': 'warn',
        'antfu/top-level-function': 'warn',
        'curly': ['error', 'multi-or-nest', 'consistent'],

        ...overrides,
      },
    },
  ]
}
