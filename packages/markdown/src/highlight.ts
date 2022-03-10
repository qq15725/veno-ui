const RE = /{([\d,-]+)}/

export const highlight = (raw: string, rawLang: string) => {
  let lang = rawLang, lineNumbers: number[][] = []
  {
    if (RE.test(rawLang)) {
      lang = rawLang.replace(RE, '').trim()
      lineNumbers = RE.exec(rawLang)![1]
        .split(',')
        .map(v => (
          v.split('-')
            .map(v => parseInt(v, 10))
        ))
    }
  }

  return `<ve-code 
  class="mb-4 py-3 px-6"
  theme="dark"
  shape="rounded-lg"
  code="${ encodeURIComponent(raw) }"
  :highlighted-line-numbers="${ JSON.stringify(lineNumbers) }" 
  language="${ lang }"
  show-language
/>`
}