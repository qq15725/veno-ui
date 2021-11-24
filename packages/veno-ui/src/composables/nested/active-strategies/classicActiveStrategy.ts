// Types
import type { ActiveStrategyFn } from '.'

/**
 * Class 激活策略。
 *
 * @param single
 */
export const classicActiveStrategy = (single?: boolean): ActiveStrategyFn => {
  return ({ id, value, active }) => {
    const newActive: Set<string> = single ? new Set() : active

    if (value) {
      newActive.add(id)
    } else {
      newActive.delete(id)
    }

    return newActive
  }
}
