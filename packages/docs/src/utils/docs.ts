// Utils
import { toKebabCase } from './helpers'

// Types
import type { RouteRecordRaw } from 'vue-router'

const typesModules = {
  component: {
    RE: /components\/(\w+)(.|\/)*README\.md/,
    modules: import.meta.globEager('../../../veno-ui/src/components/**/README.md')
  },
  composable: {
    RE: /composables\/(\w+)(.|\/)*README\.md/,
    modules: import.meta.globEager('../../../veno-ui/src/composables/**/README.md')
  }
}

export function loadDocsRoutes (type: keyof typeof typesModules): RouteRecordRaw[] {
  const { RE, modules } = typesModules[type]
  return Object.keys(modules)
    .filter(path => RE.test(path))
    .map(path => {
      let name = (path.match(RE) as string[])[1]
      const module = modules[path]
      return {
        name: toKebabCase(`${ type }-${ name }`),
        path: `/${ type }/${ name }.html`,
        component: module.default,
        meta: module.__pageData ?? {},
      }
    })
}