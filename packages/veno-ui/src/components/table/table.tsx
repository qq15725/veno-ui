// Styles
import './styles/table.scss'

// Utils
import { computed, ref } from 'vue'
import {
  convertToUnit,
  defineComponent,
  downloadCSV,
  getObjectValueByPath,
  throttle,
  useRender,
  wrapInArray,
} from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeScrollbar, useScrollbar } from '../../composables/scrollbar'
import { makeDataIteratorProps, useDataIterator } from '../../composables/data-iterator'

// Components
import { Progress } from '../progress'
import { Pagination } from '../pagination'
import { Checkbox } from '../checkbox'
import { useProxiedModel } from '../../composables/proxied-model'
import { TableTh, filterTableThProps } from './table-th'
import { TableNoData } from './table-no-data'

// Types
import type { PropType } from 'vue'
import type { PaginationProps } from '../../composables/data-iterator'

interface TableHeaderProps {
  $type?: 'selection'
  value: string // 字段
  text?: string // 字段文本
  align?: 'start' | 'center' | 'end' // 对齐方式
  sortable?: boolean // 可排序
  fixed?: boolean | 'start' | 'end' // 可固定
  width?: string | number // 宽度
  minWidth?: string | number // 最小宽度
  maxWidth?: string | number // 最大宽度
  [key: string]: any
}

interface InternalTableHeaderProps extends TableHeaderProps {
  fixed?: false | 'start' | 'end'
}

