// Utils
import { createMarkdown as createBaseMarkdown } from './markdown'
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
  preWrapperPlugin,
  linkPlugin,
} from './plugins'

// Types
import type { Options as BaseOptions, Markdown } from './markdown'
export type { MarkdownData, Markdown } from './markdown'

export interface Options extends BaseOptions
{
  anchor?: anchor.AnchorOptions | undefined
}

export function createMarkdown (options?: Options): Markdown {
  options = {
    html: true,
    linkify: true,
    highlight,
    ...options
  }

  return (
    createBaseMarkdown(options)
      .use(componentPlugin)
      .use(headerPlugin)
      .use(paragraphPlugin)
      .use(codePlugin)
      .use(hoistPlugin)
      .use(includePlugin)
      .use(demoPlugin)
      .use(highlightLinePlugin)
      .use(preWrapperPlugin)
      .use(linkPlugin)
      // 第三方插件
      .use(anchor, {
        slugify,
        ...options.anchor
      })
  )
}