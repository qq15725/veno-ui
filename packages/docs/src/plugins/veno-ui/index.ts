import { createVenoUi } from 'veno-ui'
import { docsSvg } from '../../iconsets/docs-svg'
import prismjs from 'prismjs'

export default createVenoUi({
  highlighter: {
    prismjs,
    prismjsLoadLanguage: async (language: string) => {
      switch (language) {
        case 'bash':
          // @ts-ignore
          await import('prismjs/components/prism-bash.js')
          break
        case 'markup':
          // @ts-ignore
          await import('prismjs/components/prism-markup.js')
          break
        case 'javascript':
          // @ts-ignore
          await import('prismjs/components/prism-javascript.js')
          break
        case 'typescript':
          // @ts-ignore
          await import('prismjs/components/prism-typescript.js')
          break
      }
    }
  },
  icons: {
    defaultSet: 'docs-svg',
    sets: {
      'docs-svg': docsSvg,
    }
  },
})