import container from 'markdown-it-container'

import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

export const demoPlugin = (md: MarkdownIt) => {
  const name = 'demo'

  md.use(container, name, {
    render (tokens: Token[], idx: number) {
      const token = tokens[idx]

      const data = {
        title: '',
        code: '',
        template: '',
      }

      if (token.nesting === 1) {
        let i = idx
        while (tokens[++i].type !== `container_${ name }_close`) {
          if (tokens[i].type === 'heading_open' && tokens[i].level === 1) {
            data.title = tokens[i + 1].content
          }

          if (tokens[i].type === 'fence' && tokens[i].info === 'html') {
            data.template = tokens[i].content
            data.code = `<template>\n${ data.template
              .split('\n')
              .map((line) => (line.length ? '  ' + line : line))
              .join('\n') }</template>`
          }

          if (tokens[i].type === 'fence' && tokens[i].info === 'js') {
            const script = tokens[i].content
              .split('\n')
              .map((line) => (line.length ? '  ' + line : line))
              .join('\n')
            data.code += `\n\n<script>\n${ script }</script>`
            const hoistedTags = (md as any).__data.hoistedTags || ((md as any).__data.hoistedTags = [])
            hoistedTags.push(`<script>\n${ script }</script>`)
          }
        }

        return `<demo title="${ data.title }" code="${ encodeURIComponent(data.code) }">
<template #preview>${ data.template }</template>
`
      } else {
        return `</demo>\n`
      }
    }
  })
}