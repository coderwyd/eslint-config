import { createRequire } from 'node:module'
import process from 'node:process'

const require = createRequire(import.meta.url)
const cwd = process.cwd()

export function isPackageExists(name: string): boolean {
  try {
    require.resolve(name, { paths: [cwd] })
    return true
  } catch {
    return false
  }
}
