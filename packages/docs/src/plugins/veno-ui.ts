// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'veno-ui/styles'

// Utils
import prismjs from 'prismjs'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-bash.js'
import { createVeno } from 'veno-ui'
import * as components from 'veno-ui/components'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = ({ app }) => {
  const veno = createVeno({
    components,
    directives,
    providers,
    highlighter: {
      prismjs,
    },
  })

  app.use(veno)
}