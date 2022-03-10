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
export function createSharedComposable<T> (composable: () => T) {
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
      state = scope!.run(composable) as T
    }

    subscribers++

    return state
  }
}