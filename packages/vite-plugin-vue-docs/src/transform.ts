import { dirname } from 'path'
import { createRenderer } from '@veno-ui/markdown'
import codegen from './codegen'
import matter from 'gray-matter'

export function transformMain (code: string, id: string) {
  const DIR = dirname(dirname(dirname(__dirname)))
  const filename = id.replace(DIR, '')
  const md = createRenderer()
  const { data: frontMatter, content } = matter(code)
  const { html, data } = md.render(content, {
    filename,
  })
  return codegen(html, {
    ...data,
    ...frontMatter,
  })
}