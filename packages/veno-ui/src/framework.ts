// Utils
import { reactive } from 'vue'
import { UI_NAME, UI_VERSION } from './utils'

// Composables
import { ThemeKey, createTheme } from './composables/theme'
import { HighlighterKey, createHighlighter } from './composables/highlighter'
import { IconsKey, createIcons } from './composables/icons'
import { DisplayKey, createDisplay } from './composables/display'
import { DefaultsKey, createDefaults } from './composables/defaults'
import { MessageKey, NotificationKey } from './composables/message'
import { DraggableSortableGroupKey, createDraggableSortableGroup } from './composables/draggable-sortable-group'
import { ProvidersKey, createProviders } from './composables/providers'

// Types
import type { App, Component, ComponentPublicInstance, InjectionKey } from 'vue'
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

    // Vue's inject() can only be used in setup
    function inject(this: ComponentPublicInstance, key: InjectionKey<any> | string) {
      const vm = this.$
      const provides = vm.parent?.provides ?? vm.vnode.appContext?.provides
      if (provides && (key as any) in provides) {
        return provides[(key as string)]
      }
    }

    app.mixin({
      computed: {
        $veno() {
          return reactive({
            display: inject.call(this, DisplayKey),
            theme: inject.call(this, ThemeKey),
            icons: inject.call(this, IconsKey),
            message: inject.call(this, MessageKey),
            notification: inject.call(this, NotificationKey),
            version,
          })
        },
      },
    })
  }

  return { install, version }
}
