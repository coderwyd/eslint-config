import styleMigrate from '@stylistic/eslint-plugin-migrate'
import JITI from 'jiti'

const jiti = JITI(import.meta.url)
/**
 * @type {import('./src').defineConfig}
 */
const { defineConfig } = jiti('./src')
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
