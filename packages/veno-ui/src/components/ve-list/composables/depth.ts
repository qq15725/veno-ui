// Utils
import { provide, inject, ref, computed } from 'vue'

// Types
import type { Ref, InjectionKey } from 'vue'

export const DepthKey: InjectionKey<Ref<number>> = Symbol.for('veno-ui:depth')

export const useDepth = (hasPrepend?: Ref<boolean>) => {
  const parent = inject(DepthKey, ref(-1))

  const depth = computed(() => parent.value + 1 + (hasPrepend?.value ? 1 : 0))

  provide(DepthKey, depth)

  return depth
}