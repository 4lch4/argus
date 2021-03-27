import { basename, join } from 'path'
import { SSHKey } from '../../interfaces/SSHKey'
import { PublicKeyRegex } from '../Constants'

export function convertPathsToKeys(
  baseDir: string,
  keyPaths: string[]
): SSHKey[] {
  return keyPaths.map((key: string) => {
    return {
      name: basename(key),
      path: join(baseDir, key),
      type: key.match(PublicKeyRegex) ? 'Public' : 'Private'
    }
  })
}
