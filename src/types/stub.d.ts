declare module 'eslint-plugin-react-compiler' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-vue' {
  export type VueConfigKey =
    | 'flat/base'
    | 'flat/essential'
    | 'flat/no-layout-rules'
    | 'flat/recommended'
    | 'flat/strongly-recommended'
    | 'flat/vue2-essential'
    | 'flat/vue2-recommended'
    | 'flat/vue2-strongly-recommended'

  type VuePlugin = import('eslint').ESLint.Plugin & {
    configs: Record<VueConfigKey, import('eslint').ESLint.ConfigData>
  }

  const plugin: VuePlugin

  export default plugin
}

declare module 'eslint-plugin-tailwindcss' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}
