// Utils
import { createFilter } from '@rollup/pluginutils'
import { createMarkdownToVue } from './markdown'
import { resolveOptions } from './options'

// Types
import type { Options, MarkdownToVue } from './types'
import type { PluginOption } from 'vite'

export default function markdownPlugin (userOptions?: Options): PluginOption {
  const options = resolveOptions(userOptions)

  const filter = createFilter(
    options.include || /\.md$/,
    options.exclude,
  )

  let markdownToVue: MarkdownToVue

  return {
    name: '@veno-ui/vite-plugin-md',
    enforce: 'pre',
    async configResolved (config) {
      markdownToVue = createMarkdownToVue(config, options)
    },
    async transform (raw, id) {
      if (!filter(id)) return
      try {
        return markdownToVue(raw, id)
      } catch (e: any) {
        this.error(e)
      }
    },
    async handleHotUpdate (ctx) {
      if (!filter(ctx.file)) return
      const defaultRead = ctx.read
      ctx.read = async function() {
        return markdownToVue(ctx.file, await defaultRead())
      }
    }
  }
}
