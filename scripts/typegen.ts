import fs from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import {
  comments,
  formatter,
  imports,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  prettier,
  react,
  sortPackageJson,
  svelte,
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
  formatter(),
  imports(),
  javascript(),
  jsdoc(),
  jsonc(),
  node(),
  perfectionist(),
  react(),
  sortPackageJson(),
  prettier(),
  svelte(),
  test(),
  typescript(),
  unicorn(),
  unocss(),
  vue(),
)

const dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
})

await fs.writeFile('src/types/typegen.d.ts', dts)
