/** A basic object used for handling actual SSH keys. */
export interface SSHKey {
  /** The display name or filename of the SSH key. */
  name: string

  /** The absolute path to the SSH key. */
  path: string

  /** The content of the private key. */
  // privateKey: string

  /** The content of the public key. */
  // publicKey: string
}