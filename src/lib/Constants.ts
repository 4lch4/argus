import { homedir } from "os"
import { join } from 'path'

/**
 * Tests the given path to make sure it's not in a conf* or .DS_Store directory.
 * Used by the fs-readdir-recursive module to ensure we only get SSH keys from
 * disk.
 *
 * @param path The path to be tested.
 * @returns Whether or not to include this path.
 */
export function readDirFilter(path: string) {
  return !path.match(/conf.*|\.DS_Store|known_hosts/)
}

/** A Regular Expression to detect if a file is a public SSH key. */
export const PublicKeyRegex = /.*\.pub$|.*ppk$/

export const DefaultSSHDir = join(homedir(), '.ssh')
