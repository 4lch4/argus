import { BaseCommand, CreateFlags, KeyGen, logger } from '../lib'

export default class Create extends BaseCommand {
  keygen = new KeyGen()

  static description =
    'Create a new SSH key interactively or via command flags.'

  static flags = {
    ...BaseCommand.flags,

    ...CreateFlags
  }

  async run() {
    const { flags } = this.parse(Create)

    // Get the needed data for creating a key via the flags or prompting user.
    const keyData = await this.keygen.getKeyData(flags)

    // Save the key to disk.
    const createRes = await this.keygen.createKey(keyData)

    // Validate the key was successfully saved.
    if (createRes) {
      // Output some info regarding the newly created key.
      logger.success(`${keyData.keyName} successfully created!`)
      logger.success(`Key pair stored in ${createRes.keyDir}`)
    } else {
      // An error was encountered, close out with a simple message. An actual
      // error should have been posted earlier.
      this.error('There was an error when attempting to create the SSH key.')
    }
  }
}
