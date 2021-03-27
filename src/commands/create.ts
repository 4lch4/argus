import { flags } from '@oclif/command'
import execa from 'execa'
import { hostname, userInfo } from 'os'
import { BaseCommand } from '../lib'

const Username = userInfo().username

export default class Create extends BaseCommand {
  static description = 'describe the command here'

  static flags = {
    ...BaseCommand.flags,

    comment: flags.string({
      char: 'C',
      description:
        'An optional comment field to append to the end of your public key.',
      default: `${userInfo().username}@${hostname}`
    })
  }

  async run() {
    const { args, flags } = this.parse(Create)
    const { exitCode, stderr, stdout } = await execa('')

    if (exitCode === 0) this.log(stdout)
    else this.error(stderr)
  }
}
