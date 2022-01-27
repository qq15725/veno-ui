// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'veno-ui/styles'

// Utils
import { createVenoUi } from 'veno-ui'
import prismjs from 'prismjs'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = ({ app }) => {
  const venoUi = createVenoUi({
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

  app.use(venoUi)
}