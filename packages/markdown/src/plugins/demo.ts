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
    let state: null | string = null
    const data: Record<string, Token[]> = {
      title: [],
      prepend: [],
      template: [],
      script: [],
      append: [],
    }
    if (token.nesting === 1) {
      while (tokens[++index].type !== `container_${ name }_close`) {
        const prev = tokens[index - 1]
        const current = tokens[index]
        if (current.type === 'fence' && current.info === 'html') {
          state = 'template'
        } else if (current.type === 'fence' && current.info === 'js') {
          state = 'script'
        } else if (current && current.type === 'heading_open' && current.level === 1) {
          state = null
        } else if (prev && prev.type === 'heading_open' && prev.level === 1) {
          state = 'title'
        } else if (current && current.type === 'heading_close' && current.level === 1) {
          state = null
        } else if (state === null) {
          state = 'prepend'
        } else if (state !== 'prepend') {
          state = 'append'
        }
        if (state) {
          data[state].push(current)
        }
      }

      const props = {
        template: data.template.map(v => {
          return `<template>\n${ v.content
            .split('\n')
            .map((line) => (line.length ? '  ' + line : line))
            .join('\n') }</template>`
        }).join(),
        script: data.script.map(v => {
          return `\n\n<script>\n${ v.content
            .split('\n')
            .map((line) => (line.length ? '  ' + line : line))
            .join('\n') }</script>`
        }).join(),
      }

      const slots = {
        title: self.render(data.title, options, env),
        prepend: self.render(data.prepend, options, env),
        default: self.render(data.template.map(v => {
          const htmlToken = new Token('html_block', '', 0)
          htmlToken.content = v.content
          return htmlToken
        }), options, env),
        append: self.render(data.append, options, env),
      }

      if (props.script) {
        md.__data.hoistedTags.push(props.script)
      }

      return `<demo 
  code="${ encodeURIComponent([props.template, props.script].join()) }" 
  filename="${ env.filename }"
>
  <template #title>${ slots.title }</template>
  <template #prepend>${ slots.prepend }</template>
  <template #default>${ slots.default }</template>
  <template #append>${ slots.append }</template>
<!--`
    } else {
      return `-->\n</demo>\n`
    }
  }

  md.use(container, name, {
    render: demoRender
  })
}