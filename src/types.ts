import type {
  OptionsConfig,
  OptionsFiles,
  OptionsOverrides,
  TypedFlatConfigItem,
} from '@antfu/eslint-config'

type Matchers = [
  name: string,
  configurations: {
    match: 'objectKeys' | 'objectValues' | 'strings'
    pathPattern?: string
  }[],
][]

export interface OptionsTailwindcss {
  settings?: {
    entryPoint?: string | undefined
    tailwindConfig?: string | undefined
    tsconfig?: string | undefined
    detectComponentClasses?: boolean | undefined
    rootFontSize?: number | undefined
    messageStyle?: 'visual' | 'compact' | 'raw' | undefined
    attributes?: Array<string | Matchers> | undefined
    callees?: Array<string | Matchers> | undefined
    variables?: Array<string | Matchers> | undefined
    tags?: Array<string | Matchers> | undefined
  }
}

interface OptionsAddons {
  tailwindcss?: boolean | (OptionsOverrides & OptionsFiles & OptionsTailwindcss)
}

export type Options = OptionsConfig & Omit<TypedFlatConfigItem, 'files' | 'ignores'> & OptionsAddons
