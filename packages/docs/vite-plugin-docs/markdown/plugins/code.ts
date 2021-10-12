import type MarkdownIt from 'markdown-it'

export const codePlugin = (md: MarkdownIt) => {
  md.renderer.rules.code_inline = (
    tokens,
    index,
    options,
    env,
    self
  ) => {
    const token = tokens[index]

    const attrs = self.renderAttrs(token)

    const html = md.utils.escapeHtml(token.content)

    return `<ve-code${ attrs }>${ html }</ve-code>`
  }
}