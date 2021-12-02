import MarkdownIt from 'markdown-it'

// Types
import type { Options } from 'markdown-it'

export { Options }

export interface Header
{
  level: number
  title: string
  slug: string
}

export type PluginSimple = (md: Markdown) => void;
export type PluginWithOptions<T = any> = (md: Markdown, options?: T) => void;
export type PluginWithParams = (md: Markdown, ...params: any[]) => void;

export interface MarkdownData
{
  hoistedTags: string[]
  links: string[]
  headers: Header[]
}

export interface Markdown extends MarkdownIt
{
  __data: MarkdownData

  use (plugin: PluginSimple): this;

  use<T = any> (plugin: PluginWithOptions, options?: T): this;

  use (plugin: PluginWithParams, ...params: any[]): this;
}

export function createMarkdown (options: Options): Markdown {
  const mdIt = new MarkdownIt(options) as any

  function resetData () {
    mdIt.__data = {
      hoistedTags: [],
      links: [],
      headers: [],
    }
  }

  const render = mdIt.render
  mdIt.render = (src: string) => {
    resetData()
    return render.call(mdIt, src)
  }
  resetData()
  return mdIt
}