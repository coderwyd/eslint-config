import type { Options } from './types'
import { resolveSubOptions } from '@antfu/eslint-config'
import { isPackageExists } from './utils'

// eslint-disable-next-line ts/no-explicit-any
function deepMerge<T extends Record<string, any>>(user: T, defaults: T): T {
  const result = { ...user }
  for (const key of Object.keys(defaults) as (keyof T)[]) {
    const userVal = result[key]
    const defaultVal = defaults[key]
    if (userVal === undefined) {
      result[key] = defaultVal
    } else if (userVal === true && typeof defaultVal === 'object') {
      result[key] = defaultVal
    } else if (
      typeof userVal === 'object' &&
      userVal !== null &&
      typeof defaultVal === 'object' &&
      defaultVal !== null
    ) {
      result[key] = deepMerge(userVal, defaultVal)
    }
  }
  return result
}

export function mergeOptions(options?: Options): Options {
  const { vueVersion = 3 } = resolveSubOptions(options ?? {}, 'vue')

  const defaults = {
    typescript: {
      overrides: {
        'ts/consistent-type-definitions': 'off',
        'ts/promise-function-async': 'off',
        'ts/strict-boolean-expressions': 'off',
        'ts/return-await': 'off',
        'ts/switch-exhaustiveness-check': 'off',
        'ts/no-explicit-any': 'warn',
      },
    },
    vue: {
      overrides: {
        'vue/block-order': [
          'error',
          {
            order:
              vueVersion === 3 ? ['script', 'template', 'style'] : ['template', 'script', 'style'],
          },
        ],
        'vue/html-self-closing': [
          'error',
          {
            html: { component: 'always', normal: 'always', void: 'any' },
            math: 'always',
            svg: 'always',
          },
        ],
      },
    },
    react:
      isPackageExists('react') || !!options?.react
        ? {
            overrides: {
              'react/no-context-provider': 'off',
              'react/no-forward-ref': 'off',
              'react/no-use-context': 'off',
              'react-hooks/set-state-in-effect': 'off',
              'react-hooks-extra/no-direct-set-state-in-use-effect': 'error',
            },
          }
        : undefined,
    pnpm: false,
    stylistic: false,
    isInEditor: false,
  } satisfies Options

  if (!options) return defaults

  return deepMerge(options, defaults)
}
