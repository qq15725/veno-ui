// Utils
import { inject, provide, ref } from 'vue'

// Types
import type { InjectionKey, Ref } from 'vue'

export const ListKey: InjectionKey<{
  hasPrepend: Ref<boolean>
  updateHasPrepend: (value: boolean) => void
}> = Symbol.for('veno-ui:list')

export function provideList() {
  const parent = inject(ListKey, { hasPrepend: ref(false), updateHasPrepend: () => null })

  const data = {
    hasPrepend: ref(false),
    updateHasPrepend: (value: boolean) => {
      if (value) data.hasPrepend.value = value
    },
  }

  provide(ListKey, data)

  return parent
}

export function useList() {
  return inject(ListKey, null)
}
