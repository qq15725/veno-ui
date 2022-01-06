// Utils
import { computed, inject, provide, ref, unref, watch } from 'vue'
import {
  colorToRGB,
  getLuma,
  mergeDeep,
  propsFactory,
  getCurrentInstance,
} from '../../utils'
import { colorToOnColorHex } from '../../utils/color'
import defaultOptions from './default-options'

// Types
import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '../../utils'
import type { Colors, BaseColors, BaseOnColors } from './colors'

interface InternalThemeDefinition
{
  dark: boolean
  colors: Colors
  variables: Record<string, string | number>
}

interface ThemeDefinitionColors extends BaseColors, Partial<BaseOnColors>
{
  [key: string]: string | undefined
}

export interface ThemeDefinition
{
  dark: boolean
  colors: ThemeDefinitionColors
  variables: Record<string, string | number>
}

interface InternalThemeOptions
{
  isDisabled: boolean
  defaultTheme: string
  themes: Record<string, ThemeDefinition>
}

export type ThemeOptions = false | {
  defaultTheme?: string
  themes?: Record<string, ThemeDefinition>
}

export interface Theme
{
  isDisabled: boolean
  themes: Ref<Record<string, InternalThemeDefinition>>
  current: Ref<string>
  themeClasses: Ref<string | undefined>
  setTheme: (key: string, theme: ThemeDefinition) => void
  getTheme: (key: string) => InternalThemeDefinition
}

export const ThemeSymbol: InjectionKey<Theme> = Symbol.for('veno-ui:theme')

export const makeThemeProps = propsFactory({
  theme: String,
}, 'theme')

const parseThemeOptions = (options: ThemeOptions = defaultOptions): InternalThemeOptions => {
  if (!options) {
    return { ...defaultOptions, isDisabled: true }
  }

  return mergeDeep(defaultOptions, options) as InternalThemeOptions
}

function createCssClass (selector: string, content: string[]) {
  return [
    `${ selector } {\n`,
    ...content.map(line => `  ${ line };\n`),
    '}\n',
  ]
}

export function createTheme (options?: ThemeOptions): Theme {
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
        ])
      )

      if (theme.dark) {
        for (const key of Object.keys(theme.colors)) {
          if (/on-[a-z]/.test(key)) {
            lines.push(
              ...createCssClass(`.${ key }`, [
                `color: rgb(var(--ve-theme-${ key }))`
              ])
            )
          } else {
            lines.push(
              ...createCssClass(`.bg-${ key }`, [
                `--ve-theme-overlay-multiplier: var(--ve-theme-${ key }-overlay-multiplier)`,
                `background: rgb(var(--ve-theme-${ key }))`,
                `color: rgb(var(--ve-theme-on-${ key }))`,
              ]),
              ...createCssClass(`.text-${ key }`, [
                `color: rgb(var(--ve-theme-${ key }))`
              ]),
              ...createCssClass(`.border-${ key }`, [
                `--ve-border-color: var(--ve-theme-${ key })`
              ]),
            )
          }
        }
      }
    }

    return lines.map((str, i) => i === 0 ? str : `    ${str}`).join('')
  })

  function genCssVariables (name: string) {
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

  watch(themes, updateStyles, { deep: true, immediate: true })

  function updateStyles () {
    if (parsedOptions.isDisabled) return
    genStyleElement()
    if (styleEl.value) styleEl.value.innerHTML = styles.value
  }

  function genStyleElement () {
    if (typeof document === 'undefined' || styleEl.value) return
    const el = document.createElement('style')
    el.type = 'text/css'
    el.id = 'veno-ui-theme-stylesheet'
    styleEl.value = el
    document.head.appendChild(styleEl.value)
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

export interface ThemeProps
{
  theme?: string
}

export function provideTheme (props: MaybeRef<ThemeProps>) {
  getCurrentInstance('provideTheme')

  const theme = inject(ThemeSymbol, null)

  if (!theme) throw new Error('Could not find VenoUi theme injection')

  const current = computed<string>(() => {
    const { theme: propTheme } = unref(props)

    return propTheme ?? theme?.current.value
  })

  const themeClasses = computed(() => {
    return theme.isDisabled ? undefined : `ve-theme--${current.value}`
  })

  const newTheme: Theme = {
    ...theme,
    current,
    themeClasses,
  }

  provide(ThemeSymbol, newTheme)

  return newTheme
}

export function useTheme () {
  getCurrentInstance('useTheme')

  const theme = inject(ThemeSymbol, null)

  if (!theme) throw new Error('Could not find VenoUi theme injection')

  return theme
}