# @4lch4/argus

A CLI utility for managing numerous SSH keys. Named after [Argus Filch][0] from Harry Potter.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@4lch4/argus.svg)](https://npmjs.org/package/@4lch4/argus)
[![Codecov](https://codecov.io/gh/4lch4/argus/branch/master/graph/badge.svg)](https://codecov.io/gh/4lch4/argus)
[![Downloads/week](https://img.shields.io/npm/dw/@4lch4/argus.svg)](https://npmjs.org/package/@4lch4/argus)
[![License](https://img.shields.io/npm/l/@4lch4/argus.svg)](https://github.com/4lch4/argus/blob/master/package.json)

<!-- toc -->
* [@4lch4/argus](#4lch4argus)
<!-- tocstop -->

## Usage
<!-- usage -->
```sh-session
$ npm install -g @4lch4/argus
$ argus COMMAND
running command...
$ argus (-v|--version|version)
@4lch4/argus/0.0.0 darwin-x64 node-v14.16.0
$ argus --help [COMMAND]
USAGE
  $ argus COMMAND
...
```
<!-- usagestop -->
## Commands
<!-- commands -->
* [`argus autocomplete [SHELL]`](#argus-autocomplete-shell)
* [`argus create [FILE]`](#argus-create-file)
* [`argus delete [FILE]`](#argus-delete-file)
* [`argus get [FILE]`](#argus-get-file)
* [`argus hello [FILE]`](#argus-hello-file)
* [`argus help [COMMAND]`](#argus-help-command)
* [`argus list [FILE]`](#argus-list-file)
* [`argus update [FILE]`](#argus-update-file)

## `argus autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ argus autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ argus autocomplete
  $ argus autocomplete bash
  $ argus autocomplete zsh
  $ argus autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `argus create [FILE]`

describe the command here

```
USAGE
  $ argus create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/4lch4/argus/blob/v0.0.0/src/commands/create.ts)_

## `argus delete [FILE]`

describe the command here

```
USAGE
  $ argus delete [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/delete.ts](https://github.com/4lch4/argus/blob/v0.0.0/src/commands/delete.ts)_

## `argus get [FILE]`

describe the command here

```
USAGE
  $ argus get [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/get.ts](https://github.com/4lch4/argus/blob/v0.0.0/src/commands/get.ts)_

## `argus hello [FILE]`

describe the command here

```
USAGE
  $ argus hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ argus hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/4lch4/argus/blob/v0.0.0/src/commands/hello.ts)_

## `argus help [COMMAND]`

display help for argus

```
USAGE
  $ argus help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `argus list [FILE]`

describe the command here

```
USAGE
  $ argus list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list.ts](https://github.com/4lch4/argus/blob/v0.0.0/src/commands/list.ts)_

## `argus update [FILE]`

describe the command here

```
USAGE
  $ argus update [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/update.ts](https://github.com/4lch4/argus/blob/v0.0.0/src/commands/update.ts)_
<!-- commandsstop -->

[0]: https://harrypotter.fandom.com/wiki/Argus_Filch
