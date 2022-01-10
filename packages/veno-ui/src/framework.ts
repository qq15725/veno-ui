// Utils
import { reactive } from 'vue'
import { mergeDeep } from './utils'

// Composables
import { createTheme, ThemeSymbol } from './composables/theme'
import { createHighlighter, HighlighterSymbol } from './composables/highlighter'
import { defaultSets, IconSymbol } from './composables/icon'
import { createDisplay, DisplaySymbol } from './composables/display'
import { createDefaults, DefaultsSymbol } from './composables/defaults'

// Iconsets
import { venoUiSvg } from './iconsets/veno-ui-svg'

// Types
import type { App, ComponentPublicInstance, InjectionKey } from 'vue'
import type { HighlighterOptions } from './composables/highlighter'
import type { ThemeOptions } from './composables/theme'
import type { IconOptions } from './composables/icon'
import type { DisplayOptions } from './composables/display'
import type { DefaultsOptions } from './composables/defaults'

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

    app.provide(DefaultsSymbol, createDefaults(options.defaults))
    app.provide(ThemeSymbol, createTheme(options.theme))
    app.provide(DisplaySymbol, createDisplay(options.display))
    app.provide(HighlighterSymbol, createHighlighter(options.highlighter))
    app.provide(IconSymbol, mergeDeep({
      defaultSet: 'class',
      sets: {
        ...defaultSets,
        'veno-ui': venoUiSvg,
      },
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
            display: inject.call(this, DisplaySymbol),
            theme: inject.call(this, ThemeSymbol),
            icons: inject.call(this, IconSymbol),
          })
        },
      },
    })
  }

  return { install, version }
}