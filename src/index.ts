import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { Options } from './types'
import antfu from '@antfu/eslint-config'
import { tailwindcss } from './config/tailwindcss'
import { mergeOptions } from './merge-options'

export type { Options, OptionsTailwindcss } from './types'

export function defineConfig(
  options?: Options,
  ...userConfigs: Awaitable<
    TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]
  >[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const { tailwindcss: enableTailwindcss, ...antfuOptions } = options || {}

  const configs = antfu(mergeOptions(antfuOptions))

  if (enableTailwindcss) {
    const tailwindOptions = typeof enableTailwindcss === 'boolean' ? {} : enableTailwindcss
    configs
      .append(tailwindcss(tailwindOptions))
      .renamePlugins({ 'better-tailwindcss': 'tailwindcss' })
  }

  configs.append(...(userConfigs as any))

  return configs
}
