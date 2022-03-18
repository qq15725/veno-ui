// Utils
import MagicString from 'magic-string'
import { toSnakeCase, toKebabCase } from '@veno-ui/utils'
import { optimizeSVG, compileTemplate, findIcon } from './utils'
import { DISABLE_COMMENT, VIRTUAL_ID } from './constants'
import { relative } from 'path'

// Types
import type { ResolvedOptions } from './types'

export async function transformComponent (source: string, id: string, ctx: ResolvedOptions) {
  let no = -1
  const s = new MagicString(source)
  for (const i in ctx.replaces) {
    const { component, props } = ctx.replaces[i]
    const componentRE = `_component_${ toSnakeCase(component) }`
    const propRE = `(${ props.map(toKebabCase).map(v => v.indexOf('-') > -1 ? `"${ v }"` : v).join('|') })`
    const matchAllRE = new RegExp(
      `_createVNode\\(${componentRE}, .*?{.*?${propRE}: (.+?)([,|}].*?\\))`,
      'gs'
    )
    for (const match of source.matchAll(matchAllRE)) {
      const matched = match[2]
      if (match.index == null || !matched) continue
      const start_ = match.index + match[0].length - match[2].length - match[3].length
      for (const subMatch of matched.matchAll(/"(.+?)"|'(.+?)'/g)) {
        const subMatched = subMatch[1] || subMatch[2]
        const [set] = subMatched.split('-', 1) || []
        const name = subMatched.substring(set.length + 1)
        if (subMatch.index != null && set && name) {
          if (await findIcon(set, name)) {
            const start = start_ + subMatch.index
            const end = start + subMatched.length + 2
            const varName = `__veno_ui_icons_${ ++no }`
            s.prepend(`import ${ varName } from '${ VIRTUAL_ID }/${ set }/${ name }';\n`)
            s.overwrite(start, end, varName)
          }
        }
      }
    }
  }
  if (no > -1) s.prepend(`\n${ DISABLE_COMMENT }\n`)
  return {
    code: s.toString(),
    map: s.generateMap({ source: id, includeContent: true })
  }
}

export async function transformSVG (source: string, id: string, ctx: ResolvedOptions) {
  return compileTemplate(
    await optimizeSVG(source, ctx.svgoOptions),
    relative(ctx.root, id).replace(/\//g, '-')
  )
}