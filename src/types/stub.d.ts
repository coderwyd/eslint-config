declare module 'eslint-plugin-n' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-unicorn' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-import-x' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}
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
    | 'vue3-essential'
    | 'vue3-recommended'
    | 'vue3-strongly-recommended'

  type VuePlugin = import('eslint').ESLint.Plugin & {
    configs: Record<VueConfigKey, import('eslint').ESLint.ConfigData>
  }

  const plugin: VuePlugin

  export default plugin
}

declare module 'eslint-plugin-react-hooks' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}
declare module 'eslint-plugin-react-refresh' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}
declare module 'eslint-plugin-tailwindcss' {
  const plugin: import('eslint').ESLint.Plugin

  export default plugin
}
