// Utils
import { effectScope, onScopeDispose } from 'vue'

// Types
import type { EffectScope } from 'vue'

/**
 * 创建全局共享的组合
 *
 * 不支持组合存在参数，参数的响应式监听重新创建 scope 会导致使用时浪费过多心力。
 *
 * @param fn
 */
export function createSharedComposable<T> (fn: () => T) {
  let subscribers = 0
  let scope: EffectScope | undefined
  let state: T

  return () => {
    onScopeDispose(() => {
      if (--subscribers <= 0) {
        subscribers = 0
        scope?.stop()
      }
    })

    if (subscribers <= 0) {
      scope = effectScope(true)
      state = scope!.run(fn) as T
    }

    subscribers++

    return state
  }
}