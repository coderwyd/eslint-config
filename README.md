# @coderwyd/eslint-config

[![release status](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml/badge.svg)](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/v/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)

## Feature

- 🛠️ Auto fix for formatting
- ✨ Support Vue, React, Svelte.
- 🎯 Designed to work with TypeScript, Vue out-of-box
- 🏆 Reasonable defaults, best practices, only one-line of config
- 🎨 Use ESlint and Prettier to format HTML, CSS, LESS, SCSS, YAML, TOML, Markdown, JSON, JSONC.

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

> Note that `.eslintignore` no longer works in Flat config, see [customization](#customization) for more details.

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
interface OptionsConfig {
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
   * - `eslint-plugin-react`
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
   * Whether to use prettierrc
   *
   * If true, the rules in prettierrc will override the default rules
   *
   * @default true
   */
  usePrettierrc?: boolean

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
   */
  formatter?: OptionsFormatters

  /**
   * Default prettier rules
   *
   * @default
   * ```json
   * {
   *   "arrowParens": "avoid",
   *   "htmlWhitespaceSensitivity": "ignore"
   *   "printWidth": 80,
   *   "semi": false,
   *   "singleQuote": true,
   * }
   * ```
   */
  prettierRules?: PartialPrettierExtendedOptions

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean
}
```

## Thanks

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Donny Wang](https://github.com/coderwyd)
