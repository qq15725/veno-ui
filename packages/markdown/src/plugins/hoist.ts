// Types
import type { PluginSimple } from 'markdown-it/lib'
import type { MarkdownParsedData } from '..'

// hoist <script> and <style> tags out of the returned html
// so that they can be placed outside as SFC blocks.
export const hoistPlugin: PluginSimple = md => {
  const RE = /^<(script|style)(?=(\s|>|$))/i

  md.renderer.rules.html_block = (tokens, index) => {
    const content = tokens[index].content
    const data = (md as any).__data as MarkdownParsedData
    const hoistedTags = data.hoistedTags || (data.hoistedTags = [])
    if (RE.test(content.trim())) {
      hoistedTags.push(content)
      return ''
    } else {
      return content
    }
  }
}