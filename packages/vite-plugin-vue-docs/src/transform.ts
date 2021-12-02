import { dirname } from 'path'
import { createMarkdown } from '@veno-ui/markdown'
import { codegen } from './codegen'
import matter from 'gray-matter'

export function transform (code: string, id: string) {
  // 拆分 frontMatter
  const { data, content } = matter(code)
  // 解析 markdown
  const md = createMarkdown()
  const html = md.render(content, {
    filename: id.replace(dirname(dirname(dirname(__dirname))), ''),
  })
  return codegen(html, {
    ...data,
    ...md.__data,
  })
}