# @coderwyd/eslint-config

[![release status](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml/badge.svg)](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/v/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)

## Feature

- ✨ Single quotes, no semi
- 🛠️ Auto fix for formatting
- 🎯 Designed to work with TypeScript, Vue out-of-box
- 🔍 Lints also for json, yaml, markdown
- 🧩 Sorted imports, dangling commas
- 🏆 Reasonable defaults, best practices, only one-line of config
- 🚀 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!

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

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

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

## Thanks

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Donny Wang](https://github.com/coderwyd)
