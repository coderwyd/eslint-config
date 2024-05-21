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
import { StylisticConfigDefaults } from './stylistic'
import type {
  OptionsFormatters,
  PartialPrettierExtendedOptions,
  PrettierParser,
  StylisticConfig,
  TypedFlatConfigItem,
} from '../types'

export async function formatter(
  options: OptionsFormatters | true = {},
  stylistic: StylisticConfig = {},
): Promise<TypedFlatConfigItem[]> {
  const { css, graphql, html, markdown, toml, yaml }
    = options === true
      ? {
          css: true,
          graphql: true,
          html: true,
          markdown: true,
          toml: true,
          yaml: true,
        }
      : options

  const { indent, quotes, semi } = {
    ...StylisticConfigDefaults,
    ...stylistic,
  }

  const prettierOptions: PartialPrettierExtendedOptions = Object.assign(
    {
      endOfLine: 'auto',
      printWidth: 80,
      semi,
      singleQuote: quotes === 'single',
      tabWidth: typeof indent === 'number' ? indent : 2,
      trailingComma: 'all',
      useTabs: indent === 'tab',
    } satisfies PartialPrettierExtendedOptions,
    typeof options === 'boolean' ? {} : options.prettierOptions || {},
  )
  await ensurePackages(['eslint-plugin-format'])

  const pluginFormat = await interopDefault(import('eslint-plugin-format'))

  function createPrettierFormatter(
    files: string[],
    parser: PrettierParser,
    plugins?: string[],
  ) {
    const rules = {
      ...prettierOptions,
      parser,
    }

    const markdownRules = {
      printWidth: 120,
      ...rules,
      embeddedLanguageFormatting: 'off',
    }

    if (plugins?.length)
      rules.plugins = [...(rules.plugins || []), ...plugins]

    const config: TypedFlatConfigItem = {
      files,
      languageOptions: {
        parser: parserPlain,
      },
      name: `coderwyd/formatter/${parser}`,
      plugins: {
        format: pluginFormat,
      },
      rules: {
        'format/prettier': [
          'warn',
          parser === 'markdown' ? markdownRules : rules,
        ],
      },
    }

    return config
  }

  const configs: TypedFlatConfigItem[] = [
    {
      name: 'coderwyd/formatter/setup',
      plugins: {
        format: pluginFormat,
      },
    },
  ]

  if (html) {
    const htmlConfig = createPrettierFormatter([GLOB_HTML], 'html')
    configs.push(htmlConfig)
  }

  if (css) {
    const cssConfig = createPrettierFormatter([GLOB_CSS, GLOB_POSTCSS], 'css')
    const scssConfig = createPrettierFormatter([GLOB_SCSS], 'scss')
    const lessConfig = createPrettierFormatter([GLOB_LESS], 'less')

    configs.push(cssConfig, scssConfig, lessConfig)
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
