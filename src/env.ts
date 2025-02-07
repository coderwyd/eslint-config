import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const isInEditor: boolean = !!(
  (process.env.VSCODE_PID ||
    process.env.VSCODE_CWD ||
    process.env.JETBRAINS_IDE ||
    process.env.VIM ||
    process.env.NVIM) &&
  !process.env.CI
)

const VueJsPackages = ['vue', 'nuxt', 'vitepress', '@slidev/cli']

const RemixPackages = [
  '@remix-run/node',
  '@remix-run/react',
  '@remix-run/serve',
  '@remix-run/dev',
]

const ReactRouterPackages = [
  '@react-router/node',
  '@react-router/react',
  '@react-router/serve',
  '@react-router/dev',
]

const NextJsPackages = ['next']

// react refresh
const ReactRefreshAllowConstantExportPackages = ['vite']

export const isUsingTypeScript: boolean = isPackageExists('typescript')
export const isUsingVue: boolean = hasPackages(VueJsPackages)
// export const hasReact = hasPackages(['react', ...RemixPackages, ...NextJsPackages])
export const isUsingRemix: boolean = hasPackages(RemixPackages)
export const isUsingReactRouter: boolean = hasPackages(ReactRouterPackages)
export const isUsingNext: boolean = hasPackages(NextJsPackages)
export const isAllowConstantExport: boolean = hasPackages(
  ReactRefreshAllowConstantExportPackages,
)

function hasPackages(packages: string[]) {
  return packages.some((name) => isPackageExists(name))
}
