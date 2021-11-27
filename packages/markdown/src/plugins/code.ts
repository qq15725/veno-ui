// Types
import type { PluginSimple } from 'markdown-it/lib'

export const codePlugin: PluginSimple = md => {
  md.renderer.rules.code_inline = (tokens, index) => {
    const token = tokens[index]
    const attrs = md.renderer.renderAttrs(token)
    const html = md.utils.escapeHtml(token.content)
    return `<ve-code${ attrs }>${ html }</ve-code>`
  }
}