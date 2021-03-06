// Types
import type { PluginSimple } from '../types'

export const fencePlugin: PluginSimple = md => {
  const escapeHtml = md.utils.escapeHtml
  const unescapeAll = md.utils.unescapeAll

  md.renderer.rules.fence = (tokens, idx, options) => {
    const token = tokens[idx]
    const info = token.info ? unescapeAll(token.info).trim() : ''
    let langName = ''
    let langAttrs = ''
    let highlighted; let arr

    if (info) {
      arr = info.split(/(\s+)/g)
      langName = arr[0]
      langAttrs = arr.slice(2).join('')
    }

    if (options.highlight) {
      highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content)
    } else {
      highlighted = escapeHtml(token.content)
    }

    return `${ highlighted }\n`
  }
}
