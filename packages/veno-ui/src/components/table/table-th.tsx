// Styles
import './styles/table-th.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { TableCell } from './table-cell'
import { Button } from '../button'
import { Icon } from '../icon'

import type { PropType } from 'vue'

export const TableTh = defineComponent({
  name: 'VeTableTh',

  inheritAttrs: false,

  props: {
    sortable: Boolean,
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
    }
  },

  setup (props, { slots, attrs }) {
    return () => {
      return (
        <TableCell
          { ...attrs }
          tag="th"
          class={ [
            've-table-th',
            {
              've-table-th--sortable': props.sortable,
            }
          ] }
        >
          { {
            default: () => (
              <>
                { slots.default?.() }

                { props.sortable && (
                  <div class="ve-table-th__sortable">
                    <Icon
                      icon={ props.sortIcon }
                      color={ props.sortDesc === false ? props.sortActiveColor : undefined }
                    />

                    <Icon
                      icon={ props.sortIcon }
                      color={ props.sortDesc === true ? props.sortActiveColor : undefined }
                    />
                  </div>
                ) }
              </>
            ),
            append: props.filters.length === 0
              ? undefined
              : () => (
                <Button
                  class="ve-table-th__filter"
                  icon={ props.filterIcon }
                  onClick={ (e: MouseEvent) => {
                    e.stopPropagation()
                  } }
                />
              )
          } }
        </TableCell>
      )
    }
  }
})