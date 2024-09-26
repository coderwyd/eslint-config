import { defineConfig } from './src'

export default defineConfig(
  {
    vue: true,
    react: false,
    typescript: true,
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
)
