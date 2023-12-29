// eslint-disable-next-line antfu/no-import-dist
import { defineConfig } from './dist/index.js'

export default defineConfig(
  {
    vue: true,
    // react: true,
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
