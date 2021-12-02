// Utils
import { slugify, deeplyParseHeader } from '../utils'

// Types
import type { RenderRule } from 'markdown-it/lib/renderer'
import type { PluginSimple } from '../markdown'

export const headerPlugin: PluginSimple = md => {
  const render: RenderRule = (tokens, index) => {
    const token = tokens[index]
    if (token.nesting === 1) {
      const title = tokens[index + 1].content
      const idAttr = token.attrs!.find(([name]) => name === 'id')
      const slug = idAttr && idAttr[1]
      md.__data.headers.push({
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