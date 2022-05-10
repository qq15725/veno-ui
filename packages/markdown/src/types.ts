import type MarkdownIt from 'markdown-it'
import type Anchor from 'markdown-it-anchor'

export interface Options extends MarkdownIt.Options {
  anchor?: Anchor.AnchorOptions
}

export type PluginSimple = (md: Markdown) => void
export type PluginWithOptions<T = any> = (md: Markdown, options?: T) => void
export type PluginWithParams = (md: Markdown, ...params: any[]) => void
export type Plugin = PluginSimple | PluginWithOptions | PluginWithParams

export interface MarkdownContext {
  // h1
  title?: string

  // current file path
  path?: string

  // current file relative path
  relativePath?: string

  // script/style ...
  hoistedTags: string[]

  // h1-h6
  headers: { level: number; title: string; slug: string }[]

  // frontmatter
  frontmatter?: Record<string, unknown>
}

export interface Markdown extends MarkdownIt {
  _context: MarkdownContext

  use (plugin: PluginSimple): this
  use<T = any> (plugin: PluginWithOptions, options?: T): this
  use (plugin: PluginWithParams, ...params: any[]): this
}
