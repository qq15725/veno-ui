// Styles
import './styles/table.scss'

// Utils
import { ref, computed, watch } from 'vue'
import {
  defineComponent, convertToUnit, wrapInArray, getObjectValueByPath,
  useRender, downloadCSV
} from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeDataIteratorProps, useDataIterator } from '../../composables/data-iterator'

// Components
import { TableTd, filterTableTdProps } from './table-td'
import { TableTh, filterTableThProps } from './table-th'
import { TableNoData } from './table-no-data'
import { Progress } from '../progress'
import { Pagination } from '../pagination'

// Types
import type { PropType } from 'vue'

interface TableHeaderProp
{
  [name: string]: any

  value: string, // 字段
  text?: string, // 字段文本
  align?: 'start' | 'center' | 'end', // 对齐方式
  sortable?: boolean // 可排序
  fixed?: boolean | 'start' | 'end' // 可固定
  width?: string | number // 宽度
  minWidth?: string | number // 最小宽度
  maxWidth?: string | number // 最大宽度
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
      type: Array as PropType<TableHeaderProp[]>,
      default: () => []
    },

    /**
     * @zh 排序的图标
     */
    sortIcon: {
      type: String,
      default: 'veno-ui:$sort',
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

    ...makeDataIteratorProps(),
    ...makeMaterialProps({
      border: true,
    }),
  },

  emits: {
    'update:page': (val: number) => true,
    'update:sortBy': (val: string | string[]) => true,
    'update:sortDesc': (val: boolean | boolean[]) => true,
    'update:options': (val: Record<string, any>) => true,
  },

  setup (props, { slots, emit }) {
    const containerRef = ref<HTMLDivElement>()
    const containerScrollLeft = ref(0)

    const { materialClasses, materialStyles } = useMaterial(props, 've-table__wrapper')
    const { items, page, perPage, total, sortBy, sortDesc, sort } = useDataIterator(props)
    const arraySortBy = computed(() => wrapInArray(sortBy.value))
    const arraySortDesc = computed(() => wrapInArray(sortDesc.value))
    const scrollPositionClasses = computed(() => {
      if (containerRef.value && containerScrollLeft.value === 0) {
        return 've-table--scroll-position-start'
      } else if (
        containerRef.value
        && containerScrollLeft.value + containerRef.value.offsetWidth
        >= containerRef.value.scrollWidth
      ) {
        return 've-table--scroll-position-end'
      } else {
        return 've-table--scroll-position-center'
      }
    })

    // TODO
    watch([
      page,
      perPage,
      arraySortBy,
      arraySortDesc
    ], ([page, perPage, sortBy, sortDesc]) => {
      emit('update:options', {
        page,
        perPage,
        sortBy,
        sortDesc
      })
    })

    function handleScroll (e: Event) {
      const target = e.target as HTMLDivElement
      if (target.scrollLeft !== containerScrollLeft.value) {
        containerScrollLeft.value = target.scrollLeft
      }
    }

    function genColProps (header: TableHeaderProp) {
      const styles = {
        width: convertToUnit(header.width),
        minWidth: convertToUnit(header.minWidth ?? header.width),
        maxWidth: convertToUnit(header.maxWidth ?? header.width),
      }
      return {
        style: styles
      }
    }

    function getSortDesc (header: TableHeaderProp) {
      return arraySortDesc.value[arraySortBy.value.findIndex(v => v === header.value)]
    }

    useRender(() => {
      const hasColgroup = !slots.colgroup && props.headers.length > 0
      const hasThead = !slots.header && !props.hideHeader && props.headers.length > 0
      const hasTbody = !slots.default
      const hasPagination = hasTbody

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
            onScroll={ handleScroll }
            class={ [
              've-table__wrapper',
              materialClasses.value,
            ] }
            style={ [
              materialStyles.value
            ] }
          >
            <table>
              { hasColgroup && (
                <colgroup>
                  { props.headers.map((header) => (
                    <col { ...genColProps(header) } />
                  )) }
                </colgroup>
              ) }

              { slots.colgroup?.() }

              { hasThead && (
                <thead>

                { props.loading && (
                  <tr class="ve-table__progress">
                    <th
                      colspan={ props.headers.length }
                    >
                      <Progress
                        color="primary"
                        indeterminate
                        stroke-width={ 3 }
                      />
                    </th>
                  </tr>
                ) }

                <tr>
                  { props.headers.map((header, colIndex) => {
                    return (
                      <TableTh
                        { ...filterTableThProps(header)[0] }
                        row-index={ 0 }
                        col-index={ colIndex }
                        cols={ props.headers.length }
                        sort-icon={ props.sortIcon }
                        sort-active-color={ props.sortActiveColor }
                        sort-desc={ getSortDesc(header) }
                        onClick={ () => header.sortable && sort(header.value) }
                      >
                        {
                          slots[`header.${ header.value }`]?.({ header })
                          ?? header.text
                        }
                      </TableTh>
                    )
                  }) }
                </tr>
                </thead>
              ) }

              { slots.header?.() }

              { hasTbody && (
                <tbody>
                { items.value.map((item, rowIndex) => (
                  <tr key={ item[props.itemKey] ?? rowIndex }>
                    { props.headers.map((header, colIndex) => {
                      return (
                        <TableTd
                          { ...filterTableTdProps(header)[0] }
                          row-index={ rowIndex }
                          col-index={ colIndex }
                          cols={ props.headers.length }
                          sorted={ getSortDesc(header) !== undefined }
                        >
                          {
                            slots[`item.${ header.value }`]?.({ item })
                            ?? getObjectValueByPath(item, header.value)
                          }
                        </TableTd>
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
              v-model:page={ page.value }
              total-visible={ 7 }
              per-page={ perPage.value }
              last-page={ props.lastPage }
              total={ total.value }
            />
          ) }
        </props.tag>
      )
    })

    return {
      exportCSV: function (name: string) {
        downloadCSV(name, props.headers, items.value)
      }
    }
  }
})