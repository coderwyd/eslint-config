// import { createRequire } from 'node:module'
import styleMigrate from '@stylistic/eslint-plugin-migrate'
import coderwyd from './dist/index.js'

// const require = createRequire(import.meta.url)
// require('sucrase/register')
// const { coderwyd } = require('./src/index.ts')

export default coderwyd(
  {
    vue: true,
    // react: true,
    typescript: true,
    ignores: [
      'fixtures',
      '_fixtures',
    ],
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
  {
    files: ['src/configs/*.ts'],
    plugins: {
      'style-migrate': styleMigrate,
    },
    rules: {
      'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
    },
  },
)
