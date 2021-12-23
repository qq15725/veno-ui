// Utils
import container from 'markdown-it-container'
import { toPascalCase } from '../utils'
import path from 'path'

// Types
import type Token from 'markdown-it/lib/token'
import type { RenderRule } from 'markdown-it/lib/renderer'
import type { PluginSimple } from '../markdown'

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
  const render: RenderRule = (tokens: Token[], index: number) => {
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
          const filename = `./${ cols[i] }`
          const basename = path.basename(filename, '.md')
          const componentName = toPascalCase(`ve-include-${ basename }`)
          imports.push(`import ${ componentName } from '${ filename }'`)
          codes.push(
            `      <ve-col cols="12"><${ componentName } /></ve-col>`
          )
        })
        codes.push(
          `    </ve-row>`,
          `  </ve-col>`
        )
      }

      md.__data.hoistedTags.push(`<script setup>\n${ imports.join('\n') }\n</script>`)

      return `<ve-row>\n${ codes.join('\n') }\n`
    } else {
      return `</ve-row>\n`
    }
  }

  md.use(container, 'include', {
    render
  })
}