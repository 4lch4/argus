import { prompt } from 'enquirer'
import { hostname, userInfo } from 'os'
import { CreateKeyPrompt, SSHKeyType } from '../../../interfaces'

function getInitialBits(keyType: SSHKeyType): number {
  if (keyType == SSHKeyType.ed25519) return 256
  else if (keyType == SSHKeyType.ecdsa) return 521
  else return 4096
}

export async function getKeyInfo(): Promise<CreateKeyPrompt> {
  const { keyName, keyType } = await prompt<{
    keyName: string
    keyType: SSHKeyType
  }>([
    {
      message: 'What would you like to name this key?',
      type: 'input',
      name: 'keyName',
      initial: 'id_ed25519'
    },
    {
      message: 'What type of key would you like to generate?',
      choices: Object.values(SSHKeyType),
      type: 'list',
      name: 'keyType',
      initial: SSHKeyType.ed25519
    }
  ])

  const initialBits = getInitialBits(keyType)

  const { bits, comment, passphrase, scope } = await prompt<{
    bits: number
    comment: string
    scope: string
    passphrase: string
  }>([
    {
      message: 'How many bits should be used when generating this key?',
      type: 'numeral',
      name: 'bits',
      initial: initialBits,
      float: false
    },
    {
      message: 'Comment for the key?',
      type: 'input',
      name: 'comment',
      initial: `${userInfo().username}@${hostname()}`
    },
    {
      message: 'What scope does this key belong to?',
      type: 'input',
      name: 'scope'
    },
    {
      message: 'An optional passphrase to further secure the key.',
      name: 'passphrase',
      type: 'password',
      initial: null
    }
  ])

  return {
    keyName,
    keyType,
    bits,
    comment,
    passphrase,
    scope
  }
}
