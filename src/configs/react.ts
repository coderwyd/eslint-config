import type { FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JSX, GLOB_TSX } from 'src/globs'
import { parserTs, pluginReact, pluginReactHooks } from '../plugins'
import type { OptionsHasTypeScript, OptionsOverrides } from '../types'
import { OFF } from './../flags'

export function react(options: OptionsHasTypeScript & OptionsOverrides = {}): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options
  return [
    {
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
    },
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
      rules: {
        'jsx-quotes': ['error', 'prefer-double'],

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
