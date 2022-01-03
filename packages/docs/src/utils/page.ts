import { toKebabCase } from './helpers'

// Types
import type { RouteRecordRaw } from 'vue-router'

const languagesModules = {
  zh: {
    RE: /zh\/(.+)\.md$/,
    modules: import.meta.globEager('../pages/zh/**/*.md')
  }
}

export function loadPageRoutes (language: keyof typeof languagesModules = 'zh'): RouteRecordRaw[] {
  const { RE, modules } = languagesModules[language]

  return Object.keys(modules).map(key => {
    const name = key.match(RE)?.[1]
    const module = modules[key]
    return {
      name: toKebabCase(`${ language }-${ name }`),
      path: `/${ language }/${ name }.html`,
      component: module.default,
      meta: module.__pageData ?? {},
    }
  })
}