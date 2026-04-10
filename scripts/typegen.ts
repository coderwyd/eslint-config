import fs from 'node:fs/promises'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { flatConfigsToPlugins, pluginsToRulesDTS } from 'eslint-typegen/core'

const plugins = await flatConfigsToPlugins([
  {
    plugins: {
      tailwindcss: eslintPluginBetterTailwindcss,
    },
  },
])
const dts = await pluginsToRulesDTS(plugins, { includeAugmentation: false })

const ruleOptionsMatch = dts.match(/export interface RuleOptions \{[\s\S]*?\n\}/)
const declarationsMatch = dts.match(/\/\* ======= Declarations ======= \*\/[\s\S]*/)

const ruleOptions = ruleOptionsMatch?.[0] ?? ''
const declarations = declarationsMatch?.[0] ?? ''

const output = `/* eslint-disable */
/* prettier-ignore */
import '@antfu/eslint-config'
import type { Linter } from 'eslint'

declare module '@antfu/eslint-config' {
${ruleOptions}
}

${declarations}
`

await fs.writeFile('src/eslint-typegen.d.ts', output)
