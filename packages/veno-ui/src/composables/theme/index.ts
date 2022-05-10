// Utils
import { computed, inject, provide, ref, unref, watch, watchEffect } from 'vue'
import {
  IN_BROWSER,
  colorToOnColorHex,
  colorToRGB,
  deepMerge,
  getCurrentInstance,
  getLuma,
  propsFactory,
} from '../../utils'
import defaultOptions from './default-options'

// Types
import type { App, ExtractPropTypes, InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '../../utils'
import type { BaseColors, BaseOnColors, Colors } from './colors'
import type { HeadClient } from '@vueuse/head'

interface InternalThemeDefinition {
  dark: boolean
  colors: Colors
  variables: Record<string, string | number>
}

interface ThemeDefinitionColors extends BaseColors, Partial<BaseOnColors> {
  [key: string]: string | undefined
}

export interface ThemeDefinition {
  dark: boolean
  colors: ThemeDefinitionColors
  variables: Record<string, string | number>
}

interface InternalThemeOptions {
  isDisabled: boolean
  defaultTheme: string
  themes: Record<string, ThemeDefinition>
}

export type ThemeOptions = false | {
  defaultTheme?: string
  themes?: Record<string, ThemeDefinition>
}

export interface ThemeInstance {
  isDisabled: boolean
  themes: Ref<Record<string, InternalThemeDefinition>>
  current: Ref<string>
  themeClasses: Ref<string | undefined>
  setTheme: (key: string, theme: ThemeDefinition) => void
  getTheme: (key: string) => InternalThemeDefinition
}

export type ThemeProps = ExtractPropTypes<ReturnType<typeof makeThemeProps>>

export const ThemeKey: InjectionKey<ThemeInstance> = Symbol.for('veno-ui:theme')

export const makeThemeProps = propsFactory({
  /**
   * @zh 设置主题
   */
  theme: String,
}, 'theme')

const parseThemeOptions = (options: ThemeOptions = defaultOptions): InternalThemeOptions => {
  if (!options) {
    return { ...defaultOptions, isDisabled: true }
  }

  return deepMerge(defaultOptions, options) as InternalThemeOptions
}

function createCssClass(selector: string, content: string[]) {
  return [
    `${ selector } {\n`,
    ...content.map(line => `  ${ line };\n`),
    '}\n',
  ]
}

export function createTheme(app: App, options?: ThemeOptions): ThemeInstance {
  const head = app._context.provides.usehead as HeadClient | undefined
  const parsedOptions = parseThemeOptions(options)
  const styleEl = ref<HTMLStyleElement>()
  const current = ref(parsedOptions.defaultTheme)
  const themes = ref(parsedOptions.themes)

  const computedThemes = computed(() => {
    return Object.keys(themes.value).reduce((obj, key) => {
      const theme = themes.value[key]
      for (const color of Object.keys(theme.colors)) {
        if (/on-[a-z]/.test(color) || theme.colors[`on-${ color }`]) continue
        theme.colors[`on-${ color }`] = colorToOnColorHex(theme.colors[color]!)
      }
      obj[key] = theme as InternalThemeDefinition
      return obj
    }, {} as Record<string, InternalThemeDefinition>)
  })

  const styles = computed(() => {
    const lines = []

    for (const themeName of Object.keys(computedThemes.value)) {
      const theme = computedThemes.value[themeName]

      lines.push(
        ...createCssClass(`.ve-theme--${ themeName }`, [
          ...genCssVariables(themeName),
          ...Object.keys(theme.variables).map(key => {
            const value = theme.variables[key]
            const color = typeof value === 'string' && value.startsWith('#')
              ? colorToRGB(value)
              : undefined
            const rgb = color
              ? `${ color.r }, ${ color.g }, ${ color.b }`
              : undefined
            return `--ve-${ key }: ${ rgb ?? value }`
          }),
        ]),
      )

      if (theme.dark) {
        for (const key of Object.keys(theme.colors)) {
          if (/on-[a-z]/.test(key)) {
            lines.push(
              ...createCssClass(`.${ key }`, [
                `color: rgb(var(--ve-theme-${ key })) !important`,
              ]),
            )
          } else {
            lines.push(
              ...createCssClass(`.bg-${ key }`, [
                `--ve-theme-overlay-multiplier: var(--ve-theme-${ key }-overlay-multiplier)`,
                `background: rgb(var(--ve-theme-${ key })) !important`,
                `color: rgb(var(--ve-theme-on-${ key })) !important`,
              ]),
              ...createCssClass(`.text-${ key }`, [
                `color: rgb(var(--ve-theme-${ key })) !important`,
              ]),
              ...createCssClass(`.border-${ key }`, [
                `--ve-border-color: var(--ve-theme-${ key })`,
              ]),
            )
          }
        }
      }
    }

    return lines.map((str, i) => i === 0 ? str : `    ${ str }`).join('')
  })

  function genCssVariables(name: string) {
    const theme = computedThemes.value[name]
    if (!theme) throw new Error(`Could not find theme ${ name }`)
    const lightOverlay = theme.dark ? 2 : 1
    const darkOverlay = theme.dark ? 1 : 2
    const variables: string[] = []
    for (const [key, value] of Object.entries(theme.colors)) {
      const rgb = colorToRGB(value!)
      variables.push(`--ve-theme-${ key }: ${ rgb.r },${ rgb.g },${ rgb.b }`)
      if (!key.startsWith('on-')) {
        variables.push(`--ve-theme-${ key }-overlay-multiplier: ${ getLuma(value) > 0.18 ? lightOverlay : darkOverlay }`)
      }
    }
    return variables
  }

  if (head) {
    head.addHeadObjs(computed(() => ({
      style: [{
        children: styles.value,
        type: 'text/css',
        id: 'veno-ui-theme-stylesheet',
      }],
    })))

    if (IN_BROWSER) {
      watchEffect(() => head.updateDOM())
    }
  } else {
    watch(themes, updateStyles, { deep: true, immediate: true })

    function updateStyles() {
      if (parsedOptions.isDisabled) return
      genStyleElement()
      if (styleEl.value) styleEl.value.innerHTML = styles.value
    }

    function genStyleElement() {
      if (typeof document === 'undefined' || styleEl.value) return
      const el = document.createElement('style')
      el.type = 'text/css'
      el.id = 'veno-ui-theme-stylesheet'
      styleEl.value = el
      document.head.appendChild(styleEl.value)
    }
  }

  return {
    isDisabled: parsedOptions.isDisabled,
    themes: computedThemes,
    setTheme: (key: string, theme: ThemeDefinition) => themes.value[key] = theme,
    getTheme: (key: string) => computedThemes.value[key],
    current,
    themeClasses: computed(() => {
      return parsedOptions.isDisabled
        ? undefined
        : `ve-theme--${ current.value }`
    }),
  }
}

export function provideTheme(props: MaybeRef<ThemeProps>) {
  getCurrentInstance('provideTheme')
  const theme = inject(ThemeKey, null)
  if (!theme) throw new Error('Could not find theme injection')
  const current = computed<string>(() => {
    const { theme: propTheme } = unref(props)

    if (propTheme && propTheme.includes(':')) {
      const [theme1, theme2] = propTheme.split(':')
      return theme?.current.value === theme1 ? theme2 : theme1
    }

    return propTheme ?? theme?.current.value
  })
  const themeClasses = computed(() => {
    return theme.isDisabled ? undefined : `ve-theme--${ current.value }`
  })
  const newTheme: ThemeInstance = {
    ...theme,
    current,
    themeClasses,
  }
  provide(ThemeKey, newTheme)
  return newTheme
}

export function useTheme() {
  getCurrentInstance('useTheme')
  const provider = inject(ThemeKey, null)
  if (!provider) throw new Error('Could not find theme injection')
  return provider
}
