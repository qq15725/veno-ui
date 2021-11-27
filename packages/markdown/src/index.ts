// Utils
import MarkdownIt from 'markdown-it'
import { highlight } from './highlight'
import { slugify } from './utils'

// Plugins
import anchor from 'markdown-it-anchor'
import {
  componentPlugin,
  paragraphPlugin,
  headerPlugin,
  codePlugin,
  hoistPlugin,
  includePlugin,
  demoPlugin,
  highlightLinePlugin,
} from './plugins'

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

export interface MarkdownEnv
{
  filename: string
}

export interface MarkdownParsedData
{
  hoistedTags?: string[]
  links?: string[]
  headers?: Header[]
  env: MarkdownEnv
}

export interface MarkdownRenderer
{
  __data: MarkdownParsedData
  render: (src: string, env: MarkdownEnv) => { html: string; data: any }
}

export function createRenderer (options?: MarkdownOptions): MarkdownRenderer {
  options = {
    html: true,
    linkify: true,
    langPrefix: 'language-',
    highlight,
    ...options
  }

  const md = (
    new MarkdownIt(options)
      .use(componentPlugin)
      .use(headerPlugin)
      .use(paragraphPlugin)
      .use(codePlugin)
      .use(hoistPlugin)
      .use(includePlugin)
      .use(demoPlugin)
      .use(highlightLinePlugin)
      // 第三方插件
      .use(anchor, {
        slugify,
        ...options.anchor
      })
  )

  const render = md.render

  const wrappedRender: MarkdownRenderer['render'] = (src, env) => {
    (md as any).__data = (md as any).__data || { env }

    return {
      html: render.call(md, src),
      data: (md as any).__data,
    }
  }

  (md as any).render = wrappedRender

  return md as any
}