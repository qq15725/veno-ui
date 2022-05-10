// Types
import type { RenderRule } from 'markdown-it/lib/renderer'
import type { PluginSimple } from '../types'

export const paragraphPlugin: PluginSimple = function (md) {
  const render: RenderRule = (tokens, index) => {
    tokens[index].tag = 've-p'
    return md.renderer.renderToken(tokens, index, md.options)
  }
  md.renderer.rules.paragraph_close = render
  md.renderer.rules.paragraph_open = render
}
