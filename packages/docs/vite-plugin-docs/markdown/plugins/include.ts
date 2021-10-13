import container from 'markdown-it-container'
import { dirname } from 'path'
import { readFileSync } from 'fs'

import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

const RE = /^\.\//

export const includePlugin = (md: MarkdownIt) => {
  const name = 'include'

  md.use(container, name, {
    render (tokens: Token[], index: number) {
      const token = tokens[index]
      const filename = (md as any).__data.filename
      const dir = dirname(filename)

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
                .map(v => {
                  if (filename) {
                    if (RE.test(v)) {
                      v = v.replace(RE, `${ dir }/`)
                    } else {
                      v = `${ dir }/${ v }`
                    }
                  }
                  return v
                })

              if (row.length > 0) {
                rows.push(row)
              }
            })
        }

        let code = ''
        rows.forEach(row => {
          row.forEach((col: string) => {
            const src = readFileSync(col).toString()
            const { html } = (md as any).render(src)
            code += `<ve-col cols="6">\n${ html }\n</ve-col>`
          })
        })

        return `<ve-row>\n${ code }\n<!--`
      } else {
        return `-->\n</ve-row>`
      }
    }
  })

}