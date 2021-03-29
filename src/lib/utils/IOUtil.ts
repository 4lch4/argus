// import { readdir } from 'fs-extra'
import { readFile } from 'fs-extra'
import recursiveReadDir from 'fs-readdir-recursive'
import { join } from 'path'
import { SSHKey } from '../../interfaces/SSHKey'
import { readDirFilter } from '../Constants'
import { convertPathsToKeys } from './Converter'

function blankKey(name: string, path: string): SSHKey {
  return {
    name,
    path,
    privateKeyContent: '',
    privateKeyPath: '',
    publicKeyContent: '',
    publicKeyPath: ''
  }
}

export class IOUtil {
  private sshDir: string

  /**
   * The private constructor for creating a new IOUtil class.
   *
   * @param sshDir The absolute path to your SSH directory.
   */
  private constructor(sshDir: string) {
    this.sshDir = sshDir
  }

  public static newInstance(sshDir: string): IOUtil {
    return new IOUtil(sshDir)
  }

  async getKeys(): Promise<SSHKey[]> {
    try {
      // Recursively search for SSH keys, filtering out some unneeded paths.
      const keyPaths = recursiveReadDir(this.sshDir, readDirFilter)

      // Convert the array of paths for each key to an object with more info.
      const keys = convertPathsToKeys(this.sshDir, keyPaths)

      // Return the built array of SSHKey objects.
      return keys
    } catch (err) {
      return err
    }
  }

  async getKey(scope: string, name: string): Promise<SSHKey> {
    try {
      const key: SSHKey = blankKey(name, join(this.sshDir, 'keys', scope))
      const files = recursiveReadDir(key.path, (path: string) =>
        path.includes(name)
      ) //.filter((dir: string) => dir.match(keyDir))

      console.log(`key.path = ${key.path}`)
      console.log(`files.length = ${files.length}`)

      for (const file of files) {
        const fullPath = join(key.path, file)
        if (file.endsWith(`.pub`) || file.endsWith(`.ppk`)) {
          key.publicKeyPath = fullPath
          key.publicKeyContent = await readFile(fullPath, 'utf8')
        } else {
          key.privateKeyPath = fullPath
          key.privateKeyContent = await readFile(fullPath, 'utf8')
        }
      }

      return key
    } catch (err) {
      return err
    }
  }

  async saveKey(key: SSHKey) {
    try {
      
    } catch (err) { return err }
  }
}
