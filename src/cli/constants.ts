import c from 'picocolors'
import { devDependencies, version } from '../../package.json'

export const ARROW = c.cyan('→')
export const CHECK = c.green('✔')
export const CROSS = c.red('✘')
export const WARN = c.yellow('ℹ')

export const eslintVersion = devDependencies.eslint
export { version }

export const vscodeSettingsString = `
  "editor.formatOnSave": true,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
`
