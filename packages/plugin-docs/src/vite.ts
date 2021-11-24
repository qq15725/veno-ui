import { dirname } from 'path'
import { createMarkdownRenderer } from './markdown'
import codegen from './codegen'
import matter from 'gray-matter'
import { createFilter } from '@rollup/pluginutils'

// Types
import type { Plugin, PluginOption } from 'vite'

async function transform (code: string | Promise<string>, filename: string) {
  filename = filename.replace(dirname(dirname(dirname(__dirname))), '')
  const { data: matterData = {}, content } = matter(await code)
  const { html, data } = createMarkdownRenderer().render(content, {
    filename,
  })
  return codegen(html, {
    ...data,
    ...matterData,
  })
}

export default function docsPlugin (vue: Plugin): PluginOption[] {
  const filter = createFilter([/\.md$/])

  return [
    {
      name: 'veno:docs',
      transform (code: string, id: string) {
        const [filename] = id.split('?', 2)
        if (!filter(filename)) return
        return transform(code, filename)
      },
      async handleHotUpdate (ctx) {
        if (!filter(ctx.file) || !vue.handleHotUpdate) return
        return vue.handleHotUpdate({
          ...ctx,
          read: () => transform(ctx.read(), ctx.file)
        })
      }
    },
    vue
  ]
}
