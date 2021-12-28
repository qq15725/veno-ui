// Styles
import './styles/table.scss'

// Utils
import { ref, computed } from 'vue'
import { defineComponent, convertToUnit } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'

// Components
import { TableTd } from './table-td'
import { TableTh } from './table-th'

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
     * @zh 数据
     */
    items: {
      type: Array as PropType<Record<string, any>[]>,
      default: () => [],
    },

    ...makeMaterialProps({
      border: true,
    }),
  },

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props)
    const containerRef = ref<HTMLDivElement>()
    const containerScrollLeft = ref(0)

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

    return () => {
      const hasColgroup = props.headers.length > 0
      const hasThead = !props.hideHeader || !hasColgroup
      const hasTbody = props.items.length > 0

      return (
        <props.tag
          class={ [
            've-table',
            {
              've-table--fixed-header': props.fixedHeader,
            },
            scrollPositionClasses.value,
            materialClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
        >
          <div
            class="ve-table__body"
            ref={ containerRef }
            onScroll={ handleScroll }
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
                <tr>
                  { props.headers.map((header, colIndex) => (
                    <TableTh
                      { ...header }
                      row-index={ 0 }
                      col-index={ colIndex }
                      cols={ props.headers.length }
                    >
                      { header.text }

                      { slots[`header.${ header.value }`]?.() }
                    </TableTh>
                  )) }
                </tr>
                </thead>
              ) }

              { slots.header?.() }

              { hasTbody && (
                <tbody>
                { props.items.map((item, rowIndex) => (
                  <tr>
                    { props.headers.map((header, colIndex) => (
                      <TableTd
                        { ...header }
                        row-index={ rowIndex }
                        col-index={ colIndex }
                        cols={ props.headers.length }
                      >
                        { item[header.value] }

                        { slots[`item.${ header.value }`]?.() }
                      </TableTd>
                    )) }
                  </tr>
                )) }
                </tbody>
              ) }

              { slots.default?.() }
            </table>
          </div>
        </props.tag>
      )
    }
  }
})