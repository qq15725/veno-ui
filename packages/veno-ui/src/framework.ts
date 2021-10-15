// Composables
import { createTheme, ThemeSymbol } from './composables/theme'
import { defaultSets, IconSymbol } from './composables/icon'
import { venoUiSvg } from './iconsets/veno-ui-svg'

// Utils
import { mergeDeep } from './utils'

// Types
import type { App } from 'vue'
import type { ThemeOptions } from './composables/theme'
import type { IconOptions } from './composables/icon'

export interface VenoUiOptions
{
  components?: Record<string, any>
  directives?: Record<string, any>
  icons?: IconOptions
  theme?: ThemeOptions
}

export const createVenoUi = (options: VenoUiOptions = {}) => {
  const install = (app: App) => {
    const {
      components = {},
      directives = {},
      icons = {},
    } = options

    for (const key in components) {
      app.component(key, components[key])
    }

    for (const key in directives) {
      app.directive(key, directives[key])
    }

    app.provide(ThemeSymbol, createTheme(options.theme))
    app.provide(IconSymbol, mergeDeep({
      defaultSet: 'class',
      sets: {
        ...defaultSets,
        'veno-ui': venoUiSvg,
      },
    }, icons))
  }

  return { install }
}