import process from 'node:process'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getPackageInfoSync, isPackageExists } from 'local-pkg'
import type {
  Awaitable,
  OptionsConfig,
  PartialPrettierExtendedOptions,
  ResolvedOptions,
  UserConfigItem,
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
  ...configs: Awaitable<UserConfigItem | UserConfigItem[]>[]
): Promise<UserConfigItem[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}

export function renameRules(
  rules: Record<string, any>,
  from: string,
  to: string,
) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      if (key.startsWith(from)) return [to + key.slice(from.length), value]
      return [key, value]
    }),
  )
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
      } required for this config: ${nonExistingPackages.join(
        ', ',
      )}. Do you want to install them?`,
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
    ...(options.overrides as any)?.[key],
    ...('overrides' in sub ? sub.overrides || {} : {}),
  }
}
