export * from './parse-header'
export * from './slugify'

export const toPascalCase = (string: string): string => {
  return (
    string.trim()
      .replace(/^[a-z]/, (match: string) => match.toLocaleUpperCase())
      .replace(/-(\w)/g, (match: string, part1: string) => part1.toLocaleUpperCase())
  )
}