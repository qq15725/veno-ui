/**
 * 转化为短横线命名
 *
 * @param str
 */
export function toKebabCase (str: string) {
  return str
    .replace(/[^a-z0-9]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
}

/**
 * 转化为蛇形命名
 *
 * @param str
 */
export function toSnakeCase (str: string) {
  return toKebabCase(str).replace(/-/g, '_')
}

/**
 * 转化为小驼峰命名
 *
 * @param str
 */
export function toCameCase (str: string): string {
  return str.replace(/-(\w)/g, (match: string, part: string) => part.toLocaleUpperCase())
}

/**
 * 转化为大驼峰命名
 *
 * @param str
 */
export function toPascalCase (str: string): string {
  return toCameCase(
    str.replace(/^[a-z]/, (match: string) => match.toLocaleUpperCase())
  )
}