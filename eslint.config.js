import 'tsx'
import { createRequire } from 'node:module'

// eslint-disable-next-line antfu/no-import-dist
import { defineConfig as defineConfig2 } from './dist/index.js'

const require = createRequire(import.meta.url)

const { defineConfig: defineConfig1 } = require('./src/index.ts')

const useBuild = false

/** @type {import('./src/index.ts').defineConfig} */
const defineConfig = useBuild ? defineConfig2 : defineConfig1
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
