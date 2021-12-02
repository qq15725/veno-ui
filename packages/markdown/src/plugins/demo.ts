// Utils
import container from 'markdown-it-container'
import Token from 'markdown-it/lib/token'

// Types
import type { RenderRule } from 'markdown-it/lib/renderer'
import type { PluginSimple } from '../markdown'

export const demoPlugin: PluginSimple = md => {
  const name = 'demo'

  const demoRender: RenderRule = (tokens, index, options, env, self) => {
    const token = tokens[index]

    const props = {
      title: '',
      code: '',
    }

    if (token.nesting === 1) {
      let skip = false
      const templateTokens: Token[] = []
      while (tokens[++index].type !== `container_${ name }_close`) {
        const cur = tokens[index]
        if (cur.type === 'heading_open' && cur.level === 1) {
          props.title = tokens[index + 1].content
          skip = true
        } else if (cur.type === 'heading_close' && cur.level === 1) {
          skip = false
        } else if (cur.type === 'fence' && cur.info === 'html') {
          const templateToken = new Token('html_block', '', 0)
          templateToken.content = cur.content
          templateTokens.push(templateToken)

          let templateCode = cur.content
            .split('\n')
            .map((line) => (line.length ? '  ' + line : line))
            .join('\n')

          templateCode = `<template>\n${ templateCode }</template>`

          props.code += templateCode
        } else if (cur.type === 'fence' && cur.info === 'js') {
          let scriptCode = cur.content
            .split('\n')
            .map((line) => (line.length ? '  ' + line : line))
            .join('\n')

          scriptCode = `\n\n<script>\n${ scriptCode }</script>`

          props.code += scriptCode

          md.__data.hoistedTags.push(scriptCode)
        } else if (!skip) {
          templateTokens.push(cur)
        }
      }

      return `<demo 
  title="${ props.title }" 
  code="${ encodeURIComponent(props.code) }" 
  filename="${ env.filename }"
>
  ${ self.render(templateTokens, options, env) }
<!--`
    } else {
      return `-->\n</demo>\n`
    }
  }

  md.use(container, name, {
    render: demoRender
  })
}