// Utils
import { isRef, ref } from 'vue'

// Types
import type { Ref } from 'vue'

export type MaybeRef<T> = T | Ref<T>

export type ExtractMaybeRef<P> = P extends MaybeRef<infer T> ? T : P

/**
 * 包裹进 ref
 *
 * @param val
 */
export function wrapInRef<T>(val: T) {
  return (isRef(val) ? val : ref(val)) as Ref<ExtractMaybeRef<T>>
}
