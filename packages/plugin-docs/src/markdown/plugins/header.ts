import { deeplyParseHeader } from '../utils/parse-header'
import { slugify } from './slugify'

// Types
import type { MarkdownParsedData } from '../index'
import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer'

export const headerPlugin = (md: MarkdownIt) => {
  const headingRender: RenderRule = (
    tokens, index, options, env, self
  ) => {
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

    return self.renderToken(tokens, index, options)
  }

  md.renderer.rules.heading_open = headingRender
  md.renderer.rules.heading_close = headingRender
}