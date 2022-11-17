/**
 * 是否是对象
 *
 * @param objectable
 */
export function isObject(objectable: any): objectable is object {
  return objectable !== null && typeof objectable === 'object' && !Array.isArray(objectable)
}

/**
 * object.keys
 *
 * @param obj
 */
export function keys<T extends {}>(obj: T) {
  return Object.keys(obj) as (keyof T)[]
}

/**
 * 获取对象的嵌套值
 *
 * @param obj
 * @param path
 * @param fallback
 */
export function getNestedValue(obj: any, path: (string | number)[], fallback?: any): any {
  const last = path.length - 1
  if (last < 0) return obj === undefined ? fallback : obj
  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback
    }
    obj = obj[path[i]]
  }
  if (obj == null) return fallback
  return obj[path[last]] === undefined ? fallback : obj[path[last]]
}

/**
 * 设置对象的嵌套值
 *
 * @param obj
 * @param path
 * @param value
 */
export function setNestedValue(obj: any, path: (string | number)[], value: any) {
  const last = path.length - 1
  for (let i = 0; i < last; i++) {
    if (typeof obj[path[i]] !== 'object') obj[path[i]] = {}
    obj = obj[path[i]]
  }
  obj[path[last]] = value
}

/**
 * 过滤掉对象的某些 keys
 *
 * @param obj
 * @param keys
 */
export function filterObjectOnKeys<T, K extends keyof T>(obj: T, keys: K[]): { [N in K]: T[N] } {
  const filtered = {} as { [N in K]: T[N] }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key]
    }
  }

  return filtered
}

/**
 * 根据路径获取对象的嵌套值
 *
 * @param obj
 * @param path
 * @param fallback
 */
export function getObjectValueByPath(obj: any, path: string, fallback?: any): any {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback
  if (obj[path] !== undefined) return obj[path]
  path = path.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  path = path.replace(/^\./, '') // strip a leading dot
  return getNestedValue(obj, path.split('.'), fallback)
}

/**
 * 根据路径设置对象的嵌套值
 *
 * @param obj
 * @param path
 * @param value
 */
export function setObjectValueByPath(obj: any, path: string, value: any) {
  if (typeof obj !== 'object' || !path) return
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')
  return setNestedValue(obj, path.split('.'), value)
}

/**
 * 从项中获取某个属性
 *
 * @param item
 * @param property
 * @param fallback
 */
export function getPropertyFromItem(
  item: object,
  property: string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any),
  fallback?: any,
): any {
  if (property == null) return item === undefined ? fallback : item
  if (item !== Object(item)) return fallback === undefined ? item : fallback
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback)
  if (Array.isArray(property)) return getNestedValue(item, property, fallback)
  if (typeof property !== 'function') return fallback
  const value = property(item, fallback)
  return typeof value === 'undefined' ? fallback : value
}

/**
 * 深度合并 2 个对象并返回一个新对象
 *
 * @param source
 * @param target
 * @param out
 */
export function deepMerge(
  source: Record<string, any> = {},
  target: Record<string, any> = {},
  out: Record<string, any> = {},
) {
  for (const key in source) {
    out[key] = source[key]
  }

  for (const key in target) {
    const sourceProperty = source[key]
    const targetProperty = target[key]

    // Only continue deep merging if
    // both properties are objects
    if (
      isObject(sourceProperty)
      && isObject(targetProperty)
    ) {
      out[key] = deepMerge(sourceProperty, targetProperty)

      continue
    }

    out[key] = targetProperty
  }

  return out
}
