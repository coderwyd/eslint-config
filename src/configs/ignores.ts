import { GLOB_EXCLUDE } from '../constants/glob'
import type { TypedFlatConfigItem } from '../types'

export function ignores(userIgnores: string[] = []): TypedFlatConfigItem[] {
  return [
    {
      ignores: [
        ...GLOB_EXCLUDE,
        ...userIgnores,
      ],
      name: 'coderwyd/ignores',
    },
  ]
}
