// Utils
import { computed, watch } from 'vue'
import { getUid } from '../../utils'

// Composables
import { ROOT_ZINDEX, useLayout } from './layout'

// Types
import type { Ref } from 'vue'

const OFFSET_ZINDEX = 400

export function useOverlay(isActive: Ref<boolean | undefined>) {
  const layout = useLayout()

  const id = getUid()

  watch(isActive, value => {
    if (value) {
      layout.overlays.value.push(id)
    } else {
      layout.overlays.value = layout.overlays.value.filter(x => x !== id)
    }
  }, {
    immediate: true,
  })

  const overlayZIndex = computed(() => ROOT_ZINDEX + OFFSET_ZINDEX + layout.overlays.value.indexOf(id) + 1)

  return {
    overlayZIndex,
    layoutRect: layout.layoutRect,
  }
}
