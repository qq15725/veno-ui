/**
 * 包装进数组
 *
 * @param val
 */
export function wrapInArray<T>(val: T | T[] | null | undefined): T[] {
  return val == null ? [] : Array.isArray(val) ? val : [val]
}

/**
 * 返回B和A的集合差值，即B中而不是A中元素的集合
 *
 * @param a
 * @param b
 */
export function arrayDiff(a: any[], b: any[]): any[] {
  const diff: any[] = []
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) diff.push(b[i])
  }
  return diff
}

/**
 * 填充到数组
 *
 * @param length 数组长度
 * @param fillable 可填充的
 */
export function fillArray<T>(length: number, fillable: T) {
  return Array(length).fill(fillable)
}

/**
 * 创建一个由数字组成的数组
 *
 * @param length 数组长度
 * @param start 起始数字
 */
export function createRange(length: number, start = 0): number[] {
  return Array.from({ length }, (v, k) => start + k)
}
