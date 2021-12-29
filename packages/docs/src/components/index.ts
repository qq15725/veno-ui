// Utils
import { toKebabCase } from '../utils'

// Types
import type { Component } from 'vue'

const modules = import.meta.globEager('./**/*.vue')

const components: Record<string, Component> = {}

Object.keys(modules).forEach(key => {
  const name = toKebabCase(
    key.match(/\.\/(.*)\.vue/)
      ?.[1]
      ?.replace('/', '-')
    ?? key
  )
  components[name] = modules[key].default
})

export default components