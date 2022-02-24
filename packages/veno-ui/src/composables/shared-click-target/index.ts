// Utils
import { ref, onScopeDispose } from 'vue'
import { createSharedComposable } from '../../utils'

export const useSharedClickTarget = createSharedComposable(() => {
  const clickTargetEl = ref<HTMLElement>()
  const clickPosition = ref<{ x: number, y: number }>()

  const onClick = (e: MouseEvent) => {
    clickTargetEl.value = e.target as HTMLElement | undefined
    clickPosition.value = { x: e.clientX, y: e.clientY }
  }

  window.addEventListener('click', onClick)

  onScopeDispose(() => {
    window.removeEventListener('click', onClick)
  })

  return {
    clickTargetEl,
    clickPosition,
  }
})