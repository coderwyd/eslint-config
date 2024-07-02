import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const isInEditor = !!(
  (process.env.VSCODE_PID
  || process.env.VSCODE_CWD
  || process.env.JETBRAINS_IDE
  || process.env.VIM
  || process.env.NVIM)
  && !process.env.CI
)
export const hasTypeScript = isPackageExists('typescript')

const VueJsPackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]

export const hasVue = hasPackages(VueJsPackages)

const RemixPackages = [
  '@remix-run/node',
  '@remix-run/react',
  '@remix-run/serve',
  '@remix-run/dev',
]

const NextJsPackages = ['next']

// export const hasReact = hasPackages(['react', ...RemixPackages, ...NextJsPackages])
export const isUsingRemix = hasPackages(RemixPackages)
export const isUsingNext = hasPackages(NextJsPackages)

function hasPackages(packages: string[]) {
  return packages.some(name => isPackageExists(name))
}
