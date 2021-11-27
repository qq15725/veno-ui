// Types
import type { PluginSimple } from 'markdown-it/lib'

export const preWrapperPlugin: PluginSimple = md => {
  const fence = md.renderer.rules.fence!

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const lang = tokens[idx].info.trim()
    return `<div class="language-${ lang }">\n${ fence(...args) }\n</div>`
  }
}