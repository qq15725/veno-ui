// Utils
import { computed } from 'vue'
import { propsFactory, wrapInArray, deepEqual, sortItems } from '../../utils'

// Composables
import { useProxiedModel } from '../proxied-model'
import { makePaginationProps } from '../pagination'

// Types
import type { PropType } from 'vue'
import type { PaginationProps } from '../pagination'

export type DataIteratorSortFunction = <T extends any, K extends keyof T>(
  items: T[],
  sortBy: string[],
  sortDesc: boolean[],
  locale: string,
  customSorters?: Record<K, (a: T[K], b: T[K]) => number>
) => T[]

interface DataIteratorProps extends PaginationProps
{
  remote: boolean
  items: Record<string, any>[]
  mustSort: boolean
  multiSort: boolean
  sortBy: string | string[]
  sortDesc: boolean | boolean[]
  customSort: DataIteratorSortFunction
  locale: string
}

export const makeDataIteratorProps = propsFactory({
  remote: Boolean,
  items: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
  mustSort: Boolean,
  multiSort: Boolean,
  sortBy: {
    type: [String, Array] as PropType<string | string[]>,
    default: () => [],
  },
  sortDesc: {
    type: [Boolean, Array] as PropType<boolean | boolean[]>,
    default: () => [],
  },
  customSort: {
    type: Function as PropType<DataIteratorSortFunction>,
    default: sortItems,
  },
  locale: {
    type: String,
    default: 'en-US',
  },
  ...makePaginationProps(),
}, 'data-iterator')


function toggle (
  key: string,
  oldBy: string[], oldDesc: boolean[],
  page: number,
  mustSort: boolean, multiSort: boolean
) {
  let by = oldBy.slice()
  let desc = oldDesc.slice()
  const byIndex = by.findIndex((k: string) => k === key)

  if (byIndex < 0) {
    if (!multiSort) {
      by = []
      desc = []
    }

    by.push(key)
    desc.push(false)
  } else if (byIndex >= 0 && !desc[byIndex]) {
    desc[byIndex] = true
  } else if (!mustSort) {
    by.splice(byIndex, 1)
    desc.splice(byIndex, 1)
  } else {
    desc[byIndex] = false
  }

  // Reset page to 1 if sortBy or sortDesc have changed
  if (!deepEqual(by, oldBy) || !deepEqual(desc, oldDesc)) {
    page = 1
  }

  return { by, desc, page }
}

export function useDataIterator (props: DataIteratorProps) {
  const page = useProxiedModel(props, 'page',  props.page,v => Number(v))
  const perPage = useProxiedModel(props, 'perPage',props.perPage, v => Number(v))
  const total = useProxiedModel(props, 'total', props.total, v => v === undefined ? props.items.length : Number(v))
  const mustSort = useProxiedModel(props, 'mustSort')
  const multiSort = useProxiedModel(props, 'multiSort')
  const sortBy = useProxiedModel(props, 'sortBy')
  const sortDesc = useProxiedModel(props, 'sortDesc')

  function sortItems (items: any[]): any[] {
    return props.customSort(
      items,
      wrapInArray(sortBy.value),
      wrapInArray(sortDesc.value),
      props.locale
    )
  }

  function paginateItems (items: any[]): any[] {
    return items.slice(
      (page.value - 1) * perPage.value,
      Math.min(total.value, page.value * perPage.value)
    )
  }

  const items = computed(() => {
    if (props.remote) return props.items
    let items = props.items.slice()
    items = sortItems(items)
    items = paginateItems(items)
    return items
  })

  function sort (key: string | string[]) {
    if (Array.isArray(key)) {
      sortDesc.value = key.map(s => {
        const i = wrapInArray(sortBy.value).findIndex((k: string) => k === s)
        return i > -1 ? wrapInArray(sortDesc.value)[i] : false
      })
      sortBy.value = key
    } else {
      const res = toggle(
        key,
        wrapInArray(sortBy.value),
        wrapInArray(sortDesc.value),
        page.value,
        mustSort.value,
        multiSort.value
      )
      sortBy.value = res.by
      sortDesc.value = res.desc
      page.value = res.page
    }
  }

  return {
    items,
    page,
    perPage,
    total,
    sortBy,
    sortDesc,
    sort,
  }
}