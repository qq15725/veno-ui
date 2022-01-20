// Utils
import { createFilter } from '@rollup/pluginutils'
import { createMarkdownToVue } from './markdown'
import { resolveOptions } from './options'

// Types
import type { Options, MarkdownToVue } from './types'
import type { Plugin, PluginOption } from 'vite'

function getVueId (id: string) {
  return id.replace('.md', '.vue')
}

export default function markdownPlugin (userOptions?: Options): PluginOption {
  const options = resolveOptions(userOptions)

  const filter = createFilter(
    options.include || /\.md$/,
    options.exclude,
  )

  let markdownToVue: MarkdownToVue
  let vuePlugin: Plugin | undefined

  return {
    name: '@veno-ui/vite-plugin-md',

    async configResolved (config) {
      vuePlugin = config.plugins.find(p => p.name === 'vite:vue')
      markdownToVue = createMarkdownToVue(config, options)
    },

    transform (raw, id) {
      if (!filter(id)) return
      if (!vuePlugin) return this.error('Not found plugin [vite:vue]')
      try {
        return vuePlugin.transform?.call(this, markdownToVue(raw, id), getVueId(id))
      } catch (e: any) {
        this.error(e)
      }
    },

    async handleHotUpdate (ctx) {
      if (!vuePlugin || !filter(ctx.file)) return
      return vuePlugin.handleHotUpdate?.call(this, {
        ...ctx,
        file: getVueId(ctx.file),
        read: async () => markdownToVue(await ctx.read(), ctx.file)
      })
    }
  }
}
