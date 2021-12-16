// Styles
import './styles/switch.scss'

// Utils
import { genericComponent } from '../../utils'

// Components
import {
  FormItem,
  makeFormItemProps,
  filterFormItemProps,
} from '../form-item/form-item'
import {
  SelectionControl,
  makeSelectionControlProps,
  filterSelectionControlProps
} from '../selection-control/selection-control'

// Types
export type Switch = InstanceType<typeof Switch>

export const Switch = genericComponent()({
  name: 'Switch',

  inheritAttrs: false,

  props: {
    ...makeFormItemProps(),
    ...makeSelectionControlProps({
      color: 'primary'
    } as const),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots, emit }) {
    return () => {
      const [formItemProps] = filterFormItemProps(props)
      const [selectionInputProps] = filterSelectionControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          class="ve-switch"
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            control: () => (
              <SelectionControl
                { ...selectionInputProps }
                label={ undefined }
                role="switch"
                type="checkbox"
                onUpdate:modelValue={ val => emit('update:modelValue', val) }
                v-slots={ {
                  default: ({ textColorClasses, textColorStyles }) => (
                    <div
                      class={ [
                        've-switch__track',
                        textColorClasses.value,
                      ] }
                      style={ [
                        textColorStyles.value,
                      ] }
                    >
                      <div class="ve-switch__thumb" />
                    </div>
                  )
                } }
              />
            )
          } }
        />
      )
    }
  }
})