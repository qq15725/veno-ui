// Styles
import 'veno-ui/styles'

// Utils
import { createVenoUi } from 'veno-ui'
import { SvgIcon, ComponentIcon } from 'veno-ui/components'
import prismjs from 'prismjs'

// Types
import type { UsePlugin } from '@/types'

// Svg Files
import Sunny from '@/svgs/sunny.svg'

export const useVenoUi: UsePlugin = app => {
  const venoUi = createVenoUi({
    // 图标
    icons: {
      defaultSet: 'my-svg',
      sets: {
        'my-svg': {
          component: SvgIcon,
          aliases: {
            light: 'M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z',
            dark: 'M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z',
            github: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
            code: 'M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z',
            copy: 'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z',
            focus: 'M5,15H3V19A2,2 0 0,0 5,21H9V19H5M5,5H9V3H5A2,2 0 0,0 3,5V9H5M19,3H15V5H19V9H21V5A2,2 0 0,0 19,3M19,19H15V21H19A2,2 0 0,0 21,19V15H19M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14Z',
            edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
          }
        },
        'my-svg-file': {
          component: ComponentIcon,
          aliases: {
            sunny: Sunny
          }
        }
      }
    },

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