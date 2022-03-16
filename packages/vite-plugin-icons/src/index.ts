// Utils
import fg from 'fast-glob'
import { promises as fsp } from 'fs'
import { basename, extname } from 'path'
import { createFilter } from '@veno-ui/utils'
import { resolveOptions } from './options'
import { findIcon, isSVG } from './utils'
import { ICONS_RE, ICONS_ID } from './constants'
import { transformComponent, transformSVG } from './transform'

// Types
import type { PluginOption } from 'vite'
import type { Options } from './types'

const root = process.cwd()

export default function iconsPlugin (userOptions?: Options): PluginOption {
  const options = resolveOptions(userOptions || {}, root)
  const filter = createFilter(options.include, options.exclude)

  const icons: Record<string, string> = {}

  return {
    name: '@veno-ui/vite-plugin-icons',
    enforce: 'post',
    configureServer () {
      fg.sync(options.globs, {
        ignore: ['node_modules'],
        onlyFiles: true,
        cwd: options.root,
        absolute: true,
      }).forEach(async id => {
        icons[basename(id, extname(id))] = await fsp.readFile(id, 'utf8')
      })
    },
    resolveId (id) {
      return ICONS_ID === id || ICONS_RE.test(id) ? id : null
    },
    async load (id) {
      if (ICONS_RE.test(id)) {
        id = id.replace(ICONS_RE, '')
        const [set, name] = id.split('/', 2)
        if (set && !name && set in icons) {
          const source = icons[set]
          return {
            code: isSVG(source)
              ? await transformSVG(source, id, options)
              : source,
            map: { version: 3, mappings: '', sources: [] } as any,
          }
        } else if (set && name) {
          let source = await findIcon(set, name)
          if (!source) throw new Error(`Icon \`${ set }:${ name }\` not found`)
          return {
            code: await transformSVG(source, `${ set }-${ name }`, options),
            map: { version: 3, mappings: '', sources: [] } as any,
          }
        }
      } else if (id === ICONS_ID) {
        const code: any = []
        for (const id in icons) {
          code.push(`  '${ id }': defineAsyncComponent(() => import('${ ICONS_ID }/${ id }')),`)
        }
        return {
          code: `import { defineAsyncComponent } from 'vue'\nexport default {\n${ code.join('\n') }\n}`,
          map: { version: 3, mappings: '', sources: [] } as any,
        }
      }
      return
    },
    async transform (source, id) {
      if (!filter(id) || !id.startsWith(root)) return
      try {
        if (isSVG(source)) {
          return await transformSVG(source, id, options)
        } else {
          return await transformComponent(source, id, options)
        }
      } catch (e: any) {
        this.error(e)
      }
    },
  }
}
