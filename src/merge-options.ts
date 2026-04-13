import type { Options } from './types'
import { resolveSubOptions } from '@antfu/eslint-config'
import { createDefu } from 'defu'
import { isPackageExists } from './utils'

const defuOverrideArray = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    obj[key] = value
    return true
  }
})

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

  const result = { ...options }

  for (const key of Object.keys(defaults) as (keyof typeof defaults)[]) {
    const userValue = options[key]
    const defaultValue = defaults[key]

    if (userValue === undefined) {
      ;(result as any)[key] = defaultValue
    } else if (typeof defaultValue === 'boolean') {
      // boolean defaults: keep user value as-is
    } else if (userValue === true) {
      ;(result as any)[key] = defaultValue
    } else if (typeof userValue === 'object' && userValue !== null && defaultValue) {
      ;(result as any)[key] = defuOverrideArray(userValue, defaultValue)
    }
  }

  return result
}
