// Utils
import { inject, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import { createSymbol } from '../../utils'

// Highlighters
import { prismjsHighlightCode } from './prismjs'
import { shikiHighlightCode } from './shiki'

// Types
import type { Prismjs } from './prismjs'
import type { Shiki } from './shiki'

export interface HighlighterOptions {
  type?: 'prismjs' | 'shiki'
  prismjs?: Prismjs
  shiki?: Shiki
}

export interface Highlighter {
  highlight (code: string, language: string): Promise<string>
}

export const HighlighterKey: InjectionKey<Ref<Highlighter>> = createSymbol('highlighter')

export function createHighlighter(options?: HighlighterOptions): Ref<Highlighter> {
  return ref({
    highlight: async (code: string, language: string) => {
      const type = options?.type ?? 'shiki'

      if (language === 'text') {
        return code
      } else if (type === 'shiki' && options?.shiki) {
        return await shikiHighlightCode(options.shiki, code, language)
      } else if (type === 'prismjs' && options?.prismjs) {
        return await prismjsHighlightCode(options.prismjs, code, language)
      } else {
        return code
      }
    },
  })
}

export function useHighlighter() {
  const highlighter = inject(HighlighterKey)

  if (!highlighter) throw new Error('[VenoUi] Could not find highlighter instance')

  return highlighter
}
