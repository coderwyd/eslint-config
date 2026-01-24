import { GLOB_VUE } from '../constants/glob'
import { getVueVersion, interopDefault } from '../shared'
import type {
  OptionsFiles,
  OptionsHasTypeScript,
  OptionsOverrides,
  OptionsVue,
  TypedFlatConfigItem,
} from '../types'

export async function vue(
  options: OptionsVue &
    OptionsHasTypeScript &
    OptionsOverrides &
    OptionsFiles = {},
): Promise<TypedFlatConfigItem[]> {
  const { files = [GLOB_VUE], overrides = {} } = options

  const [pluginVue, parserVue] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
  ] as const)

  type VueConfigKey = import('eslint-plugin-vue').VueConfigKey

  const isVue3 = getVueVersion() === 3

  const configKeys: VueConfigKey[] = isVue3
    ? ['flat/essential', 'flat/strongly-recommended', 'flat/recommended']
    : [
        'flat/vue2-essential',
        'flat/vue2-strongly-recommended',
        'flat/vue2-recommended',
      ]
  function extractRules(config: any) {
    if (Array.isArray(config)) {
      return config.reduce(
        (acc, c) => {
          if (c && c.rules) {
            Object.assign(acc, c.rules)
          }
          return acc
        },
        {} as Record<string, any>,
      )
    }

    return config?.rules ?? {}
  }

  const vueRules = configKeys.reduce(
    (preRules, key) => {
      const config = pluginVue.configs[key]
      return {
        ...preRules,
        ...extractRules(config),
      }
    },
    {} as Record<string, any>,
  )

  return [
    {
      // This allows Vue plugin to work with auto imports
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
      },
      name: 'coderwyd/vue/setup',
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
      name: 'coderwyd/vue/rules',
      processor: pluginVue.processors!['.vue'],
      rules: {
        ...pluginVue.configs['flat/base'].rules,
        ...vueRules,
        'antfu/no-top-level-await': 'off',
        'node/prefer-global/process': 'off',

        'ts/explicit-function-return-type': 'off',

        'vue/block-order': [
          'error',
          {
            order: isVue3
              ? ['script', 'template', 'style']
              : ['template', 'script', 'style'],
          },
        ],
        // 'vue/component-api-style': ['warn', ['script-setup', 'composition']],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        // this is deprecated
        'vue/component-tags-order': 'off',
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
        // 'vue/define-props-declaration': ['warn', 'type-based'],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-quotes': ['error', 'double'],
        // 'vue/define-emits-declaration': ['warn', 'type-based'],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        // 'vue/next-tick-style': ['warn', 'promise'],
        'vue/no-constant-condition': 'warn',
        'vue/no-dupe-keys': 'off',
        'vue/no-duplicate-attr-inheritance': 'warn',
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': ['error', 'functions'],
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-required-prop-with-default': 'warn',
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-setup-props-reactivity-loss': 'off',
        'vue/no-sparse-arrays': 'error',
        'vue/no-unsupported-features': 'warn',
        'vue/no-unused-emit-declarations': 'warn',
        'vue/no-unused-refs': 'error',
        'vue/no-use-v-else-with-v-for': 'error',
        'vue/no-useless-mustaches': 'warn',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-html': 'off',
        'vue/no-v-text': 'warn',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-define-options': 'warn',
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-template': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'off',
        'vue/require-macro-variable-name': [
          'warn',
          {
            defineEmits: 'emit',
            defineProps: 'props',
            defineSlots: 'slots',
            useAttrs: 'attrs',
            useSlots: 'slots',
          },
        ],
        'vue/require-prop-types': 'off',
        // 'vue/singleline-html-element-content-newline': 'off',
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { nonwords: false, words: true }],

        'vue/valid-define-options': 'warn',

        ...overrides,
      },
    },
  ]
}
