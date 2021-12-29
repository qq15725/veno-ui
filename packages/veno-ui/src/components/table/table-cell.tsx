// Styles
import './styles/table-cell.scss'

// Utils
import { computed } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

// Types
import type { PropType } from 'vue'

export const TableCell = defineComponent({
  name: 'VeTableCell',

  props: {
    rowIndex: Number,
    colIndex: Number,
    cols: Number,
    fixed: [Boolean, String] as PropType<boolean | 'start' | 'end'>,
    align: {
      type: String as PropType<boolean | 'start' | 'center' | 'end'>,
      default: 'start'
    },
    ...makeTagProps({
      tag: 'td'
    }),
  },

  setup (props, { slots }) {
    const fixed = computed<false | 'start' | 'end'>(() => {
      return typeof props.fixed === 'string'
        ? props.fixed
        : props.fixed && props.colIndex !== undefined && props.cols !== undefined
          ? props.colIndex < (props.cols - 1) / 2 ? 'start' : 'end'
          : false
    })

    return () => {
      return (
        <props.tag
          class={ [
            've-table-cell',
            `text-${ props.align }`,
            {
              've-table-cell--fixed': !!fixed.value,
              've-table-cell--fixed-start': fixed.value === 'start',
              've-table-cell--fixed-end': fixed.value === 'end',
            }
          ] }
          style={ {
            left: fixed.value === 'start' ? 0 : undefined,
            right: fixed.value === 'end' ? 0 : undefined,
          } }
        >
          <div class="ve-table-cell__overlay" />

          <div class="ve-table-cell__wrap">
            <div class="ve-table-cell__text">
              { slots.default?.() }
            </div>

            { slots.append && (
              <div class="ve-table-cell__append">
                { slots.append?.() }
              </div>
            ) }
          </div>
        </props.tag>
      )
    }
  }
})