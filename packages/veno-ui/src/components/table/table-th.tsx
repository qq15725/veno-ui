// Styles
import './styles/table-th.scss'

// Utils
import { defineComponent, pick } from '../../utils'

// Components
import { Button } from '../button'
import { Icon } from '../icon'

// Types
import type { PropType } from 'vue'

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
     * @zh 过滤器的图标
     */
    filterIcon: {
      type: String,
      default: '$filter',
    },

    /**
     * @zh 过滤器
     */
    filters: {
      type: Array,
      default: () => [],
    },

    /**
     * @zh 固定方式
     */
    fixed: [Boolean, String] as PropType<false | 'start' | 'end'>,

    /**
     * @zh 对齐方式
     */
    align: {
      type: String as PropType<boolean | 'start' | 'center' | 'end'>,
      default: 'start',
    },
  },

  setup(props, { slots }) {
    return () => {
      return (
        <th
          class={ [
            've-table-th',
            `text-${ props.align }`,
            {
              've-table-th--sortable': props.sortable,
              've-table-th--sorted': props.sortDesc !== undefined,
              've-table-th--fixed-start': props.fixed === 'start',
              've-table-th--fixed-end': props.fixed === 'end',
            },
          ] }
        >
          <div class="ve-table-th__wrapper">
            { slots.default?.() }

            { props.sortable && (
              <Icon
                class={ {
                  've-table-th__sorter': true,
                  've-table-th__sorter--desc': props.sortDesc === true,
                } }
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
        </th>
      )
    }
  },
})

export function filterTableThProps(attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(TableTh.props))
}

export type TableTh = InstanceType<typeof TableTh>
