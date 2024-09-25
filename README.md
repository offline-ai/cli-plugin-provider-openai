# AI CLI OpenAI Provider Plugin

> 【English|[中文](./README.cn.md)】
---

The [Offline AI Client](https://npmjs.org/package/@offline-ai/cli) plugin for OpenAI and OpenAI-compatible Provider.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/%40offline-ai%2Fcli-plugin-provider-openai.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-provider-openai)
[![Downloads/week](https://img.shields.io/npm/dw/%40offline-ai%2Fcli-plugin-provider-openai.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-provider-openai)

# Quick Start

Before using, you need to first install the [Offline AI Client](https://npmjs.org/package/@offline-ai/cli).

# Install

```bash
#If not already installed, install the client:
npm install -g @offline-ai/cli
```

<!-- toc -->
- [AI CLI OpenAI Provider Plugin](#ai-cli-openai-provider-plugin)
- [Quick Start](#quick-start)
- [Install](#install)
- [Commands](#commands)
  - [`ai run [FILE] [DATA]`](#ai-run-file-data)
  - [`ai test`](#ai-test)
<!-- tocstop -->

# Commands

<!-- commands -->
* [`ai run [FILE] [DATA]`](#ai-run-file-data)
* [`ai test`](#ai-test)

## `ai run [FILE] [DATA]`

💻 Run ai-agent script file.

```
USAGE
  $ ai run [FILE] [DATA] [--json] [-c <value>] [--banner] [-u <value>] [--apiKey <value>] [-s <value>...]
    [-l trace|debug|verbose|info|warn|error|fatal|silence] [--histories <value>] [-n] [-k] [-t <value> -i] [--no-chats]
    [--no-inputs ] [-m] [-f <value>] [-d <value>] [-D <value>...] [-a <value>] [-b <value>] [-p <value>...] [-L <value>]
    [-A <value>] [-e true|false|line] [-e <value>] [--consoleClear]

ARGUMENTS
  FILE  the script file path, or the json data when `-f` switch is set
  DATA  the json data which will be passed to the ai-agent script

FLAGS
  -A, --aiPreferredLanguage=<value>    the ISO 639-1 code for the AI preferred language to translate the user input
                                       automatically, eg, en, etc.
  -D, --data=<value>...                the data which will be passed to the ai-agent script: key1=value1 key2=value2
  -L, --userPreferredLanguage=<value>  the ISO 639-1 code for the user preferred language to translate the AI result
                                       automatically, eg, en, zh, ja, ko, etc.
  -a, --arguments=<value>              the json data which will be passed to the ai-agent script
  -b, --brainDir=<value>               the brains(LLM) directory
  -c, --config=<value>                 the config file
  -d, --dataFile=<value>               the data file which will be passed to the ai-agent script
  -e, --streamEcho=<option>            [default: true] stream echo mode, defaults to true
                                       <options: true|false|line>
  -e, --streamEchoChars=<value>        stream echo max characters limit, defaults to no limit
  -f, --script=<value>                 the ai-agent script file name or id
  -i, --[no-]interactive               interactive mode
  -k, --backupChat                     whether to backup chat history before start, defaults to false
  -l, --logLevel=<option>              the log level
                                       <options: trace|debug|verbose|info|warn|error|fatal|silence>
  -m, --[no-]stream                    stream mode, defaults to true
  -n, --[no-]newChat                   whether to start a new chat history, defaults to false in interactive mode, true
                                       in non-interactive
  -p, --promptDirs=<value>...          the prompts template directory
  -s, --agentDirs=<value>...           the search paths for ai-agent script file
  -t, --inputs=<value>                 the input histories folder for interactive mode to record
  -u, --api=<value>                    the api URL
      --apiKey=<value>                 the api key (optional)
      --[no-]banner                    show banner
      --[no-]consoleClear              Whether console clear after stream echo output, default to true
      --histories=<value>              the chat histories folder to record
      --no-chats                       disable chat histories, defaults to false
      --no-inputs                      disable input histories, defaults to false

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  💻 Run ai-agent script file.

  Execute ai-agent script file and return result. with `-i` to interactive.

EXAMPLES
  $ ai run -f ./script.yaml "{content: 'hello world'}" -l info
  ┌────────────────────
  │[info]:Start Script: ...
```

_See code: [@offline-ai/cli-plugin-core](https://github.com/offline-ai/cli-plugin-core.js/blob/v0.8.5/src/commands/run/index.ts)_

## `ai test`

🔬 Run simple AI fixtures to test(draft).

```
USAGE
  $ ai test [--json] [-c <value>] [--banner] [-u <value>] [--apiKey <value>] [-s <value>...] [-l
    trace|debug|verbose|info|warn|error|fatal|silence] [--histories <value>] [-n] [-k] [-t <value> -i] [--no-chats]
    [--no-inputs ] [-m] [-f <value>] [-d <value>] [-D <value>...] [-a <value>] [-b <value>] [-p <value>...] [-L <value>]
    [-A <value>] [-e true|false|line] [-e <value>] [--consoleClear]

FLAGS
  -A, --aiPreferredLanguage=<value>    the ISO 639-1 code for the AI preferred language to translate the user input
                                       automatically, eg, en, etc.
  -D, --data=<value>...                the data which will be passed to the ai-agent script: key1=value1 key2=value2
  -L, --userPreferredLanguage=<value>  the ISO 639-1 code for the user preferred language to translate the AI result
                                       automatically, eg, en, zh, ja, ko, etc.
  -a, --arguments=<value>              the json data which will be passed to the ai-agent script
  -b, --brainDir=<value>               the brains(LLM) directory
  -c, --config=<value>                 the config file
  -d, --dataFile=<value>               the data file which will be passed to the ai-agent script
  -e, --streamEcho=<option>            [default: true] stream echo mode, defaults to true
                                       <options: true|false|line>
  -e, --streamEchoChars=<value>        stream echo max characters limit, defaults to no limit
  -f, --script=<value>                 the AI fixture file path
  -i, --[no-]interactive               interactive mode
  -k, --backupChat                     whether to backup chat history before start, defaults to false
  -l, --logLevel=<option>              the log level
                                       <options: trace|debug|verbose|info|warn|error|fatal|silence>
  -m, --stream                         stream mode, defaults to false
  -n, --[no-]newChat                   whether to start a new chat history, defaults to false in interactive mode, true
                                       in non-interactive
  -p, --promptDirs=<value>...          the prompts template directory
  -s, --agentDirs=<value>...           the search paths for ai-agent script file
  -t, --inputs=<value>                 the input histories folder for interactive mode to record
  -u, --api=<value>                    the api URL
      --apiKey=<value>                 the api key (optional)
      --[no-]banner                    show banner
      --[no-]consoleClear              Whether console clear after stream output, default to true in interactive, false
                                       to non-interactive
      --histories=<value>              the chat histories folder to record
      --no-chats                       disable chat histories, defaults to false
      --no-inputs                      disable input histories, defaults to false

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🔬 Run simple AI fixtures to test(draft).

  Execute fixtures file to test AI script file and check result.

EXAMPLES
  $ ai test -f ./fixture.yaml -l info
```

_See code: [src/commands/test/index.ts](https://github.com/offline-ai/cli-plugin-provider-openai.js/blob/v0.1.17/src/commands/test/index.ts)_
<!-- commandsstop -->
