// Utils
import { Fragment, camelize } from 'vue'
import { getObjectValueByPath } from './object'

// Types
import type { ComponentPublicInstance, Slots, VNode } from 'vue'

export function deepEqual(a: any, b: any): boolean {
  if (a === b) return true

  if (
    a instanceof Date
    && b instanceof Date
    && a.getTime() !== b.getTime()
  ) {
    // If the values are Date, compare them as timestamps
    return false
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false
  }

  const props = Object.keys(a)

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false
  }

  return props.every(p => deepEqual(a[p], b[p]))
}

export function getZIndex(el?: Element | null): number {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0

  const index = +window.getComputedStyle(el).getPropertyValue('z-index')

  if (!index) return getZIndex(el.parentNode as Element)
  return index
}

export function convertToUnit(str: number, unit?: string): string
export function convertToUnit(str: string | number | null | undefined, unit?: string): string | undefined
export function convertToUnit(str: string | number | null | undefined, unit = 'px'): string | undefined {
  if (str == null || str === '') {
    return undefined
  } else if (isNaN(+str!)) {
    return String(str)
  } else if (!isFinite(+str!)) {
    return undefined
  } else {
    return `${ Number(str) }${ unit }`
  }
}

export function isComponentInstance(obj: any): obj is ComponentPublicInstance {
  return obj?.$el
}

interface ItemGroup<T> {
  name: string
  items: T[]
}

export function groupItems<T extends any = any>(
  items: T[],
  groupBy: string[],
  groupDesc: boolean[],
): ItemGroup<T>[] {
  const key = groupBy[0]
  const groups: ItemGroup<T>[] = []
  let current
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const val = getObjectValueByPath(item, key, null)
    if (current !== val) {
      current = val
      groups.push({
        name: val ?? '',
        items: [],
      })
    }
    groups[groups.length - 1].items.push(item)
  }
  return groups
}

type DataTableCompareFunction<T = any> = (a: T, b: T) => number

export function sortItems<T extends any, K extends keyof T>(
  items: T[],
  sortBy: string[],
  sortDesc: boolean[],
  locale: string,
  customSorters?: Record<K, DataTableCompareFunction<T[K]>>,
): T[] {
  if (sortBy === null || !sortBy.length) return items
  const stringCollator = new Intl.Collator(locale, { sensitivity: 'accent', usage: 'sort' })

  return items.sort((a, b) => {
    for (let i = 0; i < sortBy.length; i++) {
      const sortKey = sortBy[i]

      let sortA = getObjectValueByPath(a, sortKey)
      let sortB = getObjectValueByPath(b, sortKey)

      if (sortDesc[i]) {
        [sortA, sortB] = [sortB, sortA]
      }

      if (customSorters?.[sortKey as K]) {
        const customResult = customSorters[sortKey as K](sortA, sortB)

        if (!customResult) continue

        return customResult
      }

      // Check if both cannot be evaluated
      if (sortA === null && sortB === null) {
        continue
      }

      // Dates should be compared numerically
      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime()
      }

      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase())

      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB)
        return stringCollator.compare(sortA, sortB)
      }
    }

    return 0
  })
}

export function defaultFilter(value: any, search: string | null, item: any) {
  return value != null
    && search != null
    && typeof value !== 'boolean'
    && value.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())
}

export function searchItems<T extends any = any>(items: T[], search: string): T[] {
  if (!search) return items
  search = search.toString().toLowerCase()
  if (search.trim() === '') return items

  return items.filter((item: any) => Object.keys(item).some(key => defaultFilter(getObjectValueByPath(item, key), search, item)))
}

export function debounce(fn: Function, delay: number) {
  let timeoutId = 0 as any
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export function throttle<T extends (...args: any[]) => any>(fn: T, limit: number) {
  let throttling = false
  return (...args: Parameters<T>): void | ReturnType<T> => {
    if (!throttling) {
      throttling = true
      setTimeout(() => throttling = false, limit)
      return fn(...args)
    }
  }
}

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
}

/**
 * Filters slots to only those starting with `prefix`, removing the prefix
 */
export function getPrefixedSlots(prefix: string, slots: Slots): Slots {
  return Object.keys(slots)
    .filter(k => k.startsWith(prefix))
    .reduce<Writable<Slots>>((obj, k) => {
      obj[k.replace(prefix, '')] = slots[k]
      return obj
    }, {})
}

export function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value))
}

export function padEnd(str: string, length: number, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length))
}

export function chunk(str: string, size = 1) {
  const chunked: string[] = []
  let index = 0
  while (index < str.length) {
    chunked.push(str.substr(index, size))
    index += size
  }
  return chunked
}

export function humanReadableFileSize(bytes: number, base: 1000 | 1024 = 1000): string {
  if (bytes < base) {
    return `${ bytes } B`
  }

  const prefix = base === 1024 ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G']
  let unit = -1
  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base
    ++unit
  }
  return `${ bytes.toFixed(1) } ${ prefix[unit] }B`
}

export function camelizeObjectKeys(obj: Record<string, any> | null | undefined) {
  if (!obj) return {}

  return Object.keys(obj).reduce((o: any, key: string) => {
    o[camelize(key)] = obj[key]
    return o
  }, {})
}

export function getUid() {
  return getUid._uid++
}

getUid._uid = 0

export function flattenFragments(nodes: VNode[]): VNode[] {
  return nodes.map(node => {
    if (node.type === Fragment) {
      return flattenFragments(node.children as VNode[])
    } else {
      return node
    }
  }).flat()
}

export const randomHexColor = () => {
  const n = (Math.random() * 0xFFFFF * 1000000).toString(16)
  return `#${ n.slice(0, 6) }`
}

export class CircularBuffer<T = never> {
  readonly #arr: Array<T> = []
  #pointer = 0

  constructor(public readonly size: number) {
  }

  push(val: T) {
    this.#arr[this.#pointer] = val
    this.#pointer = (this.#pointer + 1) % this.size
  }

  values(): T[] {
    return this.#arr.slice(this.#pointer).concat(this.#arr.slice(0, this.#pointer))
  }
}

export function padNumber(x: number, length: number): string {
  let padded = String(x)
  if (padded.length > length) {
    padded.substring(padded.length - length)
  }
  while (padded.length < length) {
    padded = `0${ padded }`
  }
  return padded
}
