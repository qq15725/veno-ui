// Utils
import { ref, unref, onScopeDispose } from 'vue'
import { createSharedComposable } from '../../utils'

export const useSharedClickTarget = createSharedComposable(() => {
  const clickTargetEL = ref<HTMLElement>()

  const onClick = (e: MouseEvent) => {
    if (e.target) {
      clickTargetEL.value = e.target as HTMLElement
    } else {
      clickTargetEL.value = undefined
    }
  }

  window.addEventListener('click', onClick)

  onScopeDispose(() => {
    window.removeEventListener('click', onClick)
  })

  const getClickTarget = () => unref(clickTargetEL)

  const createSaveableClickTarget = () => {
    let target: HTMLElement | undefined
    return () => target ?? (target = getClickTarget())
  }

  return {
    getClickTarget,
    createSaveableClickTarget,
  }
})