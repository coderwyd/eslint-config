import { getVueVersion, interopDefault } from '../shared'
import { GLOB_VUE } from '../constants/glob'
import type {
  FlatConfigItem,
  OptionsFiles,
  OptionsHasTypeScript,
} from '../types'

export async function vue(
  options: OptionsHasTypeScript & OptionsFiles = {},
): Promise<FlatConfigItem[]> {
  const { files = [GLOB_VUE] } = options

  type VueConfigKey = import('eslint-plugin-vue').VueConfigKey

  const isVue3 = getVueVersion() === 3

  const [pluginVue, parserVue] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
  ] as const)

  const configKeys: VueConfigKey[] = isVue3
    ? ['vue3-essential', 'vue3-strongly-recommended', 'vue3-recommended']
    : ['essential', 'strongly-recommended', 'recommended']

  const vueRules = configKeys.reduce((preRules, key) => {
    const config = pluginVue.configs[key]
    return {
      ...preRules,
      ...config.rules,
    }
  }, {})

  return [
    {
      name: 'coderwyd:vue:setup',
      plugins: {
        vue: pluginVue,
      },
    },
    {
      files,
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: options.typescript
            ? ((await interopDefault(
                import('@typescript-eslint/parser'),
              )) as any)
            : null,
          sourceType: 'module',
        },
      },
      name: 'coderwyd:vue:rules',
      processor: pluginVue.processors!['.vue'],
      rules: {
        ...pluginVue.configs.base.rules,
        ...vueRules,

        'node/prefer-global/process': 'off',

        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style'],
          },
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineOptions',
              'defineProps',
              'defineEmits',
              'defineSlots',
            ],
          },
        ],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-indent': ['error', 2],
        'vue/html-quotes': ['error', 'double'],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-dupe-keys': 'off',
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': ['error', 'functions'],
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-setup-props-reactivity-loss': 'off',
        'vue/no-sparse-arrays': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-html': 'off',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-template': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { nonwords: false, words: true }],
        'vue/valid-define-options': 'warn',
      },
    },
  ]
}
