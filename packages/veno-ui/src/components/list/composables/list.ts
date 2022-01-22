// Utils
import { ref, provide, inject } from 'vue'

// Types
import type { InjectionKey, Ref } from 'vue'

export const ListKey: InjectionKey<{
  hasPrepend: Ref<boolean>
  updateHasPrepend: (value: boolean) => void
}> = Symbol.for('veno-ui:list')

export function provideList () {
  const provider = {
    hasPrepend: ref(false),
    updateHasPrepend: (value: boolean) => {
      if (value) provider.hasPrepend.value = value
    }
  }

  provide(ListKey, provider)

  return provider
}

export function useList () {
  return inject(ListKey, null)
}