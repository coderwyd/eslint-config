import 'tsx'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
require('sucrase/register')

const { defineConfig } = require('./src/index.ts')

// import { defineConfig } from './dist/index.js'

export default defineConfig(
  {
    vue: true,
    react: false,
    typescript: true,
    formatter: true,
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
)
