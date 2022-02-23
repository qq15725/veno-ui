// Utils
import { ref, onScopeDispose } from 'vue'
import { createSharedComposable } from '../../utils'

export const useSharedClickTarget = createSharedComposable(() => {
  const clickTargetEl = ref<HTMLElement>()

  const onClick = (e: MouseEvent) => {
    clickTargetEl.value = e.target as HTMLElement | undefined
  }

  window.addEventListener('click', onClick)

  onScopeDispose(() => {
    window.removeEventListener('click', onClick)
  })

  return {
    clickTargetEl,
  }
})