// Utils
import { UI_NAME, UI_VERSION } from './utils'

// Composables
import { ThemeKey, createTheme } from './composables/theme'
import { HighlighterKey, createHighlighter } from './composables/highlighter'
import { IconsKey, createIcons } from './composables/icons'
import { DisplayKey, createDisplay } from './composables/display'
import { DefaultsKey, createDefaults } from './composables/defaults'
import { DraggableSortableGroupKey, createDraggableSortableGroup } from './composables/draggable-sortable-group'
import { ProvidersKey, createProviders } from './composables/providers'

// Types
import type { App, Component } from 'vue'
import type { HighlighterOptions } from './composables/highlighter'
import type { ThemeOptions } from './composables/theme'
import type { IconsOptions } from './composables/icons'
import type { DisplayOptions } from './composables/display'
import type { DefaultsOptions } from './composables/defaults'

export * from './composables'
export * from './resolver'

export interface VenoOptions {
  componentPrefix?: string
  components?: Record<string, any>
  directives?: Record<string, any>
  providers?: Record<string, Component>
  highlighter?: HighlighterOptions
  defaults?: DefaultsOptions
  theme?: ThemeOptions
  icons?: IconsOptions
  display?: DisplayOptions
}

export const name = UI_NAME
export const version = UI_VERSION

export const createVeno = (options: VenoOptions = {}) => {
  const install = (app: App) => {
    const {
      componentPrefix = 'Ve',
      components = {},
      directives = {},
    } = options

    for (const key in components) {
      app.component(`${ componentPrefix }${ key }`, components[key])
    }

    for (const key in directives) {
      app.directive(key, directives[key])
    }

    app.provide(DisplayKey, createDisplay(options.display))
    app.provide(DefaultsKey, createDefaults(options.defaults))
    app.provide(DraggableSortableGroupKey, createDraggableSortableGroup())
    app.provide(ThemeKey, createTheme(app, options.theme))
    app.provide(HighlighterKey, createHighlighter(options.highlighter))
    app.provide(IconsKey, createIcons(options.icons))
    app.provide(ProvidersKey, createProviders(app, options.providers))
  }

  return { install, version }
}
