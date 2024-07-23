import c from 'picocolors'
import { devDependencies, version } from '../../package.json'

export const ARROW = c.cyan('→')
export const CHECK = c.green('✔')
export const CROSS = c.red('✘')
export const WARN = c.yellow('ℹ')

export const eslintVersion = devDependencies.eslint
export { version }

export const vscodeSettingsString = `
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "svelte",
    "html",
    "css",
    "less",
    "scss",
    "json",
    "jsonc",
    "yaml",
    "yml",
    "markdown",
    "toml",
    "gql",
    "graphql"
  ]
`
