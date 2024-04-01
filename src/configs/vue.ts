import { getVueVersion, interopDefault } from '../shared'
import { GLOB_VUE } from '../constants/glob'
import type {
  OptionsFiles,
  OptionsHasTypeScript,
  OptionsOverrides,
  TypedFlatConfigItem,
} from '../types'

export async function vue(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsFiles = {},
): Promise<TypedFlatConfigItem[]> {
  const { files = [GLOB_VUE], overrides = {} } = options

  const [pluginVue, parserVue] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
  ] as const)

  type VueConfigKey = import('eslint-plugin-vue').VueConfigKey

  const isVue3 = getVueVersion() === 3

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
      // This allows Vue plugin to work with auto imports
      // https://github.com/vuejs/eslint-plugin-vue/pull/2422
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
            order: isVue3
              ? ['script', 'template', 'style']
              : ['template', 'script', 'style'],
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
        'vue/html-self-closing': [
          'error',
          {
            html: {
              component: 'always',
              normal: 'always',
              void: 'any',
            },
            math: 'always',
            svg: 'always',
          },
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-constant-condition': 'warn',
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

        ...{
          // format
          'vue/array-bracket-spacing': ['error', 'never'],
          'vue/arrow-spacing': ['error', { after: true, before: true }],
          'vue/block-spacing': ['error', 'always'],
          'vue/block-tag-newline': [
            'error',
            {
              multiline: 'always',
              singleline: 'always',
            },
          ],
          'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
          'vue/comma-dangle': ['error', 'always-multiline'],
          'vue/comma-spacing': ['error', { after: true, before: false }],
          'vue/comma-style': ['error', 'last'],
          'vue/html-comment-content-spacing': [
            'error',
            'always',
            {
              exceptions: ['-'],
            },
          ],
          'vue/key-spacing': [
            'error',
            { afterColon: true, beforeColon: false },
          ],
          'vue/keyword-spacing': ['error', { after: true, before: true }],
          'vue/object-curly-newline': 'off',
          'vue/object-curly-spacing': ['error', 'always'],
          'vue/object-property-newline': [
            'error',
            { allowMultiplePropertiesPerLine: true },
          ],
          'vue/operator-linebreak': ['error', 'before'],
          'vue/padding-line-between-blocks': ['error', 'always'],
          'vue/quote-props': ['error', 'consistent-as-needed'],
          'vue/space-in-parens': ['error', 'never'],
          'vue/template-curly-spacing': 'error',
        },

        ...overrides,
      },
    },
  ]
}
