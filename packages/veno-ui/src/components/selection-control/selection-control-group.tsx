// Styles
import './styles/selection-control-group.scss'

// Utils
import { defineComponent } from 'vue'
import { useRender } from '../../utils'

// Composables
import { makeSelectionControlGroupProps, useSelectionControlGroup } from '../../composables/selection-control-group'

// Types
import type { Ref } from 'vue'

export interface SelectionGroupContext {
  disabled: Ref<boolean>
  inline: Ref<boolean>
  name: Ref<string | undefined>
  modelValue: Ref<any>
  multiple: Ref<boolean>
  trueIcon: Ref<string | undefined>
  falseIcon: Ref<string | undefined>
  readonly: Ref<boolean>
  type: Ref<string | undefined>
}

export type SelectionControlGroup = InstanceType<typeof SelectionControlGroup>

export const SelectionControlGroup = defineComponent({
  name: 'VeSelectionControlGroup',

  inheritAttrs: false,

  props: makeSelectionControlGroupProps(),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots }) {
    const group = useSelectionControlGroup(props)

    useRender(() => {
      return (
        <div
          class="ve-selection-control-group"
          aria-labelled-by={ props.type === 'radio' ? group.id.value : undefined }
          role={ props.type === 'radio' ? 'radiogroup' : undefined }
        >
          { slots?.default?.() }
        </div>
      )
    })

    return {}
  },
})