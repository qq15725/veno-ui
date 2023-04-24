// Utils
import { wrapInArray } from '@veno-ui/utils'
import { createMarkdown as createBaseMarkdown } from '@veno-ui/markdown'

// Types
import type { MarkdownToVue, ResolvedOptions } from './types'
import type { ResolvedConfig } from 'vite'

export function createMarkdownToVue(config: ResolvedConfig, options: ResolvedOptions): MarkdownToVue {
  const root = options.root ?? config.root
  const markdown = createBaseMarkdown(options.markdownOptions)

  options.markdownUses.forEach(e => {
    const [plugin, options] = wrapInArray(e)

    markdown.use(plugin, options)
  })

  options.markdownSetup(markdown)

  return (raw, id) => {
    const { wrapper, transforms } = options
    raw = raw.trimStart()
    if (transforms.before) raw = transforms.before(raw, id)
    let html = markdown.render(raw, { root, file: id })
    const ctx = markdown._context
    if (transforms.after) html = transforms.after(html, id)
    if (wrapper) html = `<${ wrapper }>${ html }</${ wrapper }>`
    const customBlocks = extractCustomBlock(html, options)
    html = customBlocks.html
    const pageData = {
      title: ctx.title,
      headers: ctx.headers,
      frontmatter: ctx.frontmatter,
    }
    const injectCode = `\nexport const __pageData = ${ JSON.stringify(pageData) }`
    const importedTags = handleHoistedTags(ctx.hoistedTags, injectCode).join('\n')
    return `<template>${ html }</template>\n${ importedTags }\n${ customBlocks.blocks.join('\n') }\n`
  }
}

function extractCustomBlock(html: string, options: ResolvedOptions) {
  const blocks: string[] = []
  for (const tag of options.customSfcBlocks) {
    html = html.replace(new RegExp(`<${ tag }[^>]*\\b[^>]*>[^<>]*<\\/${ tag }>`, 'mg'), (code) => {
      blocks.push(code)
      return ''
    })
  }

  return { html, blocks }
}

// Regexs
const scriptRE = /<\/script>/
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const scriptClientRe = /<\s*script[^>]*\bclient\b[^>]*/
const defaultExportRE = /((?:^|\n|;)\s*)export(\s*)default/
const namedDefaultExportRE = /((?:^|\n|;)\s*)export(.+)as(\s*)default/

function handleHoistedTags(tags: string[], injectCode: string) {
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
        : `${ injectCode }\nexport default {}\n</script>`,
    )
  } else {
    tags.unshift(`<script>${ injectCode }\nexport default {}\n</script>`)
  }

  return tags
}
