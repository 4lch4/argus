// import { readdir } from 'fs-extra'
import readDir from 'fs-readdir-recursive'
import { SSHKey } from '../../interfaces/SSHKey'
import { readDirFilter } from '../Constants'
import { convertPathsToKeys } from './Converter'

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
      const keyPaths = readDir(this.sshDir, readDirFilter)

      // Convert the array of paths for each key to an object with more info.
      const keys = convertPathsToKeys(this.sshDir, keyPaths)

      // Return the built array of SSHKey objects.
      return keys
    } catch (err) {
      return err
    }
  }

  async getKey(scope: string, name: string) {
    try {
    } catch (err) {
      return err
    }
  }
}
