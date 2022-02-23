// Utils
import { effectScope, onScopeDispose } from 'vue'

// Types
import type { EffectScope } from 'vue'

/**
 * 创建全局共享的组合
 *
 * 不支持组合存在参数，参数的响应式监听重新创建 scope 会导致使用时浪费过多心力。
 *
 * @param composable
 */
export function createSharedComposable<T extends () => Exclude<any, undefined>> (
  composable: T
) {
  let subscribers = 0
  let scope: EffectScope | undefined
  let state: ReturnType<T> | undefined

  return (() => {
    subscribers++
    if (state === undefined) {
      scope = effectScope()
      state = scope.run(composable)
    }
    onScopeDispose(() => {
      if (--subscribers <= 0) {
        scope?.stop()
        state = undefined
      }
    })
    return state
  }) as T
}