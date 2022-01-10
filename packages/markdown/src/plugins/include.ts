// Utils
import container from 'markdown-it-container'
import { slugify, toPascalCase } from '../utils'
import { basename, dirname, join } from 'path'
import { readFileSync } from 'fs'

// Types
import type { RenderRule } from 'markdown-it/lib/renderer'
import type { PluginSimple } from '../types'

function parseRows (content: string) {
  const rows: string[][] = []

  content
    .split('\n')
    .map(v => v.trim())
    .filter(v => !!v)
    .forEach(v => {
      rows.push(
        v.split(' ')
          .map(v => v.trim())
          .filter(v => !!v)
      )
    })

  return rows.filter(v => v.length > 0)
}

export const includePlugin: PluginSimple = md => {
  const render: RenderRule = (tokens, index, _, env) => {
    const token = tokens[index]

    if (token.nesting === 1) {
      const rows: string[][] = []

      while (tokens[++index].type !== `container_include_close`) {
        rows.push(...parseRows(tokens[index].content))
        tokens[index].type = '__hidden__'
        tokens[index].hidden = true
      }

      const imports: string[] = []
      const colsLen = rows.reduce((len, v) => Math.max(len, v.length), 1)

      let codes = []
      for (let i = 0; i < colsLen; i++) {
        codes.push(
          `  <ve-col cols="12" md="${ 12 / colsLen }">`,
          `    <ve-row>`
        )
        rows.forEach(cols => {
          if (!cols[i]) return
          const file = `./${ cols[i] }`
          if (md._context.path) {
            const title = readFileSync(
              join(dirname(md._context.path), file),
              'utf-8'
            ).match?.(/# ([^\n]+)/)?.[1]
            if (title) {
              md._context.headers.push({
                level: 3,
                title,
                slug: slugify(title)
              })
            }
          }
          const component = toPascalCase(`ve-include-${ basename(file, '.md') }`)
          imports.push(`import ${ component } from '${ file }?included'`)
          codes.push(
            `      <ve-col cols="12"><${ component } /></ve-col>`
          )
        })
        codes.push(
          `    </ve-row>`,
          `  </ve-col>`
        )
      }

      md._context.hoistedTags.push(`<script setup>\n${ imports.join('\n') }\n</script>`)

      return `<ve-row>\n${ codes.join('\n') }\n`
    } else {
      return `</ve-row>\n`
    }
  }

  md.use(container, 'include', {
    render
  })
}