import { styleText } from 'node:util'
import { devDependencies, version } from '../../package.json'

export const ARROW: string = styleText('cyan', '→')
export const CHECK: string = styleText('green', '✔')
export const CROSS: string = styleText('red', '✘')
export const WARN: string = styleText('yellow', 'ℹ')

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
