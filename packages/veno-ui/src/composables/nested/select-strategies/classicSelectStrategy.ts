// Types
import type { SelectStrategy } from '.'

/**
 * Class 选择策略。
 */
export const classicSelectStrategy: SelectStrategy = {
  select: ({ id, value, selected, children, parents }) => {
    const items = [id]

    while (items.length) {
      const item = items.shift()!

      selected.set(item, value ? 'on' : 'off')

      if (children.has(item)) {
        items.push(...children.get(item)!)
      }
    }

    let parent = parents.get(id)

    while (parent) {
      const childrenIds = children.get(parent)!
      const everySelected = childrenIds.every(cid => selected.get(cid) === 'on')
      const noneSelected = childrenIds.every(cid => !selected.has(cid) || selected.get(cid) === 'off')

      selected.set(parent, everySelected ? 'on' : noneSelected ? 'off' : 'indeterminate')

      parent = parents.get(parent)
    }

    return selected
  },
  in: (v, children, parents) => {
    let map = new Map()

    for (const id of (v || [])) {
      map = classicSelectStrategy.select({
        id,
        value: true,
        selected: new Map(map),
        children,
        parents,
      })
    }

    return map
  },
  out: (v, children) => {
    const arr = []

    for (const [key, value] of v.entries()) {
      if (value === 'on' && !children.has(key)) arr.push(key)
    }

    return arr
  },
}
