import 'tsx'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const { defineConfig } = require('./src/index.ts')

/** @type {import('./src/index.ts').defineConfig} */
export default defineConfig(
  {
    vue: true,
    react: false,
    typescript: true,
    ignores: ['fixtures', '_fixtures'],
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
)
