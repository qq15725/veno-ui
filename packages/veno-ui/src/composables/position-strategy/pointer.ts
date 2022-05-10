// Utils
import { onScopeDispose } from 'vue'
import { convertToUnit } from '../../utils'

// Types
import type { PositionStrategyData, PositionStrategyProps } from './index'
import type { Ref } from 'vue'

export function pointerPositionStrategy(
  data: PositionStrategyData,
  props: PositionStrategyProps,
  contentStyles: Ref<Record<string, string>>,
  anchorClasses: Ref<string[]>,
) {
  const updatePosition = (e: MouseEvent) => {
    const box = { left: e.clientX, top: e.clientY }

    Object.assign(contentStyles.value, {
      position: 'fixed',
      left: convertToUnit(box.left + +(props.offset ?? 0)),
      top: convertToUnit(box.top + +(props.offset ?? 0)),
    })
  }

  document.addEventListener('mousemove', updatePosition)

  onScopeDispose(() => {
    document.removeEventListener('mousemove', updatePosition)
  })

  return {
    updatePosition: undefined,
  }
}
