import { defineConfig } from './src/index'

export default defineConfig({
  tailwindcss: true,
  unocss: true,
  rules: {
    'jsonc/sort-keys': 'off',
  },
})
