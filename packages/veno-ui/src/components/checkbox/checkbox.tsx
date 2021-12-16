// Styles
import './styles/checkbox.scss'

// Utils
import { genericComponent } from '../../utils'

import {
  FormItem,
  filterFormItemProps,
  makeFormItemProps
} from '../form-item/form-item'

import {
  SelectionControl,
  filterSelectionControlProps,
  makeSelectionControlProps
} from '../selection-control/selection-control'

export const Checkbox = genericComponent()({
  name: 'VeCheckbox',

  props: {
    ...makeFormItemProps(),
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
      const [formItemProps] = filterFormItemProps(props)
      const [{ label, ...selectionInputProps }] = filterSelectionControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          class="ve-checkbox"
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            control: ({ isDisabled, isReadonly }) => (
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
            ),
          } }
        />
      )
    }
  }
})