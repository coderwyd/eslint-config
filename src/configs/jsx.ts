import { GLOB_JSX, GLOB_TSX } from '../constants/glob'
import type { TypedFlatConfigItem } from '../types'

export function jsx(): TypedFlatConfigItem[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      name: 'coderwyd/jsx/setup',
    },
  ]
}
