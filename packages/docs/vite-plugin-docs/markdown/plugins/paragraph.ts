import type MarkdownIt from 'markdown-it'

export const paragraphPlugin = (md: MarkdownIt) => {
  md.renderer.rules.paragraph_close = md.renderer.rules.paragraph_open = (
    tokens,
    index,
    options,
    env,
    self
  ) => {
    tokens[index].tag = 've-p'

    return self.renderToken(tokens, index, options)
  }
}