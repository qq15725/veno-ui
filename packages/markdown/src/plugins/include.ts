// Utils
import container from 'markdown-it-container'
import { toPascalCase } from '../utils'
import path from 'path'

// Types
import type { PluginSimple } from 'markdown-it/lib'
import type Token from 'markdown-it/lib/token'
import type { RenderRule } from 'markdown-it/lib/renderer'

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
      }

      const imports: string[] = []
      const colsLen = rows.reduce((len, v) => Math.max(len, v.length), 1)

      let code = []
      for (let i = 0; i < colsLen; i++) {
        code.push(
          `  <ve-col cols="12" md="${ 12 / colsLen }">`,
          `    <ve-row>`
        )
        rows.forEach(cols => {
          if (!cols[i]) return
          const filename = `./${ cols[i] }`
          const basename = path.basename(filename, '.md')
          const componentName = toPascalCase(`ve-include-${ basename }`)
          imports.push(`import ${ componentName } from '${ filename }'`)
          code.push(`      <ve-col cols="12"><${ componentName } /></ve-col>`)
        })
        code.push(
          `    </ve-row>`,
          `  </ve-col>`
        )
      }

      const hoistedTags = (md as any).__data.hoistedTags || ((md as any).__data.hoistedTags = [])
      hoistedTags.push(`<script setup>\n${ imports.join('\n') }\n</script>`)

      return `<ve-row>\n${ code.join('\n') }\n<!--`
    } else {
      return `-->\n</ve-row>`
    }
  }

  md.use(container, 'include', {
    render,
  })
}