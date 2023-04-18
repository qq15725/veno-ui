// Types
import type { SelectStrategy } from './selectStrategy'

export const independentSelectStrategy: SelectStrategy = {
  select: ({ id, value, selected }) => {
    selected.set(id, value ? 'on' : 'off')

    return selected
  },
  in: (v, children, parents) => {
    let map = new Map()

    for (const id of (v || [])) {
      map = independentSelectStrategy.select({
        id,
        value: true,
        selected: new Map(map),
        children,
        parents,
      })
    }

    return map
  },
  out: v => {
    const arr = []

    for (const [key, value] of v.entries()) {
      if (value === 'on') arr.push(key)
    }

    return arr
  },
}
