import MarkdownIt from 'markdown-it'
import {
  componentPlugin,
  paragraphPlugin,
  headerPlugin,
  codePlugin,
  slugify,
  hoistPlugin,
  includePlugin,
  demoPlugin,
  highlight,
  highlightLinePlugin,
  preWrapperPlugin,
} from './plugins'
import anchor from 'markdown-it-anchor'

import type { Options } from 'markdown-it'

export interface MarkdownOptions extends Options
{
  anchor?: anchor.AnchorOptions | undefined
}

export interface Header
{
  level: number
  title: string
  slug: string
}

export interface MarkdownParsedData
{
  hoistedTags?: string[]
  links?: string[]
  headers?: Header[]
  filename?: string
}

export interface MarkdownRenderer
{
  __data: MarkdownParsedData
  render: (src: string, filename?: string, env?: any) => { html: string; data: any }
}

export const createMarkdownRenderer = (
  options: MarkdownOptions = {}
): MarkdownRenderer => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight,
    ...options
  })

  md.use(componentPlugin)
    .use(headerPlugin)
    .use(paragraphPlugin)
    .use(codePlugin)
    .use(hoistPlugin)
    .use(includePlugin)
    .use(demoPlugin)
    .use(highlightLinePlugin)
    .use(preWrapperPlugin)
    // 3rd party plugins
    .use(anchor, {
      slugify,
      ...options.anchor
    })

  const render = md.render

  const wrappedRender: MarkdownRenderer['render'] = (src, filename) => {
    (md as any).__data = (md as any).__data || {
      filename,
    }
    return {
      html: render.call(md, src),
      data: (md as any).__data
    }
  }

  (md as any).render = wrappedRender

  return md as any
}