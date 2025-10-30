import process from 'node:process'
import { styleText } from 'node:util'
import { cac } from 'cac'
import { CROSS, version } from './constants'
import { run } from './run'

function header() {
  console.log(
    `\n${styleText('green', `@coderwyd/eslint-config `)}${styleText('dim', `v${version}`)}`,
  )
}

const cli = cac('@coderwyd/eslint-config')

cli
  .command('', 'Run the initialization or migration')
  .option('--yes, -y', 'Skip prompts and use default values', {
    default: false,
  })
  .action(async (args) => {
    header()
    console.log()
    try {
      await run(args)
    } catch (error) {
      console.error(styleText(['red', 'inverse'], ' Failed to migrate '))
      console.error(styleText('red', `${CROSS} ${String(error)}`))
      process.exit(1)
    }
  })

cli.help()
cli.version(version)
cli.parse()
