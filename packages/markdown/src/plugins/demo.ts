// Utils
import container from 'markdown-it-container'
import Token from 'markdown-it/lib/token'
import { slugify } from '../utils'

// Types
import type { RenderRule } from 'markdown-it/lib/renderer'
import type { PluginSimple } from '../types'

export const demoPlugin: PluginSimple = md => {
  const name = 'demo'

  const render: RenderRule = (tokens, index, options, env, self) => {
    if (tokens[index].nesting === 1) {
      const endType = tokens[index].type.replace('open', 'close')
      let state: null | string = null
      const subTokens: { state: string; token: Token }[] = []
      while (tokens[++index].type !== endType) {
        const token = tokens[index]
        if (token.type === 'heading_open' && token.level === 1) {
          state = 'title_open'
        } else if (token.type === 'heading_close' && token.level === 1) {
          state = null
        } else if (state === 'title_open') {
          state = 'title'
        } else if (token.type === 'fence' && token.info === 'html') {
          state = 'template'
        } else if (token.type === 'fence' && token.info === 'js') {
          state = 'script'
        } else if (state === null || state === 'prepend') {
          state = 'prepend'
        } else {
          state = 'append'
        }
        if (state) {
          subTokens.push({ state, token: { ...token } as Token })
        }
        token.type = '__hidden__'
        token.hidden = true
      }

      const props = {
        title: subTokens.find(v => v.state === 'title')?.token?.content,
        template: subTokens.filter(v => v.state === 'template').map(v => {
          return `<template>\n${ v.token.content
            .split('\n')
            .map((line) => (line.length ? `  ${ line }` : line))
            .join('\n') }</template>`
        }).join(''),
        script: subTokens.filter(v => v.state === 'script').map(v => {
          return `\n\n<script>\n${ v.token.content
            .split('\n')
            .map((line) => (line.length ? `  ${ line }` : line))
            .join('\n') }</script>`
        }).join(''),
      }

      if (props.script) {
        md._context.hoistedTags.push(props.script)
      }

      const slots = {
        prepend: self.render(
          subTokens.filter(v => v.state === 'prepend').map(v => v.token),
          options,
          env,
        ),
        default: self.render(
          subTokens.filter(v => v.state === 'template').map(v => {
            const htmlToken = new Token('html_block', '', 0)
            htmlToken.content = v.token.content
            return htmlToken
          }),
          options,
          env,
        ),
        append: self.render(
          subTokens.filter(v => v.state === 'append').map(v => v.token),
          options,
          env,
        ),
      }

      function genTitleProp() {
        return props.title ? `title="${ props.title }"` : ''
      }

      function genSlugProp() {
        return props.title ? `slug="${ slugify(props.title) }"` : ''
      }

      function genFileProp() {
        if (!md._context.relativePath) return ''
        return `file="${ md._context.relativePath }"`
      }

      function genCodeProp() {
        return `code="${
          encodeURIComponent(
            [props.template, props.script]
              .filter(Boolean)
              .join(''),
          )
        }"`
      }

      function genSlot(name: keyof typeof slots) {
        return slots[name]
          ? `  <template #${ name }>\n${ slots[name].replace(/\n$/, '') }\n  </template>`
          : `  <!--${ name }-->`
      }

      return `<demo ${ genTitleProp() } ${ genSlugProp() } ${ genFileProp() } ${ genCodeProp() }>
${ genSlot('prepend') }
${ genSlot('default') }
${ genSlot('append') }
`
    } else {
      return '</demo>\n'
    }
  }

  md.use(container, name, {
    render,
  })
}
