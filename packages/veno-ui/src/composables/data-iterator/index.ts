// Utils
import { computed, reactive } from 'vue'
import { propsFactory, wrapInArray, deepEqual, sortItems, getCurrentInstance } from '../../utils'

// Composables
import { useProxiedModel } from '../proxied-model'

// Types
import type { PropType } from 'vue'

export type DataIteratorSortFunction = <T extends any, K extends keyof T>(
  items: T[],
  sortBy: string[],
  sortDesc: boolean[],
  locale: string,
  customSorters?: Record<K, (a: T[K], b: T[K]) => number>
) => T[]

interface DataIteratorProps
{
  remote: boolean
  items: Record<string, any>[]
  mustSort: boolean
  multiSort: boolean
  sortBy: string | string[]
  sortDesc: boolean | boolean[]
  customSort: DataIteratorSortFunction
  locale: string
  pagination?: PaginationProps
  'onUpdate:pagination': ((val: PaginationProps) => void) | undefined
  'onUpdate:sortBy': ((val: string | string[]) => void) | undefined
  'onUpdate:sortDesc': ((val: boolean | boolean[]) => void) | undefined
}

export type PaginationProps = Partial<typeof defaultPagination>

const defaultPagination = {
  page: 1,
  perPage: 10,
  perPageOptions: [10, 20, 50, 100],
  total: 0,
  totalVisible: 7,
  showQuickJumper: false,
  showPerPageSelect: false,
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
  pagination: {
    type: Object as PropType<PaginationProps>,
    defualt: () => ({ ...defaultPagination })
  },
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
  const vm = getCurrentInstance('useDataIterator')
  const pagination = useProxiedModel(
    props, 'pagination', props.pagination,
    val => {
      const pagination = { ...defaultPagination, ...val }
      return reactive({
        ...pagination,
        page: parseInt(pagination.page, 10),
        perPage: parseInt(pagination.perPage, 10),
        total: props.remote
          ? Number(pagination.total ?? props.items.length)
          : props.items.length,
      })
    }
  )
  const sortBy = useProxiedModel(props, 'sortBy')
  const sortDesc = useProxiedModel(props, 'sortDesc')

  function updateOptions () {
    vm.emit('update:options', {
      pagination: pagination.value,
      sortBy: sortBy.value,
      sortDesc: sortDesc.value
    })
  }

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
      (pagination.value.page - 1) * pagination.value.perPage,
      Math.min(pagination.value.total, pagination.value.page * pagination.value.perPage)
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
      updateOptions()
    } else {
      const res = toggle(
        key,
        wrapInArray(sortBy.value),
        wrapInArray(sortDesc.value),
        pagination.value.page,
        props.mustSort,
        props.multiSort
      )
      sortBy.value = res.by
      sortDesc.value = res.desc
      pagination.value.page = res.page
      updateOptions()
    }
  }

  return {
    items,
    pagination,
    sortBy,
    sortDesc,
    sort,
    updateOptions
  }
}