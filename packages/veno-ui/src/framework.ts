import { createTheme, ThemeSymbol } from './composables/theme'

// Types
import type { App } from 'vue'
import type { ThemeOptions } from './composables/theme'

export interface VenoUiOptions
{
  components?: Record<string, any>
  directives?: Record<string, any>
  theme?: ThemeOptions
}

export const createVenoUi = (options: VenoUiOptions = {}) => {
  const install = (app: App) => {
    const {
      components = {},
      directives = {},
    } = options

    for (const key in components) {
      app.component(key, components[key])
    }

    for (const key in directives) {
      app.directive(key, directives[key])
    }

    app.provide(ThemeSymbol, createTheme(options.theme))
  }

  return { install }
}