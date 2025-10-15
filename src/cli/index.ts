import process from 'node:process'
import { styleText } from 'node:util'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { CROSS, version } from './constants'
import { run } from './run'

function header() {
  console.log(
    `\n${styleText('green', `@coderwyd/eslint-config `)}${styleText('dim', `v${version}`)}`,
  )
}

const instance = yargs(hideBin(process.argv))
  .scriptName('@coderwyd/eslint-config')
  .usage('')
  .command(
    '*',
    'Run the initialization or migration',
    (args) =>
      args
        .option('yes', {
          alias: 'y',
          description: 'Skip prompts and use default values',
          type: 'boolean',
        })
        .help(),
    async (args) => {
      header()
      console.log()
      try {
        await run(args)
      } catch (error) {
        console.error(styleText(['red', 'inverse'], ' Failed to migrate '))
        console.error(styleText('red', `${CROSS} ${String(error)}`))
        process.exit(1)
      }
    },
  )
  .showHelpOnFail(false)
  .alias('h', 'help')
  .version('version', version)
  .alias('v', 'version')

// eslint-disable-next-line ts/no-unused-expressions
instance.help().argv
