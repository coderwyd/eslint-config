import { type FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_ASTRO } from 'src/globs'
import { parserAstro, parserTs, pluginAstro } from '../plugins'
import type { OptionsHasTypeScript, OptionsOverrides } from '../types'

export function astro(options: OptionsHasTypeScript & OptionsOverrides = {}): FlatESLintConfigItem[] {
  const { overrides = {} } = options
  return [
    {
      plugins: {
        astro: pluginAstro,
      },
    },
    {
      files: [GLOB_ASTRO],
      languageOptions: {
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: options.typescript ? (parserTs as any) : null,
        },
      },
      rules: {
        ...(pluginAstro.configs.recommended.rules as any),

        ...overrides,
      },
    },
  ]
}
