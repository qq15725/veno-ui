import Token from 'markdown-it/lib/token'
import container from 'markdown-it-container'

// Types
import type { PluginSimple } from '../markdown'

export const containerPlugin: PluginSimple = md => {
  md.use(...createAlert('tip', 'TIP'))
    .use(...createAlert('success', 'SUCCESS'))
    .use(...createAlert('info', 'INFO'))
    .use(...createAlert('warning', 'WARNING'))
    .use(...createAlert('error', 'WARNING'))
    // explicitly escape Vue syntax
    .use(container, 'v-pre', {
      render: (tokens: Token[], idx: number) =>
        tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`
    })
}

type ContainerArgs = [
  typeof container,
  string,
  {
    render (tokens: Token[], idx: number): string
  }
]

function createAlert (type: string, defaultTitle: string): ContainerArgs {
  return [
    container,
    type,
    {
      render (tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(type.length).trim()
        if (token.nesting === 1) {
          if (type === 'tip') {
            return `<ve-alert title="${ info || defaultTitle }" class="mb-3">\n`
          }
          return `<ve-alert type="${ type }" title="${ info || defaultTitle }" class="mb-3">\n`
        } else {
          return `</ve-alert>\n`
        }
      }
    }
  ]
}