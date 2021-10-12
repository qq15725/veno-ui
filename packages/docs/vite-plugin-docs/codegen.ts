import type { MarkdownParsedData } from './markdown'

const scriptRE = /<\/script>/
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const scriptClientRe = /<\s*script[^>]*\bclient\b[^>]*/
const defaultExportRE = /((?:^|\n|;)\s*)export(\s*)default/
const namedDefaultExportRE = /((?:^|\n|;)\s*)export(.+)as(\s*)default/

export default (html: string, data: MarkdownParsedData) => {
  const tags = data.hoistedTags || []
  const pageData = {
    title: '',
  }

  if (data.headers) {
    const h1 = data.headers.find(v => v.level === 1)
    if (h1) {
      pageData.title = h1.title
    }
  }

  const code = `\nexport const __pageData = ${ JSON.stringify(pageData) }`

  const existingScriptIndex = tags.findIndex((tag) => {
    return (
      scriptRE.test(tag) &&
      !scriptSetupRE.test(tag) &&
      !scriptClientRe.test(tag)
    )
  })

  if (existingScriptIndex > -1) {
    const tagSrc = tags[existingScriptIndex]
    // user has <script> tag inside markdown
    // if it doesn't have export default it will error out on build
    const hasDefaultExport =
      defaultExportRE.test(tagSrc) || namedDefaultExportRE.test(tagSrc)
    tags[existingScriptIndex] = tagSrc.replace(
      scriptRE,
      code + (hasDefaultExport ? `` : `\nexport default{}\n`) + `</script>`
    )
  } else {
    tags.unshift(`<script>${ code }\nexport default {}\n</script>`)
  }


  return `
${ tags.join('\n') }

<template>
${ html }
</template>
`
}