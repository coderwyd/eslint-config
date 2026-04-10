# @coderwyd/eslint-config

[![release status](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml/badge.svg)](https://github.com/coderwyd/eslint-config/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/v/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@coderwyd/eslint-config.svg)](https://npmjs.org/package/@coderwyd/eslint-config)

高度可配置的 ESLint 配置预设，开箱即用，支持 Vue、React、Svelte、TypeScript 等多个框架和语言。基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 构建。

English | [简体中文](#简体中文)

## ✨ 特性

- 🛠️ **开箱即用** - 合理的默认配置，无需复杂设置
- 🎯 **多框架支持** - Vue、React、Svelte、TypeScript 等
- 🔧 **自动修复** - 一键修复代码风格问题
- 📦 **自动检测** - 根据项目依赖自动启用相关规则
- 🎨 **Flat Config** - 基于 ESLint 新的 Flat Config 体系
- 🚀 **高性能** - 优化的规则合并策略
- 🧩 **可组合** - 灵活的配置组合和自定义

## 📦 快速开始

### 安装

使用你喜欢的包管理器安装：

```bash
# pnpm
pnpm i -D eslint @coderwyd/eslint-config

# npm
npm i -D eslint @coderwyd/eslint-config

# yarn
yarn add -D eslint @coderwyd/eslint-config
```

### 创建配置文件

在项目根目录创建 `eslint.config.js`（或 `eslint.config.mjs`）：

```js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig()
```

### 添加 npm 脚本

在 `package.json` 中添加以下脚本：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

完成！现在你可以运行 `npm run lint` 来检查代码风格。

## 🎯 框架支持

### Vue

```js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig({
  vue: true, // 支持 Vue 版本 (2 或 3)
})
```

### React

```js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig({
  react: true,
})
```

### TypeScript

```js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig({
  typescript: true,
})
```

### 组合使用

```js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig({
  vue: true,
  typescript: true,
  react: false, // 显式禁用
})
```

## ⚙️ 配置选项

### 基础选项

| 选项          | 说明                   | 默认值   |
| ------------- | ---------------------- | -------- |
| `typescript`  | 启用 TypeScript 支持   | 自动检测 |
| `vue`         | 启用 Vue 支持          | `true` 3 |
| `react`       | 启用 React 支持        | `false`  |
| `svelte`      | 启用 Svelte 支持       | `false`  |
| `tailwindcss` | 启用 Tailwind CSS 验证 | 自动检测 |
| `test`        | 启用测试文件支持       | `true`   |

### 规则覆盖

自定义 ESLint 规则：

```js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig({
  typescript: {
    overrides: {
      'ts/no-explicit-any': 'warn',
    },
  },
  vue: {
    overrides: {
      'vue/multi-word-component-names': 'off',
    },
  },
})
```

### 追加自定义配置

```js
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig(
  {
    typescript: true,
    vue: true,
  },
  // 追加自定义配置
  {
    files: ['src/**/*.vue'],
    rules: {
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  },
)
```

## 🔧 编辑器集成

### VS Code

在 `.vscode/settings.json` 中添加以下配置以启用自动修复：

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  }
}
```

## 📋 Git Hooks

使用 lint-staged 在提交前自动检查和修复代码：

### 安装依赖

```bash
pnpm i -D lint-staged simple-git-hooks
```

### 配置 package.json

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

### 初始化 Git Hooks

```bash
pnpm simple-git-hooks
```

## 📂 项目结构

本项目代码组织清晰，职责划分明确：

```
src/
├── index.ts              # 主入口，导出 defineConfig() 和公共类型
├── types.ts              # 统一管理所有类型定义
├── merge-options.ts      # 配置选项合并和规范化逻辑
├── utils.ts              # 工具函数（包管理检测等）
└── configs/
    ├── index.ts          # 配置模块导出
    └── tailwindcss.ts    # Tailwind CSS ESLint 规则配置
```

## 🔌 API 参考

### `defineConfig(options?, ...userConfigs?)`

创建 ESLint Flat Config 配置。

**参数：**

- `options?` (`Options`) - 配置选项对象
- `...userConfigs?` - 追加的 ESLint 配置对象

**返回值：** `FlatConfigComposer` - 可进一步自定义的配置对象

**类型导出：**

```ts
import type { Options, OptionsAddons, OptionsTailwindcss } from '@coderwyd/eslint-config'
```

**完整示例：**

```ts
import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig(
  {
    typescript: true,
    vue: true,
    tailwindcss: true,
    typescript: {
      overrides: {
        'ts/no-explicit-any': 'warn',
      },
    },
  },
  // 自定义 Vue 文件规则
  {
    files: ['src/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT](./LICENSE) License &copy; 2023-PRESENT [Donny Wang](https://github.com/coderwyd)

---

## 简体中文

本项目为开箱即用的 ESLint 配置预设。更详细内容请查看上方英文文档。

### 快速开始

```bash
# 安装
pnpm i -D eslint @coderwyd/eslint-config

# 创建 eslint.config.js
echo "import { defineConfig } from '@coderwyd/eslint-config'; export default defineConfig()" > eslint.config.js

# 使用
pnpm eslint .
```
