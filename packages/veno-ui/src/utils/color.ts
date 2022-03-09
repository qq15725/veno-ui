// Utils
import { HexToRGBA, parseHex } from '@veno-ui/utils'

// Types
import type { ThemeDefinition } from '../composables/theme'

export function classToHex (
  color: string,
  colors: Record<string, Record<string, string>>,
  currentTheme: Partial<ThemeDefinition['colors']>,
): string {
  const [colorName, colorModifier] = color
    .toString()
    .trim()
    .replace('-', '')
    .split(' ', 2) as (string | undefined)[]

  let hexColor = ''
  if (colorName && colorName in colors) {
    if (colorModifier && colorModifier in colors[colorName]) {
      hexColor = colors[colorName][colorModifier]
    } else if ('base' in colors[colorName]) {
      hexColor = colors[colorName].base
    }
  } else if (colorName && colorName in currentTheme) {
    hexColor = currentTheme[colorName] as string
  }

  return hexColor
}

export function parseGradient (
  gradient: string,
  colors: Record<string, Record<string, string>>,
  currentTheme: Partial<ThemeDefinition['colors']>,
) {
  return gradient.replace(/([a-z]+(\s[a-z]+-[1-5])?)(?=$|,)/gi, x => {
    return classToHex(x, colors, currentTheme) || x
  }).replace(/(rgba\()#[0-9a-f]+(?=,)/gi, x => {
    return 'rgba(' + Object.values(HexToRGBA(parseHex(x.replace(/rgba\(/, '')))).slice(0, 3).join(',')
  })
}