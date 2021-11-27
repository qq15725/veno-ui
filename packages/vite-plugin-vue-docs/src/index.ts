import { createFilter } from '@rollup/pluginutils'
import { transformMain } from './transform'

// Types
import type { Plugin, PluginOption } from 'vite'

export default function VueDocsPlugin (): PluginOption {
  let vuePlugin: Plugin | undefined

  const RE = /\.md$/

  const filter = createFilter([RE])

  function getVueId (id: string) {
    return id.replace(RE, '.vue')
  }

  return {
    name: 'vite:veno-vue-docs',

    /**
     * 配置解析完后
     *
     * @param config
     */
    configResolved (config) {
      vuePlugin = config.plugins.find(p => p.name === 'vite:vue')
    },

    /**
     * 内容变换
     *
     * @param code
     * @param id
     */
    transform (code: string, id: string) {
      if (!filter(id)) return

      if (!vuePlugin) return this.error('Not found plugin [vite:vue]')

      return vuePlugin.transform?.call(
        this,
        transformMain(code, id),
        getVueId(id)
      )
    },

    /**
     * 处理热更新
     *
     * @param ctx
     */
    async handleHotUpdate (ctx) {
      if (!filter(ctx.file) || !vuePlugin) return

      const { file, read } = ctx

      return vuePlugin.handleHotUpdate?.({
        ...ctx,
        file: getVueId(file),
        read: async () => transformMain(await read(), file)
      })
    }
  }
}
