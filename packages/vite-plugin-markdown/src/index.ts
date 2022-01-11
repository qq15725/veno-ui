// Utils
import { createFilter } from '@rollup/pluginutils'
import { createMarkdownToVue } from './markdown'
import { resolveOptions } from './options'

// Types
import type { Options, MarkdownToVue } from './types'
import type { Plugin, PluginOption } from 'vite'

export default function markdownPlugin (userOptions?: Options): PluginOption {
  const options = resolveOptions(userOptions)

  const filter = createFilter(
    options.include || /\.md$/,
    options.exclude,
  )

  function getVueId (id: string) {
    return id.replace('md', 'vue')
  }

  let markdownToVue: MarkdownToVue
  let vuePlugin: Plugin | undefined

  return {
    name: '@veno-ui/vite-plugin-md',

    /**
     * 配置解析完后
     *
     * @param config
     */
    async configResolved (config) {
      vuePlugin = config.plugins.find(p => p.name === 'vite:vue')
      markdownToVue = createMarkdownToVue(config, options)
    },

    /**
     * 内容变换
     *
     * @param raw
     * @param id
     */
    transform (raw, id) {
      if (!filter(id)) return

      if (!vuePlugin) return this.error('Not found plugin [vite:vue]')

      try {
        return vuePlugin.transform?.call(this, markdownToVue(raw, id), getVueId(id))
      } catch (e: any) {
        this.error(e)
      }
    },

    /**
     * 处理热更新
     *
     * @param ctx
     */
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
