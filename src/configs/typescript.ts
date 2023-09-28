import process from 'node:process'
import type { FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JSX, GLOB_TESTS, GLOB_TS, GLOB_TSX } from '../globs'
import { parserTs, pluginAntfu, pluginImport, pluginTs } from '../plugins'
import { OFF } from '../flags'
import type { OptionsComponentExts, OptionsOverrides, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes } from '../types'
import { renameRules } from '../utils'

export function typescript(
  options?: OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions,
): FlatESLintConfigItem[] {
  const {
    componentExts = [],
    overrides = {},
    parserOptions = {},
    tsconfigPath,
  } = options ?? {}

  const typeAwareRules: FlatESLintConfigItem['rules'] = {
    'dot-notation': OFF,
    'no-implied-eval': OFF,
    'no-throw-literal': OFF,
    'ts/await-thenable': 'error',
    'ts/dot-notation': ['error', { allowKeywords: true }],
    'ts/no-floating-promises': 'error',
    'ts/no-for-in-array': 'error',
    'ts/no-implied-eval': 'error',
    'ts/no-misused-promises': 'error',
    'ts/no-throw-literal': 'error',
    'ts/no-unnecessary-type-assertion': 'error',
    'ts/no-unsafe-argument': 'error',
    'ts/no-unsafe-assignment': 'error',
    'ts/no-unsafe-call': 'error',
    'ts/no-unsafe-member-access': 'error',
    'ts/no-unsafe-return': 'error',
    'ts/restrict-plus-operands': 'error',
    'ts/restrict-template-expressions': 'error',
    'ts/unbound-method': 'error',
  }

  return [
    {
      plugins: {
        antfu: pluginAntfu,
        import: pluginImport,
        ts: pluginTs as any,
      },
    },
    {
      files: [
        GLOB_TS,
        GLOB_TSX,
        ...componentExts.map(ext => `**/*.${ext}`),
      ],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          sourceType: 'module',
          ...tsconfigPath
            ? {
                project: [tsconfigPath],
                tsconfigRootDir: process.cwd(),
              }
            : {},
          ...parserOptions as any,
        },
      },
      rules: {
        ...renameRules(
          pluginTs.configs['eslint-recommended'].overrides![0].rules!,
          '@typescript-eslint/',
          'ts/',
        ),
        ...renameRules(
          pluginTs.configs.strict.rules!,
          '@typescript-eslint/',
          'ts/',
        ),

        'antfu/generic-spacing': 'error',
        'antfu/named-tuple-spacing': 'error',
        'antfu/no-cjs-exports': 'error',
        'antfu/no-const-enum': 'error',
        'antfu/no-ts-export-equal': 'error',

        'no-dupe-class-members': OFF,
        'no-extra-parens': OFF,
        'no-invalid-this': OFF,
        'no-loss-of-precision': OFF,
        'no-redeclare': OFF,
        'no-use-before-define': OFF,
        'no-useless-constructor': OFF,

        // TS
        'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
        'ts/no-dupe-class-members': 'error',
        'ts/no-dynamic-delete': OFF,
        'ts/no-explicit-any': OFF,
        'ts/no-extra-parens': ['error', 'functions'],
        'ts/no-invalid-this': 'error',
        'ts/no-invalid-void-type': OFF,
        'ts/no-loss-of-precision': 'error',
        'ts/no-non-null-assertion': OFF,
        'ts/no-redeclare': 'error',
        'ts/no-require-imports': 'error',
        'ts/no-unused-vars': OFF,
        'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'ts/prefer-ts-expect-error': 'error',
        'ts/triple-slash-reference': OFF,

        ...tsconfigPath ? typeAwareRules : {},
        ...overrides,
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': OFF,
        'import/no-duplicates': OFF,
        'unused-imports/no-unused-vars': OFF,
      },
    },
    {
      files: GLOB_TESTS,
      rules: {
        'no-unused-expressions': OFF,
      },
    },
    {
      files: [GLOB_JSX],
      rules: {
        'ts/no-require-imports': OFF,
        'ts/no-var-requires': OFF,
      },
    },
  ]
}
