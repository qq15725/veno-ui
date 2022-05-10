/**
 * ^1.25.0
 * @see https://github.com/PrismJS/prism
 */

export interface Prismjs
{
  languages: Record<string, any>

  highlight (code: string, grammar: any, language: string): string
}

const aliases = {
  sh: 'bash',
  shell: 'bash',
  vue: 'markup',
  html: 'markup',
  md: 'markdown',
  ts: 'typescript',
  js: 'javascript',
}

export async function prismjsHighlightCode (prismjs: Prismjs, code: string, language: string) {
  language = language.toLowerCase()

  if (language in aliases) {
    language = aliases[language as keyof typeof aliases]
  }

  if (!prismjs.languages[language]) {
    console.warn(`[VenoUi] Syntax highlight for language "${ language }" is not supported. try "import 'prismjs/components/prism-${ language }.js'" .`)
    return code
  }

  return prismjs.highlight(
    code,
    prismjs.languages[language],
    language
  )
}



