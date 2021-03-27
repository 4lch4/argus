/**
 * The interface for the SSH config file that sits at ~/.ssh/config. It is
 * responsible for enabling the nested folder structure that organizes keys in
 * a much easier to read structure.
 */
export interface SSHConfigRoot {
  /**
   * Restricts the following declarations to all cases and passes it down to the
   * nested config files in the `Include` directory.
   */
  Match: 'all'

  /**
   * Includes all of the config files within the ~/.ssh/conf.d directory and
   * parses them for further config info.
   */
  Include: '~/.ssh/conf.d/**/*'
}