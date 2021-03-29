import { flags } from '@oclif/command'
import { BaseCommand, DefaultSSHDir, IOUtil } from '../lib'

export default class Get extends BaseCommand {
  static description = 'describe the command here'

  static flags = {
    ...BaseCommand.flags,

    scope: flags.string({
      char: 's',
      default: 'default'
    }),

    name: flags.string({
      char: 'n',
      required: true
    })
  }

  async run() {
    const { flags} = this.parse(Get)

    const ioUtil = IOUtil.newInstance(DefaultSSHDir)
    const keyRes = await ioUtil.getKey(flags.scope, flags.name)
    console.log(keyRes)

    this.exit(0)
  }
}
