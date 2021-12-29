// Utils
import { computed } from 'vue'
import { propsFactory, wrapInArray, sortItems } from '../../utils'

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
  items: Record<string, any>[]
  page: number
  perPage: number
  sortBy: string | string[]
  sortDesc: boolean | boolean[]
  customSort: DataIteratorSortFunction
  locale: string
}

export const makeDataIteratorProps = propsFactory({
  items: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
  page: {
    type: Number,
    default: 1,
  },
  perPage: {
    type: Number,
    default: 10,
  },
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
}, 'data-iterator')

export function useDataIterator (props: DataIteratorProps) {
  const sortBy = useProxiedModel(props, 'sortBy')
  const sortDesc = useProxiedModel(props, 'sortDesc')
  const items = computed(() => {
    return props.customSort(
      props.items,
      wrapInArray(sortBy.value),
      wrapInArray(sortDesc.value),
      props.locale
    )
  })
  const pagination = computed(() => {
    return {
      page: props.page,
      perPage: props.perPage,
      from: (props.page - 1) * props.perPage,
      to: Math.min(props.items.length, props.page * props.perPage),
      lastPage: Math.ceil(props.items.length / props.perPage),
      total: props.items.length,
    }
  })

  return {
    sortBy,
    sortDesc,
    items,
    pagination,
  }
}