// Utils
import container from 'markdown-it-container'

// Types
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

export const demoPlugin = (md: MarkdownIt) => {
  const name = 'demo'

  md.use(container, name, {
    render (tokens: Token[], index: number, options, env, self) {
      const token = tokens[index]

      const data = {
        title: '',
        code: '',
      }

      if (token.nesting === 1) {
        let skip = false
        const templateTokens = []
        while (tokens[++index].type !== `container_${ name }_close`) {
          const cur = tokens[index]
          if (cur.type === 'heading_open' && cur.level === 1) {
            data.title = tokens[index + 1].content
            skip = true
          } else if (cur.type === 'heading_close' && cur.level === 1) {
            skip = false
          } else if (cur.type === 'fence' && cur.info === 'html') {
            templateTokens.push({
              type: 'html_block',
              content: cur.content,
            })

            let templateCode = cur.content
              .split('\n')
              .map((line) => (line.length ? '  ' + line : line))
              .join('\n')

            templateCode = `<template>\n${ templateCode }</template>`

            data.code += templateCode
          } else if (cur.type === 'fence' && cur.info === 'js') {
            let scriptCode = cur.content
              .split('\n')
              .map((line) => (line.length ? '  ' + line : line))
              .join('\n')

            scriptCode = `\n\n<script>\n${ scriptCode }</script>`

            data.code += scriptCode

            const hoistedTags = (md as any).__data.hoistedTags || ((md as any).__data.hoistedTags = [])
            hoistedTags.push(scriptCode)
          } else if (!skip) {
            templateTokens.push(cur)
          }
        }

        return `<demo title="${ data.title }" code="${ encodeURIComponent(data.code) }">
${ self.render(templateTokens, options, env) }
<!--`
      } else {
        return `-->\n</demo>\n`
      }
    }
  })
}