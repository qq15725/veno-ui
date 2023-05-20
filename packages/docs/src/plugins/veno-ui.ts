// Utils
import { createVeno } from 'veno-ui'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'

// Highlighter
import { getHighlighter, setCDN } from 'shiki'

// Types
import type { InstallPlugin } from '@/types'

// Icons
import settings from '~icons/mdi/cog'
import dashboard from '~icons/mdi/cloud'

export const install: InstallPlugin = ({ app }) => {
  setCDN('https://unpkg.com/shiki/')

  const veno = createVeno({
    directives,
    providers,
    icons: {
      aliases: {
        settings,
        dashboard,
      },
    },
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
