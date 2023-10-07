import type { FlatESLintConfigItem, OptionsHasTypeScript, OptionsOverrides } from '../types'
import { GLOB_JSX, GLOB_TSX } from '../globs'
import { parserTs, pluginReact, pluginReactHooks } from '../plugins'
import { OFF } from './../flags'

export function react(options: OptionsHasTypeScript & OptionsOverrides = {}): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          parser: options.typescript ? parserTs as any : null,
          sourceType: 'module',
        },
      },
      name: 'coderwyd:react',
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
      rules: {
        'style/jsx-quotes': ['error', 'prefer-double'],

        ...pluginReact.configs.recommended.rules,
        'react/react-in-jsx-scope': OFF,

        ...pluginReactHooks.configs.recommended.rules,

        ...overrides,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
