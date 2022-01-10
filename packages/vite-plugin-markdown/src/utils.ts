export function wrapInArray<T> (v: T | T[] | null | undefined): T[] {
  return v == null
    ? []
    : Array.isArray(v)
      ? v : [v]
}