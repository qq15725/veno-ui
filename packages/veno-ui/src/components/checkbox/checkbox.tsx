// Styles
import './styles/checkbox.scss'

// Utils
import { genericComponent } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { SelectionControl } from '../selection-control'
import { makeSelectionControlProps, filterSelectionControlProps } from '../selection-control/selection-control'

export const Checkbox = genericComponent()({
  name: 'VeCheckbox',

  props: {
    ...makeFormControlProps(),
    ...makeSelectionControlProps({
      falseIcon: 'veno-ui:$checkboxOff',
      trueIcon: 'veno-ui:$checkboxOn',
      color: 'primary',
    }),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots, emit }) {
    return () => {
      const [formItemProps] = filterFormControlProps(props)
      const [{ label, ...selectionInputProps }] = filterSelectionControlProps(props)

      return (
        <FormControl
          { ...formItemProps }
          class="ve-checkbox"
          v-slots={ {
            prepend: slots.prepend,
            label: slots.label,
            default: ({ isDisabled, isReadonly }) => {
              return (
                <SelectionControl
                  { ...selectionInputProps }
                  trueIcon={ props.trueIcon }
                  falseIcon={ props.falseIcon }
                  type="checkbox"
                  onUpdate:modelValue={ val => emit('update:modelValue', val) }
                  disabled={ isDisabled.value }
                  readonly={ isReadonly.value }
                  v-slots={ {
                    label: slots.default,
                  } }
                />
              )
            },
            append: slots.append,
            details: slots.details,
          } }
        />
      )
    }
  }
})