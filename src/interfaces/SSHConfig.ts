/**
 * A basic SSH config object containing the necessary info to connect to a host
 * or hosts over SSH.
 */
export interface SSHConfig {
  /**
   * The "display name" for the host. This is what is used when attempting to
   * connect via the terminal. For example, if this value is CLOUDSERVER0, to
   * connect to it you would type `ssh CLOUDSERVER0` and ssh would use this
   * config entry to connect.
   */
  Host: string

  /** The DNS or IP address of the host. */
  HostName: string

  /** The username to use when connecting to the host. */
  User: string

  /** The location of your ssh key to use when connecting to this host. */
  IdentityFile: string
}