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
  options: OptionsFormatters = {},
  prettierRules: PartialPrettierExtendedOptions = {},
): Promise<FlatConfigItem[]> {
  await ensurePackages(['eslint-plugin-prettier'])

  const {
    css = true,
    graphql,
    html = true,
    markdown,
    toml,
    yaml,
  } = options || {}

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
      name: `coderwyd:formatter:${parser}`,
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
      name: 'coderwyd:formatter:setup',
      plugins: {
        prettier: pluginPrettier,
      },
    },
  ]

  if (css) {
    const cssConfig = createPrettierFormatter([GLOB_CSS, GLOB_POSTCSS], 'css')
    const scssConfig = createPrettierFormatter([GLOB_SCSS], 'scss')
    const lessConfig = createPrettierFormatter([GLOB_LESS], 'less')

    configs.push(cssConfig, scssConfig, lessConfig)
  }

  if (html) {
    const htmlConfig = createPrettierFormatter([GLOB_HTML], 'html')
    configs.push(htmlConfig)
  }

  if (markdown) {
    const markdownConfig = createPrettierFormatter([GLOB_MARKDOWN], 'markdown')
    configs.push(markdownConfig)
  }

  if (graphql) {
    const graphqlConfig = createPrettierFormatter([GLOB_GRAPHQL], 'graphql')
    configs.push(graphqlConfig)
  }

  if (yaml) {
    const yamlConfig = createPrettierFormatter([GLOB_YAML], 'yaml')
    configs.push(yamlConfig)
  }

  if (toml) {
    await ensurePackages(['@toml-tools/parser', 'prettier-plugin-toml'])

    const tomlConfig = createPrettierFormatter([GLOB_TOML], 'toml', [
      'prettier-plugin-toml',
    ])

    configs.push(tomlConfig)
  }

  return configs
}
