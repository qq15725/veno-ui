// Styles
import './styles/switch.scss'

// Utils
import { ref } from 'vue'
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
  name: 'VeSwitch',

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
    const control = ref<SelectionControl>()

    function onClick () {
      control.value?.inputRef?.click()
    }

    return () => {
      const [formItemProps] = filterFormItemProps(props)
      const [{ label, ...selectionInputProps }] = filterSelectionControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          class="ve-switch"
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            control: ({ isDisabled, isReadonly }) => (
              <SelectionControl
                { ...selectionInputProps }
                ref={ control }
                type="checkbox"
                onUpdate:modelValue={ val => emit('update:modelValue', val) }
                disabled={ isDisabled.value }
                readonly={ isReadonly.value }
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
                      onClick={ onClick }
                    />
                  ),
                  input: () => {
                    return (
                      <div class="ve-switch__thumb" />
                    )
                  }
                } }
              />
            )
          } }
        />
      )
    }
  }
})