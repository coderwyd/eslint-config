declare module 'eslint-plugin-react-compiler' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-vue' {
  export type VueConfigKey =
    | 'base'
    | 'essential'
    | 'no-layout-rules'
    | 'recommended'
    | 'strongly-recommended'
    | 'vue2-essential'
    | 'vue2-recommended'
    | 'vue2-strongly-recommended'

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
