// Types
import type { MarkdownData } from '@veno-ui/markdown'

export interface Data extends MarkdownData
{
  title?: string
  category?: string
}

// Regexs
const scriptRE = /<\/script>/
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const scriptClientRe = /<\s*script[^>]*\bclient\b[^>]*/
const defaultExportRE = /((?:^|\n|;)\s*)export(\s*)default/
const namedDefaultExportRE = /((?:^|\n|;)\s*)export(.+)as(\s*)default/

export function codegen (html: string, data: Data) {
  const pageData = {
    title: data.headers.find(v => v.level === 1)?.title ?? data.title,
    category: data.category,
  }

  const tags = genTags(
    data.hoistedTags,
    `\nexport const __pageData = ${ JSON.stringify(pageData) }`
  )

  return `
${ tags.join('\n') }

<template>
${ genBreadcrumb(['组件', pageData.category].filter(Boolean) as string[]) }
${ html }
</template>
`
}

function genTags (tags: string[], injectCode: string) {
  const existingScriptIndex = tags.findIndex((tag) => {
    return (
      scriptRE.test(tag)
      && !scriptSetupRE.test(tag)
      && !scriptClientRe.test(tag)
    )
  })

  if (existingScriptIndex > -1) {
    const tagSrc = tags[existingScriptIndex]
    // user has <script> tag inside markdown
    // if it doesn't have export default it will error out on build
    const hasDefaultExport = (
      defaultExportRE.test(tagSrc)
      || namedDefaultExportRE.test(tagSrc)
    )
    tags[existingScriptIndex] = tagSrc.replace(
      scriptRE,
      hasDefaultExport
        ? `${ injectCode }</script>`
        : `${ injectCode }\nexport default {}\n</script>`
    )
  } else {
    tags.unshift(`<script>${ injectCode }\nexport default {}\n</script>`)
  }

  return tags
}

function genBreadcrumb (items: string[]) {
  if (items.length <= 1) return ''

  return `
  <ve-breadcrumb>
    ${ items.map(item => (
    `<ve-breadcrumb-item>${ item }</ve-breadcrumb-item>`
  )).join('\n') }  
  </ve-breadcrumb>
`
}