// Utils
import { inject, ref } from 'vue'

// Types
import type { InjectionKey, Ref } from 'vue'

export interface Prismjs
{
  languages: Record<string, any>

  highlight (text: string, grammar: any, language: string): string
}

export interface HighlighterOptions
{
  type?: 'prismjs'
  prismjs: Prismjs
}

export interface Highlighter
{
  highlight (text: string, language: string): Promise<string>
}

export const HighlighterKey: InjectionKey<Ref<Highlighter>> = Symbol.for('veno-ui:highlighter')

export function createHighlighter (options?: HighlighterOptions): Ref<Highlighter> {
  const type = options?.type ?? 'prismjs'

  async function prismjsHighlightCode (text: string, language: string) {
    const prismjs = options?.prismjs

    if (!prismjs) return text

    language = language.toLowerCase()

    const aliases = {
      sh: 'bash',
      shell: 'bash',
      vue: 'markup',
      html: 'markup',
      md: 'markdown',
      ts: 'typescript',
      js: 'javascript',
    }

    if (language in aliases) {
      language = aliases[language as keyof typeof aliases]
    }

    if (!prismjs.languages[language]) {
      console.warn(`[VenoUi] Syntax highlight for language "${ language }" is not supported. try "import 'prismjs/components/prism-${ language }.js'" .`)
      return text
    }

    return prismjs.highlight(
      text,
      prismjs.languages[language],
      language
    )
  }

  return ref({
    highlight: async (text: string, language: string) => {
      switch (type) {
        case 'prismjs':
          return await prismjsHighlightCode(text, language)
      }
    }
  })
}

export function useHighlighter () {
  const provider = inject(HighlighterKey)
  if (!provider) throw new Error('[VenoUi] Could not find highlighter instance')
  return provider
}