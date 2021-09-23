import createVuePlugin from '@vitejs/plugin-vue'
import fs from 'fs'
import { capitalize, camelize } from 'vue'
// @ts-ignore
import marked from 'marked'

// Types
import type { PluginOption } from 'vite'

interface CodegenOption
{
  title?: string
  // script
  imports: Record<string, string>
  components: Record<string, string>
  script?: string
  // template
  tokens: Record<string, any>[]
}

const renderer = new marked.Renderer()

renderer.heading = (text: string, level: number) => {
  const id = text.replace(/ /g, '-')

  const classes = level === 1 ? 'mb-5' : `my-${ 6 - level }`

  return `<h${ level } id="${ id }" class="${ classes }">${ text }</h${ level }>`
}

renderer.codespan = (text: string) => {
  return `<code style="background-color: rgb(244, 244, 248); padding: .05em .35em 0 .35em;">${ text }</code>`
}

renderer.paragraph = (text: string) => {
  return `<p class="mb-4" style="font-size: .875rem;">${ text }</p>`
}

function parserMarked (tokens: Record<string, any>) {
  return marked.parser(tokens, {
    gfm: true,
    renderer
  })
}

function codegen (option: CodegenOption) {
  let importsCode = ''
  for (const k in option.imports) {
    importsCode += `import ${ k } from '${ option.imports[k] }'\n`
  }

  let componentsCode = ''
  for (const k in option.components) {
    componentsCode += `${ k }: ${ option.components[k] },\n`
  }

  const exportTitle = option.title
    ? `export const title = "${ option.title }"`
    : ''

  const template = parserMarked(option.tokens)

  let code = `<template>${ template }</template>`
  if (option.script) {
    code += `<script>${ option.script }</script>`
  } else {
    code += `<script>
${ importsCode }

${ exportTitle }

export default {
  components: {
    ${ componentsCode }
  },
}
</script>`
  }

  return code
}

function getOptionByTokens (
  tokens: Record<string, any>[],
  isIndex = false
): CodegenOption {

  const option: CodegenOption = {
    imports: {},
    components: {},
    tokens: [],
  }

  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index]
    const { type, text } = token

    if (!isIndex && type === 'heading' && token.depth === 1) {
      const newTokens = [...tokens]
      newTokens.splice(0, index + 1)
      option.tokens.push({
        type: 'html',
        pre: false,
        text: `
<ve-card-title>${ text }</ve-card-title>
<ve-card-text>
  ${ parserMarked(getOptionByTokens(newTokens, isIndex).tokens) }
</ve-card-text>
`
      })
      return option
    } else if (type === 'heading' && token.depth === 1) {
      [option.title] = token.text.split(' ')
      option.tokens.push(token)
    } else if (type === 'code' && token.lang === 'docs') {
      let html = ''
      text.split('\n').forEach((item: string) => {
        const name = capitalize(camelize(item.replace('.', '-')))
        option.imports[name] = `./${ item }`
        option.components[name] = name
        html += `
<ve-col :cols="6">
  <ve-card>
    <${ name } />
  </ve-card>
</ve-col>
`
      })

      option.tokens.push({
        type: 'html',
        pre: false,
        text: `<ve-row>${ html }</ve-row>`
      })
    } else if (type === 'code' && token.lang === 'html') {
      option.tokens.push({
        type: 'html',
        pre: false,
        text,
      })
    } else if (type === 'code' && token.lang === 'js') {
      option.script = text
    } else {
      option.tokens.push(token)
    }
  }

  return option
}

async function getTransformedVueSrc (id: string) {
  return codegen(
    getOptionByTokens(
      marked.lexer(fs.readFileSync(id).toString()),
      /index\.md/.test(id)
    )
  )
}

const vuePlugin = createVuePlugin({
  include: [/\.vue$/, /\.md$/],
})

const fileRegex = /\.md$/

export default (): PluginOption[] => {
  return [
    {
      name: 'docs',
      async transform (code: string, id: string) {
        if (fileRegex.test(id)) {
          return await getTransformedVueSrc(id)
        }
      },
      async handleHotUpdate (ctx) {
        const { file } = ctx
        if (fileRegex.test(file)) {
          const code = await getTransformedVueSrc(file)
          if (vuePlugin.handleHotUpdate) {
            return vuePlugin.handleHotUpdate({
              ...ctx,
              read: () => code
            })
          }
        }
      }
    },
    vuePlugin,
  ]
}
