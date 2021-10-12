import container from 'markdown-it-container'
import { dirname } from 'path'

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
        const row: any[] = []

        while (tokens[++index].type !== `container_${ name }_close`) {
          tokens[index]
            .content
            .trim()
            .split('\n')
            .forEach(v => {
              const col = v.split(' ')
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

              if (col.length > 0) {
                row.push(col)
              }
            })
        }

        return `<include :items='${ JSON.stringify(row) }'>\n`
      } else {
        return `</include>\n`
      }
    }
  })

}