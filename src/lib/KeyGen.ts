import execa from 'execa'
import { ensureDir } from 'fs-extra'
import { homedir, hostname, userInfo } from 'os'
import { join } from 'path'
import { CreateKeyPrompt, CreateKeyResponse } from '../interfaces'
import { getKeyInfo } from './prompts'
import { logger } from './utils'

export class KeyGen {
  async createKey(
    opts: CreateKeyPrompt
  ): Promise<undefined | CreateKeyResponse> {
    try {
      const keysDir = join(homedir(), '.ssh', 'keys')
      const keyDir = opts.scope ? join(keysDir, opts.scope) : keysDir
      const filePath = join(keyDir, opts.keyName)

      await ensureDir(keyDir)
      const { exitCode, stdout, stderr } = await execa('ssh-keygen', [
        '-t',
        opts.keyType,
        '-f',
        filePath,
        '-b',
        `${opts.bits}`,
        '-N',
        opts.passphrase || '',
        '-C',
        opts.comment || `${userInfo().username}@${hostname()}`
      ])

      if (exitCode === 0) {
        return {
          stdout,
          keyDir
        }
      } else logger.error(stderr)
    } catch (err) {
      return err
    }
  }

  async getKeyData(flags: any): Promise<CreateKeyPrompt> {
    if (flags.type) {
      return {
        bits: flags.bits,
        keyName: flags.name,
        keyType: flags.type,
        comment: flags.comment,
        scope: flags.scope,
        passphrase: flags.passphrase
      }
    } else {
      const {
        bits,
        keyName,
        keyType,
        comment,
        passphrase,
        scope
      } = await getKeyInfo()

      return {
        bits,
        keyName,
        keyType,
        comment,
        scope,
        passphrase
      }
    }
  }
}
