import { createRequire } from 'node:module'
import sortKeys from 'eslint-plugin-sort-keys'
import styleMigrate from '@stylistic/eslint-plugin-migrate'
import coderwyd from './dist/index.js'

const require = createRequire(import.meta.url)
require('sucrase/register')
// const { coderwyd } = require('./src/index.ts')

export default coderwyd(
  undefined,
  {
    files: ['src/**/*.ts'],
    plugins: {
      'sort-keys': sortKeys,
    },
    rules: {
      'sort-keys/sort-keys-fix': 'error',
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
