// Utils
import { kebabCase } from '@/utils'

// Types
import type { Component } from 'vue'
import type { UsePlugin } from '@/types'

const modules = import.meta.globEager('../components/**/*.vue')

const components: Record<string, Component> = {}

Object.keys(modules).forEach(key => {
  const name = kebabCase(
    key
      .replace('../components/', '')
      .match(/(.*)\.vue$/)
      ?.[1]
      ?.replace('/', '-')
    ?? key
  )
  components[name] = modules[key].default
})

export const useGlobalComponents: UsePlugin = app => {
  for (const key in components) {
    app.component(key, components[key])
  }
}
