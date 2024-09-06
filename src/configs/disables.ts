import { GLOB_DTS, GLOB_SRC, GLOB_SRC_EXT } from '../constants/glob'
import type { TypedFlatConfigItem } from '../types'

export function disables(): TypedFlatConfigItem[] {
  return [
    {
      files: [`scripts/${GLOB_SRC}`],
      name: 'coderwyd/disables/scripts',
      rules: {
        'no-console': 'off',
        'ts/explicit-function-return-type': 'off',
        'unicorn/consistent-function-scoping': 'off',
      },
    },
    {
      files: [`cli/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      name: 'coderwyd/disables/cli',
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      name: 'coderwyd/disables/bin',
      rules: {
        'antfu/no-import-dist': 'off',
        'antfu/no-import-node-modules-by-path': 'off',
      },
    },
    {
      files: [GLOB_DTS],
      name: 'coderwyd/disables/dts',
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.([tj])s?(x)'],
      name: 'coderwyd/disables/test',
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      name: 'coderwyd/disables/cjs',
      rules: {
        'ts/no-require-imports': 'off',
      },
    },
  ]
}
