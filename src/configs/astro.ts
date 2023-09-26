import { type FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_ASTRO } from 'src/globs'
import { parserAstro, parserTs, pluginAstro } from '../plugins'
import type { OptionsHasTypeScript } from '../types'

export function astro(options: OptionsHasTypeScript = {}): FlatESLintConfigItem[] {
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
      plugins: {
        astro: pluginAstro,
      },
      rules: {
        ...(pluginAstro.configs.recommended.rules as any),
      },
    },
  ]
}
