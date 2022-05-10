// Utils
import { independentSelectStrategy } from '.'

// Types
import type { SelectStrategy } from '.'

export const leafSelectStrategy = (single = false): SelectStrategy => {
  const strategy: SelectStrategy = {
    select: ({ id, value, selected, children }) => {
      if (children.has(id)) return selected

      if (single) return new Map([[id, value ? 'on' : 'off']])

      selected.set(id, value ? 'on' : 'off')

      return selected
    },
    in: (v, children, parents) => {
      let map = new Map()

      for (const id of (v ?? [])) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents,
        })
      }

      return map
    },
    out: independentSelectStrategy.out,
  }

  return strategy
}
