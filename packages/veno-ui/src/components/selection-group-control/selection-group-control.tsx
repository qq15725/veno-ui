// Styles
import './styles/selection-group-control.scss'

// Utils
import { defineComponent } from 'vue'
import { pick, useRender } from '../../utils'

// Composables
import { makeSelectionGroupControlProps, useSelectionGroupControl } from '../../composables/selection-group-control'

export { makeSelectionGroupControlProps } from '../../composables/selection-group-control'

// Types
import type { ExtractPropTypes } from 'vue'

export type SelectionGroupControl = InstanceType<typeof SelectionGroupControl>

export function filterSelectionGroupControlProps (props: ExtractPropTypes<ReturnType<typeof makeSelectionGroupControlProps>>) {
  return pick(props, Object.keys(SelectionGroupControl.props) as any)
}

export const SelectionGroupControl = defineComponent({
  name: 'VeSelectionGroupControl',

  props: makeSelectionGroupControlProps(),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { attrs, slots }) {
    const group = useSelectionGroupControl(props)

    useRender(() => {
      return (
        <div
          class="ve-selection-group-control"
          aria-labelled-by={ props.type === 'radio' ? group.id.value : undefined }
          role={ props.type === 'radio' ? 'radiogroup' : undefined }
        >
          { slots.default?.() }
        </div>
      )
    })

    return group
  }
})