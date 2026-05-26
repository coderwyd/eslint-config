import { defineConfig } from './src/index'

export default defineConfig({
  tailwindcss: true,
  type: 'lib',
  rules: {
    'jsonc/sort-keys': 'off',
  },
})
