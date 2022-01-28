const RE = /{([\d,-]+)}/

export const highlight = (raw: string, rawLang: string) => {
  let lang = rawLang, highlightedLineNumbers: number[][] = []
  {
    if (RE.test(rawLang)) {
      lang = rawLang.replace(RE, '').trim()
      highlightedLineNumbers = RE.exec(rawLang)![1]
        .split(',')
        .map(v => (
          v.split('-')
            .map(v => parseInt(v, 10))
        ))
    }
  }

  return `<ve-code 
  class="mb-4"
  :highlighted-line-numbers="${ JSON.stringify(highlightedLineNumbers) }" 
  language="${ lang }" 
  value="${ encodeURIComponent(raw) }"
/>`
}