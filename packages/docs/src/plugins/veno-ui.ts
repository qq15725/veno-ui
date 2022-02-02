// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'veno-ui/styles'

// Utils
import prismjs from 'prismjs'
import { createVeno } from 'veno-ui'
import * as components from 'veno-ui/components'
import * as directives from 'veno-ui/directives'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = ({ app }) => {
  const veno = createVeno({
    components,
    directives,
    // 高亮器
    highlighter: {
      prismjs,
      prismjsLoadLanguage: async (language: string) => {
        if (language === 'bash') {
          await import('prismjs/components/prism-bash.js')
        } else if (language === 'markup') {
          await import('prismjs/components/prism-markup.js')
        } else if (language === 'javascript') {
          await import('prismjs/components/prism-javascript.js')
        } else if (language === 'typescript') {
          await import('prismjs/components/prism-typescript.js')
        }
      }
    },
  })

  app.use(veno)
}