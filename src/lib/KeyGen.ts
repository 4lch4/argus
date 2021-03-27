import execa from 'execa'
import { logger } from './utils'

const KeyTypeArg = '-t ed25519'


export class KeyGen {
  async createKey() {
    try {
      const { exitCode, stdout, stderr } = await execa('')

      if (exitCode === 0) {
        logger.success(stdout)
      } else logger.error(stderr)
    } catch (err) {
      return err
    }
  }
}
