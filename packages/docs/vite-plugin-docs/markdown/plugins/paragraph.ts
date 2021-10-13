// Types
import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer'

export const paragraphPlugin = (md: MarkdownIt) => {
  const paragraphRender: RenderRule = (
    tokens, index, options, env, self
  ) => {
    tokens[index].tag = 've-p'

    return self.renderToken(tokens, index, options)
  }

  md.renderer.rules.paragraph_close = paragraphRender
  md.renderer.rules.paragraph_open = paragraphRender
}