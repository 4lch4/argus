import { SSHKeyType } from "./SSHKeyType"

export interface CreateKeyPrompt {
  /** The display/file name of the new SSH key. */
  keyName: string

  keyType: SSHKeyType

  /** The amount of bits to use when creating the key. */
  bits: number

  comment?: string

  scope?: string

  /** An optional password to further secure your key. */
  passphrase?: string
}