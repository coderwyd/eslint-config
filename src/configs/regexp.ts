import { configs } from 'eslint-plugin-regexp'
import type {
  OptionsOverrides,
  OptionsRegExp,
  TypedFlatConfigItem,
} from '../types'

export async function regexp(
  options: OptionsRegExp & OptionsOverrides = {},
): Promise<TypedFlatConfigItem[]> {
  const config = configs['flat/recommended'] as TypedFlatConfigItem

  const rules = {
    ...config.rules,
  }

  if (options.level === 'warn') {
    Object.keys(rules).forEach(key => {
      if (rules[key] === 'error') rules[key] = 'warn'
    })
  }

  return [
    {
      ...config,
      name: 'coderwyd/regexp/rules',
      rules: {
        ...rules,
        ...options.overrides,
      },
    },
  ]
}
