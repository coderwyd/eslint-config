import { GLOB_EXCLUDE } from '../constants/glob'
import type { TypedFlatConfigItem } from '../types'

export function ignores(): TypedFlatConfigItem[] {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
