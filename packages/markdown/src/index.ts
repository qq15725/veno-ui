// Utils
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import { highlight } from './highlight'
import { slugify } from './utils'
import { relative } from 'path'

// Plugins
import anchor from 'markdown-it-anchor'
import {
  fencePlugin,
  componentPlugin,
  containerPlugin,
  paragraphPlugin,
  headerPlugin,
  codePlugin,
  hoistPlugin,
  includePlugin,
  demoPlugin,
  linkPlugin,
  hrPlugin,
  tablePlugin,
} from './plugins'

// Types
import type { Options, Markdown } from './types'

export function createMarkdown (options?: Options): Markdown {
  options = {
    html: true,
    linkify: true,
    highlight,
    ...options
  }

  const md = new MarkdownIt(options) as Markdown

  const render = md.render

  md.render = (src: string, env?: any) => {
    const { content, data: frontmatter } = matter(src)

    const root = env?.root
    const path = env?.file
    const relativePath = path && root ? relative(root, path) : undefined

    md._context = {
      path,
      relativePath,
      hoistedTags: [],
      headers: [],
      title: content.match?.(/# ([^\n]+)/)?.[1],
      frontmatter,
    }

    return render.call(md, content, env)
  }

  return (
    md
      .use(fencePlugin)
      .use(componentPlugin)
      .use(containerPlugin)
      .use(headerPlugin)
      .use(paragraphPlugin)
      .use(codePlugin)
      .use(hoistPlugin)
      .use(includePlugin)
      .use(demoPlugin)
      .use(linkPlugin)
      .use(hrPlugin)
      .use(tablePlugin)
      // 第三方插件
      .use(anchor, {
        slugify,
        ...options.anchor
      })
  )
}

export type {
  Options,
  MarkdownContext,
  Markdown,
  Plugin,
  PluginSimple,
  PluginWithOptions,
  PluginWithParams,
} from './types'
