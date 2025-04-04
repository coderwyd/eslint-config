import { writeFile } from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import picocolors from 'picocolors'
import {
  command,
  comments,
  deMorgan,
  imports,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  prettier,
  react,
  regexp,
  sortPackageJson,
  svelte,
  tailwindcss,
  test,
  typescript,
  unicorn,
  unocss,
  vue,
} from '../src/configs'
import { combine } from '../src/shared'

const configs = await combine(
  {
    plugins: {
      '': {
        rules: Object.fromEntries(builtinRules.entries()),
      },
    },
  },
  comments(),
  imports(),
  javascript(),
  jsdoc(),
  jsonc(),
  node(),
  perfectionist(),
  react(),
  sortPackageJson(),
  svelte(),
  test(),
  prettier(),
  typescript(),
  unicorn(),
  unocss(),
  vue(),
  command(),
  regexp(),
  tailwindcss(),
  deMorgan(),
)

const configNames = configs.map((i) => i.name).filter(Boolean) as string[]

let dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
})

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(' | ')}
`

await writeFile('src/types/typegen.d.ts', dts)

console.log(picocolors.green('Type definitions generated!'))
