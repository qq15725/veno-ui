// Styles
import './styles/table-th.scss'

// Utils
import { defineComponent, pick } from '../../utils'

// Components
import { TableCell, makeTableCellProps, filterTableCellProps } from './table-cell'
import { Button } from '../button'
import { Icon } from '../icon'

// Types
import type { PropType } from 'vue'

export type TableTh = InstanceType<typeof TableTh>

export function filterTableThProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(TableTh.props))
}

export const TableTh = defineComponent({
  name: 'VeTableTh',

  props: {
    /**
     * @zh 可排序
     */
    sortable: Boolean,

    /**
     * @zh 倒序是否倒序
     */
    sortDesc: Boolean as PropType<boolean | undefined>,

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
     * @zh 过滤器的图标
     */
    filterIcon: {
      type: String,
      default: 'veno-ui:$filter',
    },

    /**
     * @zh 过滤器
     */
    filters: {
      type: Array,
      default: () => [],
    },

    ...makeTableCellProps(),
  },

  setup (props, { slots }) {
    return () => {
      const [tableCellProps] = filterTableCellProps(props)

      return (
        <TableCell
          { ...tableCellProps }
          tag="th"
          class={ {
            've-table-th': true,
            've-table-th--sortable': props.sortable,
            've-table-th--sorted': props.sortDesc !== undefined
          } }
        >
          <div class="ve-table-th__wrap">
            { slots.default?.() }

            { props.sortable && (
              <Icon
                class={ {
                  've-table-th__sorter': true,
                  've-table-th__sorter--desc': props.sortDesc === true
                } }
                size="1em"
                icon={ props.sortIcon }
                color={ props.sortDesc !== undefined ? props.sortActiveColor : undefined }
              />
            ) }
          </div>

          { props.filters.length > 0 && (
            <Button
              class="ve-table-th__filter"
              icon={ props.filterIcon }
              variant="text"
              onClick={ (e: Event) => {
                e.stopPropagation()
              } }
            />
          ) }
        </TableCell>
      )
    }
  }
})