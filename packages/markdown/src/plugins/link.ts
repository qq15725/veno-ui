// Types
import type { PluginSimple } from '../types'
import type { RenderRule } from 'markdown-it/lib/renderer'

export const linkPlugin: PluginSimple = function (md) {
  const render: RenderRule = (tokens, index) => {
    const token = tokens[index]
    token.tag = 've-link'
    if (token.type === 'link_open') {
      const href = token.attrGet('href')
      token.attrSet('underline', '')
      token.attrSet('color', 'primary')
      token.attrSet('target', '_blank')
      if (href && href.indexOf('http') !== 0) {
        // @ts-expect-error
        token.attrs[token.attrIndex('href')][0] = 'to'
      }
    }
    return md.renderer.renderToken(tokens, index, md.options)
  }
  md.renderer.rules.link_open = render
  md.renderer.rules.link_close = render
}
