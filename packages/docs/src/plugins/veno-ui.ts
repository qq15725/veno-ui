// Styles
import 'veno-ui/styles'

// Utils
import { createVeno } from 'veno-ui'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'

// Highlighter
import { getHighlighter, setCDN } from 'shiki'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = ({ app }) => {
  setCDN('https://unpkg.com/shiki/')

  const veno = createVeno({
    directives,
    providers,
    highlighter: {
      type: 'shiki',
      shiki: getHighlighter({
        theme: 'material-theme-palenight',
        langs: ['html', 'typescript', 'javascript'],
      }),
    },
  })

  app.use(veno)
}
