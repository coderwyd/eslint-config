import { GLOB_ASTRO } from '../globs'
import { parserAstro, parserTs, pluginAstro } from '../plugins'
import type { FlatESLintConfigItem, OptionsHasTypeScript, OptionsOverrides } from '../types'

export function astro(options: OptionsHasTypeScript & OptionsOverrides = {}): FlatESLintConfigItem[] {
  const { overrides = {} } = options
  return [
    {
      files: [GLOB_ASTRO],
      languageOptions: {
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: options.typescript ? (parserTs as any) : null,
        },
      },
      name: 'coderwyd:astro',
      plugins: {
        astro: pluginAstro,
      },
      rules: {
        ...(pluginAstro.configs.recommended.rules as any),

        ...overrides,
      },
    },
  ]
}
