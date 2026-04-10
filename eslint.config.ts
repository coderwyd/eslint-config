import { defineConfig } from './src/index'

export default defineConfig({
  tailwindcss: true,
  unocss: true,
  type: 'lib',
  rules: {
    'jsonc/sort-keys': 'off',
  },
})
