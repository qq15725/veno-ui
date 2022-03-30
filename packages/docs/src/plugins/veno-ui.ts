// Styles
import 'veno-ui/styles'

// Utils
import { createVeno } from 'veno-ui'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'
import aliases from '~icons'

// Highlighter
import { getHighlighter, setCDN } from 'shiki'

// Themes
import themeMaterialPalenight from 'shiki/themes/material-palenight.json'

// Languages
import langHTML from 'shiki/languages/html.tmLanguage.json'
import langJS from 'shiki/languages/javascript.tmLanguage.json'
import langTS from 'shiki/languages/typescript.tmLanguage.json'
import langJson from 'shiki/languages/json.tmLanguage.json'
import langShell from 'shiki/languages/shellscript.tmLanguage.json'
import langVueHtml from 'shiki/languages/vue-html.tmLanguage.json'
import langVue from 'shiki/languages/vue.tmLanguage.json'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = ({ app }) => {
  setCDN('https://cdn.jsdelivr.net/npm/shiki@0.10.1/')

  const veno = createVeno({
    directives,
    providers,
    icons: {
      aliases,
    },
    highlighter: {
      type: 'shiki',
      shiki: getHighlighter({
        theme: themeMaterialPalenight as any,
        langs: [
          {
            id: 'html',
            scopeName: langHTML.scopeName,
            grammar: langHTML as any,
          },
          {
            id: 'javascript',
            scopeName: langJS.scopeName,
            grammar: langJS as any,
            aliases: ['js']
          },
          {
            id: 'typescript',
            scopeName: langTS.scopeName,
            grammar: langTS as any,
            aliases: ['ts']
          },
          {
            id: 'vue',
            scopeName: langVue.scopeName,
            grammar: langVue as any,
          },
          {
            id: 'vue-html',
            scopeName: langVueHtml.scopeName,
            grammar: langVueHtml as any,
          },
          {
            id: 'json',
            scopeName: langJson.scopeName,
            grammar: langJson as any,
          },
          {
            id: 'shell',
            scopeName: langShell.scopeName,
            grammar: langShell as any,
            aliases: ['sh'],
          },
        ],
      }),
    },
  })

  app.use(veno)
}