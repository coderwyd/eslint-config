import { GLOB_EXCLUDE } from '../constants/glob'
import type { TypedFlatConfigItem } from '../types'

export async function ignores(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
