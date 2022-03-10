/**
 * ^0.10.1
 *
 * @see https://github.com/shikijs/shiki
 */

export type Shiki = any | Promise<any>

export interface ShikiHighlighter
{
  codeToHtml (code: string, language: string): string

  loadLanguage (language: string): Promise<void>
}

const aliases = {
  template: 'vue-html',
}

export async function shikiHighlightCode (shiki: Shiki, code: string, language: string) {
  language = language.toLowerCase()

  if (language in aliases) {
    language = aliases[language as keyof typeof aliases]
  }

  const highlighter = (await shiki) as ShikiHighlighter

  try {
    await highlighter.loadLanguage(language)

    return highlighter.codeToHtml(code, language)
      .replace(/[\s\S]*code>([\s\S]*)<\/code[\s\S]*/, '$1')
  } catch (e) {
    console.warn(`[VenoUi] Syntax highlight for language "${ language }" error: ${ e }" .`)
    return code
  }
}