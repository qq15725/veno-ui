// Types
import type { PluginSimple } from 'markdown-it/lib'
import type { RenderRule } from 'markdown-it/lib/renderer'

export const tablePlugin: PluginSimple = function (md) {
  const render: RenderRule = (tokens, index) => {
    tokens[index].tag = 've-table'
    return md.renderer.renderToken(tokens, index, md.options)
  }
  md.renderer.rules.table_open = render
  md.renderer.rules.table_close = render
}