import globals from 'globals'
import type { FlatESLintConfigItem, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic } from '../types'
import { GLOB_JSX, GLOB_TSX } from '../globs'
import { pluginReact, pluginReactHooks } from '../plugins'
import { OFF } from './../flags'

export function react(options: OptionsHasTypeScript & OptionsOverrides & OptionsStylistic = {}): FlatESLintConfigItem[] {
  const {
    overrides = {},
    stylistic = true,
  } = options

  const {
    indent = 2,
  } = typeof stylistic === 'boolean' ? {} : stylistic

  const extensions = [GLOB_JSX, ...[options.typescript ? GLOB_TSX : '']]

  return [
    {
      name: 'coderwyd:react:setup',
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
      settings: {
        'import/extensions': extensions,
        'import/resolver': {
          node: { extensions },
        },
        'react': {
          version: 'detect',
        },
      },
    },
    {
      files: [GLOB_JSX, ...[options.typescript ? GLOB_TSX : '']],
      languageOptions: {
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          // for @typescript/eslint-parser
          jsxPragma: undefined,
          // FIXME: @typescript-eslint v6 throws deprecation warnings
          // See https://github.com/jsx-eslint/eslint-plugin-react/issues/3602
          // Remove this when they support typescript 5.2
          suppressDeprecatedPropertyWarnings: true,
        },
      },
      name: 'coderwyd:react:rules',
      rules: {
        ...pluginReact.configs.recommended.rules as any,
        ...pluginReactHooks.configs.recommended.rules as any,

        'node/prefer-global/process': OFF,

        'react/display-name': ['off', { ignoreTranspilerName: false }],
        'react/iframe-missing-sandbox': 'warn',
        'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
        'react/no-unknown-property': ['error', {
          ignore: [
            // SVG
            'clip-path',
            'clip-rule',
            'fill-opacity',
            'fill-rule',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
          ],
        }],
        'react/no-unused-class-component-methods': 'error',
        'react/no-unused-state': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',

        ...stylistic
          ? {
              'react/jsx-boolean-value': ['error', 'never', { always: [] }],
              'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
              'react/jsx-curly-newline': ['error', {
                multiline: 'consistent',
                singleline: 'consistent',
              }],
              'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
              'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
              'react/jsx-fragments': ['error', 'syntax'],
              'react/jsx-indent': ['error', indent, { checkAttributes: false, indentLogicalExpressions: true }],
              'react/jsx-indent-props': ['error', indent],
              'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
              'react/jsx-no-useless-fragment': 'error',
              'react/jsx-props-no-multi-spaces': 'error',
              'react/jsx-tag-spacing': ['error', {
                afterOpening: 'never',
                beforeClosing: 'never',
                beforeSelfClosing: 'always',
                closingSlash: 'never',
              }],
              'react/jsx-wrap-multilines': ['error', {
                arrow: 'parens-new-line',
                assignment: 'parens-new-line',
                condition: 'parens-new-line',
                declaration: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
                return: 'parens-new-line',
              }],
              'react/sort-comp': ['error', {
                groups: {
                  lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'getDerivedStateFromProps',
                    'componentWillMount',
                    'UNSAFE_componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillUpdate',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount',
                  ],
                  rendering: [
                    '/^render.+$/',
                    'render',
                  ],
                },
                order: [
                  'static-variables',
                  'static-methods',
                  'instance-variables',
                  'lifecycle',
                  '/^handle.+$/',
                  '/^on.+$/',
                  'getters',
                  'setters',
                  '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                  'instance-methods',
                  'everything-else',
                  'rendering',
                ],
              }],
              'react/style-prop-object': 'error',
              'style/indent': ['error', indent, {
                SwitchCase: 1,
                VariableDeclarator: 1,
                // from: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
                ignoredNodes: [
                  'JSXElement',
                  'JSXElement :not(JSXExpressionContainer, JSXExpressionContainer *)',
                  'JSXAttribute',
                  'JSXIdentifier',
                  'JSXNamespacedName',
                  'JSXMemberExpression',
                  'JSXSpreadAttribute',
                  'JSXOpeningElement',
                  'JSXClosingElement',
                  'JSXFragment',
                  'JSXOpeningFragment',
                  'JSXClosingFragment',
                  'JSXText',
                  'JSXEmptyExpression',
                  'JSXSpreadChild',
                ],
                offsetTernaryExpressions: true,
                outerIIFEBody: 1,
              }],
              'style/jsx-quotes': ['error', 'prefer-double'],
            }
          : {},

        ...overrides,
      },

    },
  ]
}
