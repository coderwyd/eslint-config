import process from 'node:process'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getPackageInfoSync, isPackageExists } from 'local-pkg'
import type {
  Awaitable,
  OptionsConfig,
  PartialPrettierExtendedOptions,
  ResolvedOptions,
  TypedFlatConfigItem,
} from '../types'

export const parserPlain = {
  meta: {
    name: 'parser-plain',
  },
  parseForESLint: (code: string) => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: 'Program',
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: [],
    },
  }),
}

/**
 * Combine array and non-array configs into a single array.
 */
export async function combine(
  ...configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): Promise<TypedFlatConfigItem[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}

/**
 * Rename plugin prefixes in a rule object.
 * Accepts a map of prefixes to rename.
 *
 * @example
 * ```ts
 * import { renameRules } from '@coderwyd/eslint-config'
 *
 * export default [{
 *   rules: renameRules(
 *     {
 *       '@typescript-eslint/indent': 'error'
 *     },
 *     { '@typescript-eslint': 'ts' }
 *   )
 * }]
 * ```
 */
export function renameRules(
  rules: Record<string, any>,
  map: Record<string, string>,
) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`))
          return [to + key.slice(from.length), value]
      }
      return [key, value]
    }),
  )
}

/**
 * Rename plugin names a flat configs array
 *
 * @example
 * ```ts
 * import { renamePluginInConfigs } from '@antfu/eslint-config'
 * import someConfigs from './some-configs'
 *
 * export default renamePluginInConfigs(someConfigs, {
 *   '@typescript-eslint': 'ts',
 *   'import-x': 'import',
 * })
 * ```
 */
export function renamePluginInConfigs(
  configs: TypedFlatConfigItem[],
  map: Record<string, string>,
): TypedFlatConfigItem[] {
  return configs.map(i => {
    const clone = { ...i }
    if (clone.rules) clone.rules = renameRules(clone.rules, map)
    if (clone.plugins) {
      clone.plugins = Object.fromEntries(
        Object.entries(clone.plugins).map(([key, value]) => {
          if (key in map) return [map[key], value]
          return [key, value]
        }),
      )
    }
    return clone
  })
}

export function getVueVersion() {
  const pkg = getPackageInfoSync('vue', { paths: [process.cwd()] })
  if (pkg && typeof pkg.version === 'string' && !Number.isNaN(+pkg.version[0]))
    return +pkg.version[0]

  return 3
}

export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export async function interopDefault<T>(
  m: Awaitable<T>,
): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m
  return (resolved as any).default || resolved
}

export async function ensurePackages(packages: string[]) {
  if (process.env.CI || process.stdout.isTTY === false) return

  const nonExistingPackages = packages.filter(i => !isPackageExists(i))
  if (nonExistingPackages.length === 0) return

  const { default: prompts } = await import('prompts')
  const { result } = await prompts([
    {
      message: `${
        nonExistingPackages.length === 1 ? 'Package is' : 'Packages are'
      } required for this config: ${nonExistingPackages.join(', ')}. Do you want to install them?`,
      name: 'result',
      type: 'confirm',
    },
  ])
  if (result)
    await import('@antfu/install-pkg').then(i =>
      i.installPackage(nonExistingPackages, { dev: true }),
    )
}

export async function loadPrettierConfig(cwd: string) {
  let prettierConfig: PartialPrettierExtendedOptions = {}

  try {
    const prettierrc = await readFile(path.join(cwd, '.prettierrc'), 'utf-8')

    prettierConfig = JSON.parse(prettierrc)
  } catch {}

  return prettierConfig
}

export function resolveSubOptions<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): ResolvedOptions<OptionsConfig[K]> {
  return typeof options[key] === 'boolean' ? ({} as any) : options[key] || {}
}

export function getOverrides<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
) {
  const sub = resolveSubOptions(options, key)
  return {
    ...('overrides' in sub ? sub.overrides || {} : {}),
  }
}