export const Table = defineComponent({
  name: 'VeTable',

  props: {
    /**
     * @zh 隐藏边框
     */
    hideBorder: Boolean,

    /**
     * @zh 隐藏表头
     */
    hideHeader: Boolean,

    /**
     * @zh 固定表头
     */
    fixedHeader: Boolean,

    /**
     * @zh 表头
     */
    headers: {
      type: Array as PropType<TableHeaderProps[]>,
      default: () => [],
    },

    /**
     * @zh 已选择的
     */
    selected: {
      type: Array as PropType<Record<string, any>[]>,
      default: () => [],
    },

    /**
     * @zh 排序的图标
     */
    sortIcon: {
      type: String,
      default: '$sort',
    },

    /**
     * @zh 排序激活时的颜色
     */
    sortActiveColor: {
      type: String,
      default: 'primary',
    },

    /**
     * @zh 加载中
     */
    loading: Boolean,

    /**
     * @zh 唯一键
     */
    itemKey: {
      type: String,
      default: 'id',
    },

    /**
     * @zh 隐藏分页
     */
    hidePagination: Boolean,

    ...makeDataIteratorProps(),
    ...makePaperProps({
      border: true,
      shape: 'rounded-sm',
    } as const),
    ...makeScrollbar(),
  },

  emits: {
    'update:pagination': (_: PaginationProps) => true,
    'update:sortBy': (_: string | string[]) => true,
    'update:sortDesc': (_: boolean | boolean[]) => true,
    'update:options': (_: Record<string, any>) => true,
    'update:selected': (_: Record<string, any>[]) => true,
  },

  setup(props, { slots }) {
    const containerRef = ref<HTMLDivElement>()
    const scrollLeft = ref(0)
    const selected = useProxiedModel(props, 'selected')
    const isAllSelected = computed(() => {
      return selected.value.map(v => v[props.itemKey]).sort().join('')
        === props.items.map(v => v[props.itemKey]).sort().join('')
    })

    const { paperClasses, paperStyles } = usePaper(props, 've-table__table')
    const { scrollbarClasses } = useScrollbar(props)
    const {
      items,
      pagination,
      sortBy: rawSortBy,
      sortDesc: rawSortDesc,
      sort,
      updateOptions,
    } = useDataIterator(props)
    const headers = computed<InternalTableHeaderProps[]>(() => {
      const length = props.headers.length
      return props.headers.map((header, index) => {
        return {
          ...header,
          fixed: header.fixed === true
            ? index < (length - 1) / 2 ? 'start' : 'end'
            : header.fixed,
        }
      })
    })
    const sortBy = computed(() => wrapInArray(rawSortBy.value))
    const sortDesc = computed(() => wrapInArray(rawSortDesc.value))
    const scrollPositionClasses = computed(() => {
      if (containerRef.value && scrollLeft.value === 0) {
        return 've-table--scroll-position-start'
      } else if (
        containerRef.value
        && scrollLeft.value + containerRef.value.offsetWidth
        >= containerRef.value.scrollWidth
      ) {
        return 've-table--scroll-position-end'
      } else {
        return 've-table--scroll-position-center'
      }
    })

    function handleScroll({ target }: Event) {
      scrollLeft.value = (target as HTMLElement).scrollLeft
    }

    function genColProps(header: InternalTableHeaderProps) {
      const styles = {
        width: convertToUnit(header.width),
        minWidth: convertToUnit(header.minWidth ?? header.width),
        maxWidth: convertToUnit(header.maxWidth ?? header.width),
      }
      return {
        style: styles,
      }
    }

    function isSortDesc(header: InternalTableHeaderProps) {
      return sortDesc.value[sortBy.value.findIndex(v => v === header.value)]
    }

    useRender(() => {
      const hasColgroup = !slots.colgroup && props.headers.length > 0
      const hasThead = !slots.header && !props.hideHeader && props.headers.length > 0
      const hasTbody = !slots.default
      const hasPagination = hasTbody && !props.hidePagination

      return (
        <props.tag
          class={ [
            've-table',
            {
              've-table--fixed-header': props.fixedHeader,
            },
            scrollPositionClasses.value,
          ] }
        >
          <div
            ref={ containerRef }
            onScroll={ throttle(handleScroll, 128) }
            class={ [
              've-table__table',
              paperClasses.value,
              scrollbarClasses.value,
            ] }
            style={ paperStyles.value }
          >
            <table>
              { hasColgroup && (
                <colgroup>
                  { headers.value.map(header => {
                    return (
                      <col { ...genColProps(header) } />
                    )
                  }) }
                </colgroup>
              ) }

              { slots.colgroup?.() }

              { hasThead && (
                <thead>

                { props.loading && (
                  <tr class="ve-table__progress">
                    <th colspan={ props.headers.length }>
                      <Progress
                        color="primary"
                        indeterminate
                        stroke-width={ 3 }
                      />
                    </th>
                  </tr>
                ) }

                <tr>
                  { headers.value.map((header, index) => {
                    return (
                      <TableTh
                        { ...filterTableThProps(header)[0] }
                        sort-icon={ props.sortIcon }
                        sort-active-color={ props.sortActiveColor }
                        sort-desc={ isSortDesc(header) }
                        onClick={ () => header.sortable && sort(header.value) }
                      >
                        { header.$type === 'selection'
                          ? (
                          <Checkbox
                            indeterminate={ selected.value.length > 0 && !isAllSelected.value }
                            onUpdate:indeterminate={ val => {
                              if (!val) {
                                selected.value = props.items
                              }
                            } }
                            modelValue={ isAllSelected.value }
                            onUpdate:modelValue={ val => {
                              if (val) {
                                selected.value = props.items
                              } else {
                                selected.value = []
                              }
                            } }
                          />
                            )
                          : (
                              slots[`header.${ header.value }`]?.({ header, index })
                          ?? header.text
                          ?? header.value
                            ) }
                      </TableTh>
                    )
                  }) }
                </tr>
                </thead>
              ) }

              { slots.header?.() }

              { hasTbody && (
                <tbody>
                { items.value.map((item, index) => (
                  <tr key={ item[props.itemKey] ?? index }>
                    { headers.value.map(header => {
                      return (
                        <td
                          class={ [
                            've-table-td',
                            {
                              've-table-td--sorted': isSortDesc(header) !== undefined,
                              've-table-td--fixed-start': header.fixed === 'start',
                              've-table-td--fixed-end': header.fixed === 'end',
                            },
                          ] }
                        >
                          { header.$type === 'selection'
                            ? (
                            <Checkbox
                              modelValue={
                                selected.value.findIndex((v: any) => v[props.itemKey] === item[props.itemKey]) > -1
                              }
                              onUpdate:modelValue={ val => {
                                if (val) {
                                  selected.value.push(item)
                                } else {
                                  selected.value = selected.value.filter((v: any) => v[props.itemKey] !== item[props.itemKey])
                                }
                              } }
                            />
                              )
                            : (
                                slots[`item.${ header.value }`]?.({ item, index })
                            ?? getObjectValueByPath(item, header.value)
                              ) }
                        </td>
                      )
                    }) }
                  </tr>
                )) }

                { !items.value.length && (
                  <tr>
                    <td colspan={ props.headers.length }>
                      { slots.nodata?.() ?? <TableNoData /> }
                    </td>
                  </tr>
                ) }
                </tbody>
              ) }

              { slots.default?.() }
            </table>
          </div>

          { hasPagination && (
            <Pagination
              class="ve-table__pagination"
              { ...pagination.value }
              modelValue={ pagination.value.page }
              onUpdate:modelValue={ v => {
                pagination.value.page = v
                updateOptions()
              } }
              onUpdate:perPage={ v => {
                pagination.value.perPage = v
                updateOptions()
              } }
            />
          ) }
        </props.tag>
      )
    })

    return {
      exportCSV(name: string) {
        downloadCSV(name, props.headers, items.value)
      },
    }
  },
})
