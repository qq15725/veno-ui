import { toKebabCase } from './helpers'

// Types
import type { RouteRecordRaw } from 'vue'

export function loadPageRoutes (language: 'zh' = 'zh'): RouteRecordRaw[] {
  let modules, nameRE
  {
    if (language === 'zh') {
      modules = import.meta.globEager('../pages/zh/**/*.md')
      nameRE = /zh\/(.+)\.md$/
    } else {
      modules = {}
    }
  }

  return Object.keys(modules).map(key => {
    const name = key.match(nameRE)?.[1]
    const module = modules[key]
    return {
      name: toKebabCase(`${ language }-${ name }`),
      path: `/${ language }/${ name }.html`,
      component: module.default,
      meta: module.__pageData ?? {},
    }
  })
}