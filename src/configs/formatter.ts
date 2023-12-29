import {
  GLOB_CSS,
  GLOB_GRAPHQL,
  GLOB_HTML,
  GLOB_LESS,
  GLOB_MARKDOWN,
  GLOB_POSTCSS,
  GLOB_SCSS,
  GLOB_TOML,
  GLOB_YAML,
} from '../constants/glob'

import { ensurePackages, interopDefault, parserPlain } from '../shared'
import type {
  FlatConfigItem,
  OptionsFormatters,
  PartialPrettierExtendedOptions,
  PrettierParser,
} from '../types'

export async function formatter(
  options: OptionsFormatters | true = {},
  prettierRules: PartialPrettierExtendedOptions = {},
): Promise<FlatConfigItem[]> {
  await ensurePackages(['eslint-plugin-prettier'])

  if (options === true) {
    options = {
      css: true,
      graphql: true,
      html: true,
      markdown: true,
    }
  }

  const pluginPrettier = await interopDefault(import('eslint-plugin-prettier'))

  function createPrettierFormatter(
    files: string[],
    parser: PrettierParser,
    plugins?: string[],
  ) {
    const rules = {
      ...prettierRules,
      parser,
    }

    if (plugins?.length) {
      rules.plugins = [...(rules.plugins || []), ...plugins]
    }

    const config: FlatConfigItem = {
      files,
      languageOptions: {
        parser: parserPlain,
      },
      name: `coderwyd:formatters:${parser}`,
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        'prettier/prettier': ['warn', rules],
      },
    }

    return config
  }

  const configs: FlatConfigItem[] = [
    {
      name: 'coderwyd:formatters:setup',
      plugins: {
        prettier: pluginPrettier,
      },
    },
  ]

  if (options.css) {
    const cssConfig = createPrettierFormatter([GLOB_CSS, GLOB_POSTCSS], 'css')
    const scssConfig = createPrettierFormatter([GLOB_SCSS], 'scss')
    const lessConfig = createPrettierFormatter([GLOB_LESS], 'less')

    configs.push(cssConfig, scssConfig, lessConfig)
  }

  if (options.html) {
    const htmlConfig = createPrettierFormatter([GLOB_HTML], 'html')
    configs.push(htmlConfig)
  }

  if (options.markdown) {
    const markdownConfig = createPrettierFormatter([GLOB_MARKDOWN], 'markdown')
    configs.push(markdownConfig)
  }

  if (options.graphql) {
    const graphqlConfig = createPrettierFormatter([GLOB_GRAPHQL], 'graphql')
    configs.push(graphqlConfig)
  }

  if (options.yaml) {
    const yamlConfig = createPrettierFormatter([GLOB_YAML], 'yaml')
    configs.push(yamlConfig)
  }

  if (options.toml) {
    await ensurePackages(['@toml-tools/parser', 'prettier-plugin-toml'])

    const tomlConfig = createPrettierFormatter([GLOB_TOML], 'toml', [
      'prettier-plugin-toml',
    ])

    configs.push(tomlConfig)
  }

  return configs
}
