// Utils
import { reactive } from 'vue'
import { mergeDeep } from './utils'

// Composables
import { createTheme, ThemeKey } from './composables/theme'
import { createHighlighter, HighlighterKey } from './composables/highlighter'
import { defaultSets, IconKey } from './composables/icon'
import { createDisplay, DisplayKey } from './composables/display'
import { createDefaults, DefaultsKey } from './composables/defaults'

// Iconsets
import { mdi, aliases } from './iconsets/mdi'

// Types
import type { App, ComponentPublicInstance, InjectionKey } from 'vue'
import type { HighlighterOptions } from './composables/highlighter'
import type { ThemeOptions } from './composables/theme'
import type { IconOptions } from './composables/icon'
import type { DisplayOptions } from './composables/display'
import type { DefaultsOptions } from './composables/defaults'

export * from './composables'

export interface VenoUiOptions
{
  componentPrefix?: string,
  components?: Record<string, any>
  directives?: Record<string, any>
  highlighter?: HighlighterOptions
  defaults?: DefaultsOptions
  theme?: ThemeOptions
  icons?: IconOptions
  display?: DisplayOptions
}

export const version = __VENO_UI_VERSION__

export const createVenoUi = (options: VenoUiOptions = {}) => {
  const install = (app: App) => {
    const {
      componentPrefix = 'Ve',
      components = {},
      directives = {},
      icons = {},
    } = options

    for (const key in components) {
      app.component(`${ componentPrefix }${ key }`, components[key])
    }

    for (const key in directives) {
      app.directive(key, directives[key])
    }

    app.provide(DefaultsKey, createDefaults(options.defaults))
    app.provide(ThemeKey, createTheme(app, options.theme))
    app.provide(DisplayKey, createDisplay(options.display))
    app.provide(HighlighterKey, createHighlighter(options.highlighter))
    app.provide(IconKey, mergeDeep({
      defaultSet: 'mdi',
      sets: {
        ...defaultSets,
        mdi
      },
      aliases
    }, icons))

    // Vue's inject() can only be used in setup
    function inject (this: ComponentPublicInstance, key: InjectionKey<any> | string) {
      const vm = this.$
      const provides = vm.parent?.provides ?? vm.vnode.appContext?.provides
      if (provides && (key as any) in provides) {
        return provides[(key as string)]
      }
    }

    app.mixin({
      computed: {
        $venoUi () {
          return reactive({
            theme: inject.call(this, ThemeKey),
            display: inject.call(this, DisplayKey),
            icons: inject.call(this, IconKey),
          })
        }
      }
    })
  }

  return { install, version }
}