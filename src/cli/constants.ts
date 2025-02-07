import c from 'picocolors'
import { devDependencies, version } from '../../package.json'

export const ARROW: string = c.cyan('→')
export const CHECK: string = c.green('✔')
export const CROSS: string = c.red('✘')
export const WARN: string = c.yellow('ℹ')

export const eslintVersion: string = devDependencies.eslint
export { version }

export const vscodeSettingsString = `
  "editor.formatOnSave": true,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
`
