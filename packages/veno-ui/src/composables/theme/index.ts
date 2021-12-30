// Utils
import { computed, getCurrentInstance, inject, provide, ref, unref, watch } from 'vue'
import {
  colorToInt,
  colorToRGB,
  createRange,
  darken,
  getLuma,
  intToHex,
  lighten,
  mergeDeep,
  propsFactory,
  consoleError,
} from '../../utils'
// @ts-ignore
import { APCAcontrast } from '../../utils/color/apca'
import defaultOptions from './default-options'

// Types
import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '../../utils'

interface BaseColors
{
  background: string
  surface: string
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
  info: string
}

interface OnColors
{
  'on-background': string
  'on-surface': string
  'on-primary': string
  'on-secondary': string
  'on-success': string
  'on-warning': string
  'on-error': string
  'on-info': string
}

interface Colors extends BaseColors, OnColors
{
  [key: string]: string
}

interface InternalThemeDefinition
{
  dark: boolean
  colors: Colors
  variables: Record<string, string | number>
}

interface ThemeDefinitionColors extends BaseColors, Partial<OnColors>
{
  [key: string]: string | undefined
}

export interface ThemeDefinition
{
  dark: boolean
  colors: ThemeDefinitionColors
  variables: Record<string, string | number>
}

interface VariationsOptions
{
  colors: string[]
  lighten: number
  darken: number
}

interface InternalThemeOptions
{
  isDisabled: boolean
  defaultTheme: string
  variations: VariationsOptions
  themes: Record<string, ThemeDefinition>
}

export type ThemeOptions = false | {
  defaultTheme?: string
  variations?: false | VariationsOptions
  themes?: Record<string, ThemeDefinition>
}

export interface ThemeInstance
{
  isDisabled: boolean
  themes: Ref<Record<string, InternalThemeDefinition>>
  current: Ref<string>
  themeClasses: Ref<string | undefined>
  setTheme: (key: string, theme: ThemeDefinition) => void
  getTheme: (key: string) => InternalThemeDefinition
}

export const ThemeSymbol: InjectionKey<ThemeInstance> = Symbol.for('veno-ui:theme')

export const makeThemeProps = propsFactory({
  theme: String,
}, 'theme')

const parseThemeOptions = (options: ThemeOptions = defaultOptions): InternalThemeOptions => {
  if (!options) {
    return { ...defaultOptions, isDisabled: true } as InternalThemeOptions
  }

  return mergeDeep(defaultOptions, options) as InternalThemeOptions
}

// Composables
export function createTheme (options?: ThemeOptions): ThemeInstance {
  const parsedOptions = parseThemeOptions(options)
  const styleEl = ref<HTMLStyleElement>()
  const current = ref(parsedOptions.defaultTheme)
  const themes = ref(parsedOptions.themes)
  const variations = ref(parsedOptions.variations)

  const computedThemes = computed(() => {
    return Object.keys(themes.value).reduce((obj, key) => {
      const theme: ThemeDefinition = {
        ...themes.value[key],
        colors: {
          ...themes.value[key].colors,
          ...(variations.value.colors ?? []).reduce((obj, color) => {
            return {
              ...obj,
              ...genColorVariations(color, themes.value[key].colors[color]!)
            }
          }, {}),
        },
      }

      for (const color of Object.keys(theme.colors)) {
        if (/on-[a-z]/.test(color) || theme.colors[`on-${ color }`]) continue

        const onColor = `on-${ color }` as keyof OnColors
        const colorVal = colorToInt(theme.colors[color]!)

        const blackContrast = Math.abs(APCAcontrast(0x000000, colorVal))
        const whiteContrast = Math.abs(APCAcontrast(0xffffff, colorVal))

        theme.colors[onColor] = whiteContrast > Math.min(blackContrast, 50)
          ? '#FFF'
          : '#000'
      }

      obj[key] = theme as InternalThemeDefinition

      return obj
    }, {} as Record<string, InternalThemeDefinition>)
  })

  function genColorVariations (name: string, color: string) {
    const obj: Record<string, string> = {}
    for (const variation of (['lighten', 'darken'] as const)) {
      const fn = variation === 'lighten' ? lighten : darken
      for (const amount of createRange(variations.value[variation], 1)) {
        obj[`${ name }${ variation === 'lighten' ? '-n' : '-' }${ amount }`] = intToHex(fn(colorToInt(color), amount))
      }
    }
    return obj
  }

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

  function genStyleElement () {
    if (typeof document === 'undefined' || styleEl.value) return
    const el = document.createElement('style')
    el.type = 'text/css'
    el.id = 'veno-ui-theme-stylesheet'
    styleEl.value = el
    document.head.appendChild(styleEl.value)
  }

  function createCssClass (selector: string, content: string[]) {
    return [
      `${ selector } {\n`,
      ...content.map(line => `  ${ line };\n`),
      '}\n',
    ]
  }

  function updateStyles () {
    if (parsedOptions.isDisabled) return

    genStyleElement()

    const lines = []

    // 主题类
    for (const themeName of Object.keys(computedThemes.value)) {
      const variables = computedThemes.value[themeName].variables

      lines.push(
        ...createCssClass(`.ve-theme--${ themeName }`, [
          // 颜色变量
          ...genCssVariables(themeName),
          // 自定义变量
          ...Object.keys(variables).map(key => {
            const value = variables[key]

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
    }

    // 颜色类
    const firstTheme = Object.keys(computedThemes.value)[0]
    for (const key of Object.keys(computedThemes.value[firstTheme].colors)) {
      if (/on-[a-z]/.test(key)) {
        lines.push(
          ...createCssClass(`.${ key }`, [
            `color: rgb(var(--ve-theme-${ key }))`
          ])
        )
      } else {
        lines.push(
          // 背景颜色
          ...createCssClass(`.bg-${ key }`, [
            `--ve-theme-overlay-multiplier: var(--ve-theme-${ key }-overlay-multiplier)`,
            `background: rgb(var(--ve-theme-${ key }))`,
            `color: rgb(var(--ve-theme-on-${ key }))`,
          ]),
          // 文字颜色
          ...createCssClass(`.text-${ key }`, [
            `color: rgb(var(--ve-theme-${ key }))`
          ]),
          // 边框颜色
          ...createCssClass(`.border-${ key }`, [
            `--ve-border-color: var(--ve-theme-${ key })`
          ]),
        )
      }
    }

    if (styleEl.value) {
      styleEl.value.innerHTML = lines.join('')
    }
  }

  watch(themes, updateStyles, { deep: true, immediate: true })

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

/**
 * Used to either set up and provide a new theme instance, or to pass
 * along the closest available already provided instance.
 */
export function useTheme (props: MaybeRef<ThemeProps>) {
  const vm = getCurrentInstance()
  const theme = inject(ThemeSymbol, null)

  if (!vm) consoleError('provideTheme must be called from inside a setup function')
  if (!theme) throw new Error('Could not find theme injection')

  const current = computed<string>(() => {
    const { theme: propTheme } = unref(props)

    return propTheme ?? theme?.current.value
  })

  const themeClasses = computed(() => {
    return theme.isDisabled
      ? undefined
      : `ve-theme--${ current.value }`
  })

  const newTheme: ThemeInstance = {
    ...theme,
    current,
    themeClasses,
  }

  provide(ThemeSymbol, newTheme)

  return newTheme
}
