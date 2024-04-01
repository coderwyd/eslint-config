import JITI from 'jiti'

const jiti = JITI(import.meta.url)
/**
 * @type {import('./src').default}
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
)
