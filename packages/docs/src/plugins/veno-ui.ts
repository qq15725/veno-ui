// Styles
import 'veno-ui/styles'

// Utils
import { createVeno } from 'veno-ui'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'
import aliases from '~veno-ui/icons'

// highlighter
import { getHighlighter, setCDN } from 'shiki'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = ({ app }) => {
  setCDN('https://unpkg.com/shiki@0.10.1/')

  const veno = createVeno({
    directives,
    providers,
    icons: {
      aliases,
    },
    highlighter: {
      type: 'shiki',
      shiki: getHighlighter({
        theme: 'material-palenight',
        langs: ['html', 'vue', 'vue-html', 'ts', 'js', 'json', 'shell'],
      }),
    },
  })

  app.use(veno)
}