// Utils
import { wrapInArray } from './array'

export type FilterPattern = Array<string | RegExp> | string | RegExp | null

/**
 * 创建过滤器
 *
 * @param include
 * @param exclude
 */
export function createFilter (
  include?: FilterPattern,
  exclude?: FilterPattern
): (id: string | any) => boolean {
  const getMatcher = (id: string | RegExp) => id instanceof RegExp ? id : new RegExp(id)

  const includeMatchers = wrapInArray(include).map(getMatcher)
  const excludeMatchers = wrapInArray(exclude).map(getMatcher)

  return id => {
    if (typeof id !== 'string') return false

    return !includeMatchers.length || (
      !excludeMatchers.some(v => v.test(id))
      && includeMatchers.some(v => v.test(id))
    )
  }
}

type MaybePick<T extends object,
  U extends Extract<keyof T, string>> = Record<string, unknown> extends T ? Partial<Pick<T, U>> : Pick<T, U>

export function pick<T extends object,
  U extends Extract<keyof T, string>> (obj: T, paths: U[]): [yes: MaybePick<T, U>, no: Omit<T, U>]
export function pick<T extends object,
  U extends Extract<keyof T, string>> (obj: T, paths: (U | RegExp)[]): [yes: Partial<T>, no: Partial<T>]
export function pick<T extends object,
  U extends Extract<keyof T, string>> (obj: T, paths: (U | RegExp)[]): [yes: Partial<T>, no: Partial<T>] {
  const found = Object.create({})
  const rest = Object.create({})

  for (const key in obj) {
    if (
      paths.some(path => path instanceof RegExp
        ? path.test(key)
        : path === key
      )
    ) {
      found[key] = obj[key]
    } else {
      rest[key] = obj[key]
    }
  }

  return [found, rest]
}

/**
 * Filter attributes that should be applied to
 * the root element of a an input component. Remaining
 * attributes should be passed to the <input> element inside.
 */
export function filterInputAttrs (attrs: Record<string, unknown>) {
  return pick(attrs, ['class', 'style', 'id', /^data-/])
}