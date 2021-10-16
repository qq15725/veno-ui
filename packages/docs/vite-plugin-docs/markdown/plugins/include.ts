import container from 'markdown-it-container'
import { camelize, capitalize } from 'vue'

import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

export const includePlugin = (md: MarkdownIt) => {
  const name = 'include'

  md.use(container, name, {
    render (tokens: Token[], index: number) {
      const token = tokens[index]

      if (token.nesting === 1) {
        const rows: any[] = []

        while (tokens[++index].type !== `container_${ name }_close`) {
          tokens[index]
            .content
            .trim()
            .split('\n')
            .forEach(v => {
              const row = v.split(' ')
                .filter((v: string) => !!v)
                .map(id => {
                  const variable = `VeDocs${ capitalize(camelize(id.replace('.', '-'))) }`
                  const fileName = `./${ id }`

                  return {
                    id,
                    variable,
                    fileName,
                    tag: `<${ variable } />`
                  }
                })

              if (row.length > 0) {
                rows.push(row)
              }
            })
        }

        const importStatements: string[] = []
        let code = ''
        const cols = rows.reduce((cols, row) => Math.max(cols, row.length), 2)

        for (let i = 0; i < cols; i++) {
          code += `  <ve-col cols="12" md="${ 12 / cols }">`
          code += `    <ve-row>`
          rows.forEach(row => {
            if (row[i]) {
              const { variable, tag, fileName } = row[i]
              importStatements.push(`import ${ variable } from '${ fileName }'`)
              code += `      <ve-col cols="12">${ tag }</ve-col>`
            }
          })
          code += `    </ve-row>`
          code += `  </ve-col>`
        }

        const hoistedTags = (md as any).__data.hoistedTags || ((md as any).__data.hoistedTags = [])
        hoistedTags.push(`<script setup>\n${ importStatements.join('\n') }\n</script>`)

        return `<ve-row>\n${ code }\n<!--`
      } else {
        return `-->\n</ve-row>`
      }
    }
  })

}