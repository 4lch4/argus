import execa from 'execa'
import { ensureDir } from 'fs-extra'
import { homedir, hostname, userInfo } from 'os'
import { join } from 'path'
import { CreateKeyPrompt, CreateKeyResponse } from '../interfaces'
import { getKeyInfo } from './prompts'
import { logger } from './utils'

export class KeyGen {
  private get binPath() {
    if (process.platform !== 'win32') return 'ssh-keygen'

    switch (process.arch) {
      case 'ia32':
        return join(__dirname, 'bin', 'ssh-keygen-32.exe')
      case 'x64':
        return join(__dirname, 'bin', 'ssh-keygen-64.exe')
    }

    throw new Error('Unsupported platform')
  }

  async createKey(
    opts: CreateKeyPrompt
  ): Promise<undefined | CreateKeyResponse> {
    try {
      const keysDir = join(homedir(), '.ssh', 'keys')
      const keyDir = opts.scope ? join(keysDir, opts.scope) : keysDir
      const filePath = join(keyDir, opts.keyName)

      await ensureDir(keyDir)

      const { exitCode, stdout, stderr } = await execa(this.binPath, [
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

  /**
   * Returns the key data provided via the flags, if present, otherwise the user
   * will be prompted to provide the information instead.
   *
   * @param flags The flags from the create command.
   * @returns The data needed to create a new key.
   */
  async getKeyData(flags: any): Promise<CreateKeyPrompt> {
    return flags.type
      ? {
          bits: flags.bits,
          keyName: flags.name,
          keyType: flags.type,
          comment: flags.comment,
          scope: flags.scope,
          passphrase: flags.passphrase
        }
      : await getKeyInfo()
  }
}
