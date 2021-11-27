// Utils
import { slugify, deeplyParseHeader } from '../utils'

// Types
import type { MarkdownParsedData } from '../index'
import type { PluginSimple } from 'markdown-it/lib'
import type { RenderRule } from 'markdown-it/lib/renderer'

export const headerPlugin: PluginSimple = md => {
  const render: RenderRule = (tokens, index) => {
    const token = tokens[index]
    if (token.nesting === 1) {
      const title = tokens[index + 1].content
      const idAttr = token.attrs!.find(([name]) => name === 'id')
      const slug = idAttr && idAttr[1]
      const data = (md as any).__data as MarkdownParsedData
      const headers = data.headers || (data.headers = [])
      headers.push({
        level: parseInt(token.tag.slice(1), 10),
        title: deeplyParseHeader(title),
        slug: slug || slugify(title)
      })
    }
    token.tag = `ve-${ token.tag }`
    return md.renderer.renderToken(tokens, index, md.options)
  }
  md.renderer.rules.heading_open = render
  md.renderer.rules.heading_close = render
}