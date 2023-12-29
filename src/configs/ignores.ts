import { GLOB_EXCLUDE } from '../constants/glob'
import type { FlatConfigItem } from '../types'

export async function ignores(): Promise<FlatConfigItem[]> {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
