import type MarkdownIt from 'markdown-it'
import { deeplyParseHeader } from '../utils/parse-header'
import { slugify } from './slugify'

import type { MarkdownParsedData } from '../index'

export const headerPlugin = (md: MarkdownIt) => {
  md.renderer.rules.heading_open = (
    tokens,
    index,
    options,
    env, self
  ) => {
    const token = tokens[index]
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
    token.tag = `ve-${ token.tag }`
    return self.renderToken(tokens, index, options)
  }

  md.renderer.rules.heading_close = (
    tokens,
    index,
    options,
    env, self
  ) => {
    tokens[index].tag = `ve-${ tokens[index].tag }`

    return self.renderToken(tokens, index, options)
  }
}