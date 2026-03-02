import { GLOB_SRC } from '../constants/glob'
import { pluginNode } from '../plugins'
import type { TypedFlatConfigItem } from '../types'

export function node(): TypedFlatConfigItem[] {
  return [
    {
      name: 'coderwyd/node/setup',
      plugins: {
        node: pluginNode,
      },
    },
    {
      files: [GLOB_SRC],
      name: 'coderwyd/node/rules',
      rules: {
        'node/handle-callback-err': ['error', '^(err|error)$'],
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-unsupported-features/es-builtins': 'error',
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/process': ['error', 'never'],
        'node/process-exit-as-throw': 'error',
      },
    },
  ]
}
