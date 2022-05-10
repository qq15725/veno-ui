// Utils
import { effectScope, onScopeDispose } from 'vue'

// Types
import type { EffectScope } from 'vue'

/**
 * 创建全局共享的组合式函数
 *
 * 不支持组合式函数存在参数，参数的响应式监听重新创建 scope 会导致使用时浪费过多心力。
 *
 * @param composable 组合式函数
 */
export function createSharedComposable<T> (composable: () => Exclude<T, undefined>) {
  let subscribers = 0
  let scope: EffectScope | undefined
  let state: T | undefined

  return () => {
    subscribers++
    if (state === undefined) {
      scope = effectScope(true)
      state = scope!.run(composable) as T
    }
    onScopeDispose(() => {
      if (scope && --subscribers <= 0) {
        scope?.stop()
        state = scope = undefined
      }
    })
    return state
  }
}