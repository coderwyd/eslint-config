# @coderwyd/eslint-config

[![release status](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml/badge.svg)](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/v/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)

## Feature

- 🛠️ Auto fix for formatting
- ✨ Support Vue, React, Svelte.
- 🎯 Designed to work with TypeScript, Vue out-of-box
- 🏆 Reasonable defaults, best practices, only one-line of config
- 🎨 Use ESlint to format HTML, CSS, LESS, SCSS, YAML, TOML, Markdown, JSON, JSONC.

## Usage

### Install

```bash
pnpm i -D eslint @coderwyd/eslint-config
```

### Create config file

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
// eslint.config.js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig()
```

With CJS:

```js
// eslint.config.js
const { defineConfig } = require('@coderwyd/eslint-config')

module.exports = defineConfig()
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code support (auto fix)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "html",
    "css",
    "less",
    "scss",
    "json",
    "jsonc",
    "yaml",
    "yml",
    "markdown",
    "toml"
  ]
}
```

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

and then

```bash
npm i -D lint-staged simple-git-hooks
```

## Options

### interface Options

```ts
interface OptionsConfig extends OptionsComponentExts {
  /**
   * The current working directory
   *
   * @default process.cwd()
   */
  cwd?: string

  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   * @default true
   */
  gitignore?: boolean | FlatGitignoreOptions

  /**
   * Core rules. Can't be disabled.
   */
  javascript?: OptionsOverrides

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: boolean | OptionsTypescript

  /**
   * Enable JSX related rules.
   *
   * Currently only stylistic rules are included.
   *
   * @default true
   */
  jsx?: boolean

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: boolean | OptionsOverrides

  /**
   * Enable Vue support.
   *
   * @default auto-detect based on the dependencies
   */
  vue?: boolean | OptionsVue

  /**
   * Enable JSONC support.
   *
   * @default true
   */
  jsonc?: boolean | OptionsOverrides

  /**
   * Enable react rules.
   *
   * Requires installing:
   * - `@eslint-react/eslint-plugin`
   * - `eslint-plugin-react-hooks`
   * - `eslint-plugin-react-refresh`
   *
   * @default false
   */
  react?: boolean | OptionsOverrides

  /**
   * Enable svelte rules.
   *
   * Requires installing:
   * - `eslint-plugin-svelte`
   *
   * @default false
   */
  svelte?: boolean | OptionsOverrides

  /**
   * Enable tainwindcss rules.
   *
   * @default auto-detect based on the dependencies
   */
  tailwindcss?: boolean | OptionsOverrides

  /**
   * Enable unocss rules.
   *
   * Requires installing:
   * - `@unocss/eslint-plugin`
   *
   * @default false
   */
  unocss?: boolean | OptionsUnoCSS

  /**
   * Enable stylistic rules.
   *
   * @see https://eslint.style/
   * @default true
   */
  stylistic?: boolean | (StylisticConfig & OptionsOverrides)

  /**
   * Enable regexp rules.
   *
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/
   * @default true
   */
  regexp?: boolean | (OptionsRegExp & OptionsOverrides)

  /**
   * Use external formatters to format files.
   *
   * @default
   * {
   *  "html": true,
   *  "css": true,
   *  "graphql": false,
   *  "markdown": false
   *  "yaml": false
   *  "toml": false
   * }
   *
   * When set to `true`, it will enable all formatters.
   */
  formatter?: boolean | OptionsFormatters

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean

  /**
   * Automatically rename plugins in the config.
   *
   * @default true
   */
  autoRenamePlugins?: boolean
}
```

## Thanks

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Donny Wang](https://github.com/coderwyd)
