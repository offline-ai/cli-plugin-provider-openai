import { registerProvider } from '@offline-ai/cli-plugin-core'
import { openai } from '@isdk/ai-tool-llm-openai'
import type { Hook, Config, Command } from '@oclif/core'

registerProvider(openai)

export async function init(this: Hook.Context, options: {userConfig: any, config: Config, Command: Command}) {
}

export default init
