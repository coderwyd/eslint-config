import { createRequire } from 'node:module'
import stylisticMigrate from '@stylistic/eslint-plugin-migrate'
import sortKeys from 'eslint-plugin-sort-keys'

import { coderwyd } from './dist/index.js'

const require = createRequire(import.meta.url)
require('sucrase/register')
// const { coderwyd } = require('./src/index.ts')

export default coderwyd(
  undefined,
  {
    files: ['src/**/*.ts'],
    plugins: {
      '@stylistic/migrate': stylisticMigrate,
      'sort-keys': sortKeys,
    },
    rules: {
      '@stylistic/migrate/rules': 'error',
      'sort-keys/sort-keys-fix': 'error',
    },
  },
)
