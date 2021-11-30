// Utils
import { ref, provide, inject } from 'vue'

// Types
import type { InjectionKey, Ref } from 'vue'

export const ListKey: InjectionKey<{
  hasPrepend: Ref<boolean>
  updateHasPrepend: (value: boolean) => void
}> = Symbol.for('veno-ui:list')

export const createList = () => {
  const data = {
    hasPrepend: ref(false),
    updateHasPrepend: (value: boolean) => {
      if (value) data.hasPrepend.value = value
    },
  }

  provide(ListKey, data)

  return data
}

export const useList = () => {
  return inject(ListKey, null)
}