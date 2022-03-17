// Utils
import createDebugger from 'debug'
import { toKebabCase, toPascalCase } from '@veno-ui/utils'
import { promises as fsp } from 'fs'
import { importModule, resolveModule } from 'local-pkg'
import { optimize } from 'svgo'
import { getIconData } from '@iconify/utils/lib/icon-set/get-icon'
import { iconToSVG } from '@iconify/utils/lib/svg/build'
import { defaults as DefaultIconCustomizations } from '@iconify/utils/lib/customisations'

// Types
import type { OptimizeOptions } from 'svgo'
import type { IconifyJSON } from '@iconify/types'

// Constants
import { DISABLE_COMMENT, EXISTING_PKG } from './constants'

export const debug = createDebugger('@veno-ui/vite-plugin-icons')

/**
 * 导入 Vue SFC 编译器
 */
export async function importSFCCompiler () {
  return await importModule('@vue/compiler-sfc')
}

/**
 * 编译 Vue SFC 的 template
 *
 * @param source
 * @param id
 */
export async function compileTemplate (source: string, id: string) {
  const { compileTemplate } = await importSFCCompiler()
  const kebab = toKebabCase(id)
  let { code } = compileTemplate({
    source,
    id: kebab,
    filename: `${ kebab }.vue`,
  })
  code = code.replace(/^export /gm, '')
  code += `\n\nexport default { name: '${ toPascalCase(id) }', render }`
  return DISABLE_COMMENT + '\n' + code
}

/**
 * 是 svg 文件
 *
 * @param code
 */
export function isSVG (code: string) {
  return /^<svg|<\?xml/.test(code)
}

/**
 * SVG 优化
 *
 * @param code
 * @param options
 */
export async function optimizeSVG (code: string, options: OptimizeOptions) {
  const optimized = optimize(code, options)
  const { error } = optimized
  if (error) throw new Error(`Optimize SVG error: ${ error }`)
  return (optimized as any).data as string
}

const sets: Record<string, IconifyJSON | undefined> = {}

/**
 * 加载某个集合的图标
 *
 * @param set
 */
export async function loadIcons (set: string) {
  if (!sets[set]) {
    const paths = [
      `@iconify-json/${ set }/icons.json`,
      EXISTING_PKG['@iconify/json'] && `@iconify/json/json/${ set }.json`,
    ].filter(Boolean) as string[]
    const path = paths.reduce<string | undefined>(
      (path, v) => path || resolveModule(v),
      undefined
    )
    if (path) {
      sets[set] = JSON.parse(await fsp.readFile(path, 'utf8'))
    } else {
      debug(`failed to load ${ set }`)
    }
  }

  return sets[set]
}

/**
 * 通过集合和名字查询图标
 *
 * @param set
 * @param name
 */
export async function findIcon (set: string, name: string) {
  const icons = await loadIcons(set)
  if (!icons) return
  const names = [
    name,
    name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
    name.replace(/([a-z])(\d+)/g, '$1-$2'),
  ]
  for (const id of names) {
    const icon = getIconData(icons, id, true)
    if (!icon) continue
    debug(`${ set }:${ id }`)
    const { attributes, body } = iconToSVG(icon, DefaultIconCustomizations)
    return `<svg ${
      Object.keys(attributes)
        .map((p: string) => `${ p }="${ (attributes as Record<string, string>)[p] }"`)
        .join(' ')
    }>${ body }</svg>`
  }
  return
}