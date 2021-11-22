// Utils
import { camelize, capitalize } from 'vue'

// Constants
export const docTypes = ['component', 'composable'] as const

// Types
import type { RouteRecordRaw } from 'vue-router'

export type DocType = typeof docTypes[number]

export function loadDocsModules (type: DocType) {
  switch (type) {
    case 'component':
      return {
        nameRE: /components\/ve-(\w+)(.|\/)*README\.md/,
        modules: import.meta.globEager('../../../veno-ui/src/components/**/README.md'),
      }
    case 'composable':
      return {
        nameRE: /composables\/(\w+)(.|\/)*README\.md/,
        modules: import.meta.globEager('../../../veno-ui/src/composables/**/README.md'),
      }
  }
}

export function loadDocsRoutes (type: DocType): RouteRecordRaw[] {
  const { nameRE, modules } = loadDocsModules(type)
  return Object.keys(modules)
    .filter(path => nameRE.test(path))
    .map(path => {
      let name = (path.match(nameRE) as string[])[1]
      const module = modules[path]
      return {
        name: `${ capitalize(camelize(name)) }${ capitalize(camelize(type)) }`,
        path: `/${ type }/${ name }.html`,
        component: module.default,
        meta: module.__pageData ?? {},
      }
    })
}