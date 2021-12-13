// Styles
import './styles/switch.scss'

// Utils
import { genericComponent } from '../../utils'

// Components
import {
  FormItem,
  makeFormItemProps,
  filterFormItemProps,
} from '../form/form-item'
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

  emit: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots, emit }) {
    function onChange (val: any) {
      emit('update:modelValue', val)
    }

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
                onUpdate:modelValue={ onChange }
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