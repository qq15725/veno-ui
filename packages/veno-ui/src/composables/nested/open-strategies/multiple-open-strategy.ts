import { OpenStrategyFn } from './open-strategy'

/**
 * 多个嵌套子节点的打开策略。
 *
 * @param id
 * @param value
 * @param opened
 * @param parents
 */
export const multipleOpenStrategy: OpenStrategyFn = ({ id, value, opened, parents }) => {
  if (value) {
    let parent = parents.get(id)
    opened.add(id)

    while (parent != null) {
      opened.add(parent)
      parent = parents.get(parent)
    }

    return opened
  } else {
    opened.delete(id)
  }
  return opened
}