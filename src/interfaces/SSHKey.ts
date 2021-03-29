/** A basic object used for handling actual SSH keys. */
export interface SSHKey {
  /** The display name or filename of the SSH key. */
  name: string

  /** The absolute path to the SSH key. */
  path: string

  /** The content of the private key. */
  privateKeyContent: string

  /** The path to the private key. */
  privateKeyPath: string

  /** The content of the public key. */
  publicKeyContent: string

  /** The path to the public key. */
  publicKeyPath: string
}