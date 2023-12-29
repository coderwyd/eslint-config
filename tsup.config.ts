import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-react-refresh',
  ],
  sourcemap: false,
  target: 'node14',
  minify: false,
  shims: true,
})
