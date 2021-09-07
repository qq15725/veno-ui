import { createTheme, ThemeSymbol } from './composables/theme'

// Types
import type { App } from 'vue'
import type { ThemeOptions } from './composables/theme'

export interface VenoOptions
{
  components?: Record<string, any>
  theme?: ThemeOptions
}

export const createVeno = (options: VenoOptions = {}) => {
  const install = (app: App) => {
    const {
      components = {},
    } = options

    for (const key in components) {
      app.component(key, components[key])
    }

    app.provide(ThemeSymbol, createTheme(options.theme))
  }

  return { install }
}