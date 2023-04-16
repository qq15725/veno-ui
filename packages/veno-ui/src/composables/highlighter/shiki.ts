import type { Highlighter, Lang } from 'shiki'

export type Shiki = Highlighter | Promise<Highlighter>

const aliases = {
  template: 'vue-html',
}

export async function shikiHighlightCode(shiki: Shiki, code: string, language: string) {
  language = language.toLowerCase()

  if (language in aliases) {
    language = aliases[language as keyof typeof aliases]
  }

  try {
    const highlighter = await shiki
    await highlighter.loadLanguage(language as Lang)
    return highlighter.codeToHtml(code, language)
      .replace(/[\s\S]*code>([\s\S]*)<\/code[\s\S]*/, '$1')
  } catch (e) {
    console.warn(`[VenoUi] Syntax highlight for language "${ language }" error: ${ e }" .`)
    return code
  }
}
