// Utils
import { createFilter } from '@veno-ui/utils'
import { createMarkdownToVue } from './markdown'
import { resolveOptions } from './options'
import { promises as fsp } from 'fs'

// Types
import type { Options, MarkdownToVue } from './types'
import type { PluginOption } from 'vite'

export default function markdownPlugin (userOptions?: Options): PluginOption {
  const options = resolveOptions(userOptions)
  const filter = createFilter(options.include, options.exclude,)

  let markdownToVue: MarkdownToVue

  return {
    name: '@veno-ui/vite-plugin-markdown',
    async configResolved (config) {
      markdownToVue = createMarkdownToVue(config, options)
    },
    async load (id) {
      if (!filter(id)) return
      try {
        return markdownToVue(await fsp.readFile(id, 'utf8'), id)
      } catch (e: any) {
        this.error(e)
      }
    }
  }
}
