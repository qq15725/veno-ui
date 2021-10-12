import createVuePlugin from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import { createMarkdownRenderer } from './markdown'
import codegen from './codegen'

// Types
import type { PluginOption } from 'vite'

async function getTransformedVueSrc (id: string) {
  const src = readFileSync(id).toString()

  const { html, data } = createMarkdownRenderer().render(src, id)

  return codegen(html, data)
}

const vuePlugin = createVuePlugin({
  include: [/\.vue$/, /\.md$/],
})

const fileRegex = /\.md$/

export default (): PluginOption[] => {
  return [
    {
      name: 'docs',
      async transform (code: string, id: string) {
        if (fileRegex.test(id)) {
          return await getTransformedVueSrc(id)
        }
      },
      async handleHotUpdate (ctx) {
        const { file } = ctx
        if (fileRegex.test(file)) {
          const code = await getTransformedVueSrc(file)
          if (vuePlugin.handleHotUpdate) {
            return vuePlugin.handleHotUpdate({
              ...ctx,
              read: () => code
            })
          }
        }
      }
    },
    vuePlugin,
  ]
}
