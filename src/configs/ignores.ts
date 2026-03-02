import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX } from '../constants/glob'
import type { TypedFlatConfigItem } from '../types'

export function ignores(
  userIgnores: string[] = [],
  ignoreTypeScript = false,
): TypedFlatConfigItem[] {
  let ignores = [...GLOB_EXCLUDE]

  if (ignoreTypeScript) ignores.push(GLOB_TS, GLOB_TSX)

  ignores = [...ignores, ...userIgnores]

  return [
    {
      ignores,
      name: 'coderwyd/ignores',
    },
  ]
}
