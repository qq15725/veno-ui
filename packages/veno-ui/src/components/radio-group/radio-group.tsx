// Styles
import './styles/radio-group.scss'

// Utils
import { computed } from 'vue'
import { defineComponent, filterInputAttrs, getUid } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { SelectionGroupControl } from '../selection-group-control'
import {
  makeSelectionGroupControlProps,
  filterSelectionGroupControlProps
} from '../selection-group-control/selection-group-control'

export const RadioGroup = defineComponent({
  name: 'VeRadioGroup',

  inheritAttrs: false,

  props: {
    height: {
      type: [Number, String],
      default: 'auto',
    },
    ...makeFormControlProps(),
    ...makeSelectionGroupControlProps({
      type: 'radio',
      trueIcon: 'veno-ui:$radioOn',
      falseIcon: 'veno-ui:$radioOff',
    }),
  },

  setup (props, { attrs, slots }) {
    const uid = getUid()
    const id = computed(() => props.id || `ve-radio-group-${ uid }`)

    return () => {
      const [formControlAttrs, restAttrs] = filterInputAttrs(attrs)
      const [formControlProps] = filterFormControlProps(props)
      const [selectionGroupControlProps] = filterSelectionGroupControlProps(props)
      const { default: defaultSlot, ...restSlots } = slots

      return (
        <FormControl
          { ...formControlProps }
          class="ve-radio-group"
          { ...formControlAttrs }
        >
          { {
            ...restSlots,
            default: ({ isDisabled, isReadonly }) => (
              <SelectionGroupControl
                { ...selectionGroupControlProps }
                id={ id.value }
                disabled={ isDisabled.value }
                readonly={ isReadonly.value }
                { ...restAttrs }
              >
                { { default: defaultSlot } }
              </SelectionGroupControl>
            ),
          } }
        </FormControl>
      )
    }
  }
})
