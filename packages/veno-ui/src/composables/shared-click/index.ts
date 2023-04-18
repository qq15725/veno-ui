// Utils
import { onScopeDispose, readonly, ref } from 'vue'
import { createSharedComposable } from '@veno-ui/utils'

// Types
import type { DeepReadonly, Ref } from 'vue'

interface SharedClickState {
  clickedEl: Ref<HTMLElement | undefined>
  clickedPosition: DeepReadonly<Ref<{ left: number; top: number } | undefined>>
}

export const useSharedClick = createSharedComposable<SharedClickState>(() => {
  const clickedEl = ref<HTMLElement>()
  const clickedPosition = ref<{ left: number; top: number }>()

  const onClick = (e: MouseEvent) => {
    clickedEl.value = e.target as HTMLElement | undefined
    clickedPosition.value = { left: e.clientX, top: e.clientY }
  }

  document.addEventListener('click', onClick)

  onScopeDispose(() => {
    document.removeEventListener('click', onClick)
  })

  return {
    clickedEl,
    clickedPosition: readonly(clickedPosition),
  }
})
