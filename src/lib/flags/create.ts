import { flags } from '@oclif/command'
import { hostname, userInfo } from 'os'

export const CreateFlags = {
  // #region Grouped Flags
  type: flags.enum({
    options: ['ecdsa', 'ed25519', 'rsa'],
    description: 'The type of SSH key to generate.',
    required: false,
    dependsOn: ['bits', 'name'],
    char: 't'
  }),

  bits: flags.integer({
    char: 'b',
    description: 'The amount of bits to use when generating the key.',
    required: false,
    dependsOn: ['type', 'name']
  }),

  name: flags.string({
    char: 'n',
    description: 'The name to use for the generated keys.',
    required: false,
    dependsOn: ['bits', 'type']
  }),
  // #endregion Grouped Flags

  // #region Isolated Flags
  scope: flags.string({
    char: 's',
    description:
      'An optional scope for the Key to better organize the folder structure.',
    required: false
  }),

  comment: flags.string({
    char: 'C',
    description:
      'An optional comment field to append to the end of your public key, defaults to USERNAME@HOSTNAME.',
    default: `${userInfo().username}@${hostname}`,
    required: false
  }),

  passphrase: flags.string({
    char: 'p',
    description: 'An optional password to further secure the SSH key.',
    required: false
  })
  // #endregion Isolated Flags
}
