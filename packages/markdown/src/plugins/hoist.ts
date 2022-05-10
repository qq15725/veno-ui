// Types
import type { PluginSimple } from '../types'

// hoist <script> and <style> tags out of the returned html
// so that they can be placed outside as SFC blocks.
export const hoistPlugin: PluginSimple = md => {
  const RE = /^<(script|style)(?=(\s|>|$))/i

  md.renderer.rules.html_block = (tokens, index) => {
    const content = tokens[index].content
    if (RE.test(content.trim())) {
      md._context.hoistedTags.push(content)
      return ''
    } else {
      return content
    }
  }
}