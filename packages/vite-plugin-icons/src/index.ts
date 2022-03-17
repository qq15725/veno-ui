// Utils
import fg from 'fast-glob'
import { promises as fsp } from 'fs'
import { basename, extname, relative } from 'path'
import { createFilter } from '@veno-ui/utils'
import { resolveOptions } from './options'
import { findIcon } from './utils'
import { VIRTUAL_ID_RE } from './constants'
import { transformComponent, transformSVG } from './transform'

// Types
import type { PluginOption } from 'vite'
import type { Options } from './types'

const root = process.cwd()

export default function iconsPlugin (userOptions?: Options): PluginOption {
  const ctx = resolveOptions(userOptions || {}, root)
  const filter = createFilter(ctx.include, ctx.exclude)

  return {
    name: '@veno-ui/vite-plugin-icons',
    resolveId (id) {
      return VIRTUAL_ID_RE.test(id) ? id : null
    },
    async load (id) {
      const matched = id.match(VIRTUAL_ID_RE)
      if (!matched) return
      if (!matched[1]) {
        const paths = fg.sync(ctx.globs, {
          ignore: ['node_modules'],
          onlyFiles: true,
          cwd: ctx.root,
          absolute: true,
        })
        const code: any = []
        for (const i in paths) {
          const path = paths[i]
          const id = basename(path, extname(path))
          code.push(`  '${ id }': defineAsyncComponent(() => import('/${ relative(ctx.root, path) }')),`)
        }
        return {
          code: `import { defineAsyncComponent } from 'vue'\nexport default {\n${ code.join('\n') }\n}`,
          map: { version: 3, mappings: '', sources: [] } as any,
        }
      } else {
        const [_, set, name] = matched[1].split('/', 3)
        let source = await findIcon(set, name)
        if (!source) throw new Error(`Icon \`${ set }:${ name }\` not found`)
        return {
          code: await transformSVG(source, `${ set }-${ name }`, ctx),
          map: { version: 3, mappings: '', sources: [] } as any,
        }
      }
    },
    async transform (source, id) {
      try {
        if (/\.svg(\?component)?$/.test(id)) {
          return await transformSVG(await fsp.readFile(id, 'utf-8'), id, ctx)
        } else if (filter(id)) {
          return await transformComponent(source, id, ctx)
        }
      } catch (e: any) {
        this.error(e)
      }
      return
    }
  }
}
