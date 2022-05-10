// Utils
import {
  computed,
  effectScope,
  onScopeDispose,
  ref,
  toRaw,
  watch
} from 'vue'
import { getCurrentInstance } from '../../utils'

// Types
import type { ComponentInternalInstance, EffectScope, Ref } from 'vue'

const stack = ref<ComponentInternalInstance[]>([])

export function useStack (isActive: Ref<boolean>) {
  const vm = getCurrentInstance('stack')

  let scope: EffectScope | undefined

  watch(isActive, val => {
    if (val) {
      scope = effectScope()
      scope.run(() => {
        stack.value.push(vm)

        onScopeDispose(() => {
          stack.value.splice(stack.value.indexOf(vm), 1)
        })
      })
    } else {
      scope?.stop()
    }
  }, { immediate: true })

  const isTop = computed(() => {
    return toRaw(stack.value[stack.value.length - 1]) === vm
  })

  return {
    isTop,
  }
}
