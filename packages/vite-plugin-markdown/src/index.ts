// Utils
import { promises as fsp } from 'fs'
import { createFilter } from '@veno-ui/utils'
import type { Plugin } from 'vite'
import { createMarkdownToVue } from './markdown'
import { resolveOptions } from './options'

// Types
import type { MarkdownToVue, Options } from './types'

export default function markdownPlugin(userOptions?: Options): Plugin {
  const options = resolveOptions(userOptions)
  const filter = createFilter(options.include, options.exclude)

  let markdownToVue: MarkdownToVue

  return {
    name: '@veno-ui/vite-plugin-markdown',
    async configResolved(config) {
      markdownToVue = createMarkdownToVue(config, options)
    },
    async load(id) {
      if (!filter(id)) return
      try {
        return markdownToVue(await fsp.readFile(id, 'utf8'), id)
      } catch (e: any) {
        this.error(e)
      }
    },
  }
}
