import { Logger } from '@4lch4/logger'
import Command, { flags } from '@oclif/command'

const logger = new Logger()

export abstract class BaseCommand extends Command {
  static flags = {
    help: flags.help({ char: 'h' })
  }

  log(message?: string | undefined, ...args: any[]) {
    if (args.length > 0) logger.info(`${message} [${args.join(' - ')}]`)
    if (message) logger.info(message)
  }

  warn(input: string | Error) {
    if (input instanceof Error) logger.warn(input.message)
    else logger.warn(input)
  }

  success(input: string) {
    logger.success(input)
  }
}
