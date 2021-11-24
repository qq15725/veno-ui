import createVuePlugin from '@vitejs/plugin-vue'
import { dirname } from 'path'
import { readFileSync } from 'fs'
import { createMarkdownRenderer } from './markdown'
import codegen from './codegen'
import matter from 'gray-matter'

// Types
import type { PluginOption } from 'vite'

async function getTransformedVueSrc (id: string) {
  const contentRaw = readFileSync(id).toString()
  const filename = id.replace(dirname(dirname(dirname(__dirname))), '')
  const { data: matterData = {}, content } = matter(contentRaw)
  const { html, data } = createMarkdownRenderer().render(content, {
    filename,
  })
  return codegen(html, {
    ...data,
    ...matterData,
  })
}

const vuePlugin = createVuePlugin({
  include: [/\.vue$/, /\.md$/],
})

const fileRegex = /\.md$/

export default (): PluginOption[] => {
  return [
    {
      name: '@veno-ui/md-loader',
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
