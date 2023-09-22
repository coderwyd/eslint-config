import type { FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JSX, GLOB_TSX } from 'src/globs'
import { parserTs, pluginReact, pluginReactHooks } from '../plugins'
import type { OptionsHasTypeScript } from '../types'

export function react(options: OptionsHasTypeScript = {}): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parser: options.typescript ? parserTs as any : null,
        parserOptions: {
          sourceType: 'module',
        },
      },
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'jsx-quotes': ['error', 'prefer-double'],

        ...pluginReact.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off',

        ...pluginReactHooks.configs.recommended.rules,
      },
    },
  ]
}
