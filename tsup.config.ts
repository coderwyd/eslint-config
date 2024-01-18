import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  sourcemap: false,
  // target: 'node14',
  minify: false,
  shims: true,
})
