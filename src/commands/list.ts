// import Table from 'cli-table3'
// const table = new Table()
import { BaseCommand } from '../lib'
import { DefaultSSHDir } from '../lib/Constants'
import { IOUtil } from '../lib/utils/IOUtil'

export default class List extends BaseCommand {
  static description = 'List all of your SSH keys in your ~/.ssh dir.'

  static flags = {
    ...BaseCommand.flags
  }

  async run() {
    const { args, flags } = this.parse(List)
    const ioUtil = IOUtil.newInstance(DefaultSSHDir)
    const keys = await ioUtil.getKeys()
    // this.debug(`keys.length = ${keys.length}`)
    // this.debug(JSON.stringify(keys[0], undefined, 2))

    this.exit(0)

    // const name = flags.name ?? 'world'
    // this.log(
    //   `hello ${name} from /Users/jisodl0/Development/Projects/alcha/clis/argus/src/commands/list.ts`
    // )
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
