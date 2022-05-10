// Types
import type { OpenStrategyFn } from '.'

/**
 * 单个嵌套子节点的打开策略。
 *
 * @param id
 * @param value
 * @param opened
 * @param parents
 */
export const singleOpenStrategy: OpenStrategyFn = ({ id, value, opened, parents }) => {
  if (value) {
    const newOpened = new Set<string>()
    newOpened.add(id)

    let parent = parents.get(id)

    while (parent != null) {
      newOpened.add(parent)
      parent = parents.get(parent)
    }

    return newOpened
  } else {
    opened.delete(id)
    return opened
  }
}