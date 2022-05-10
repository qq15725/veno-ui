// Styles
import './styles/switch.scss'

// Utils
import { ref } from 'vue'
import { defineComponent } from '../../utils'

// Components
import { SelectionControl } from '../selection-control'

// Composables
import { makeSelectionControlProps } from '../selection-control/selection-control'

// Types
export type Switch = InstanceType<typeof Switch>

export const Switch = defineComponent({
  name: 'VeSwitch',

  props: makeSelectionControlProps({
    type: 'checkbox',
    color: 'primary',
  } as const),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { emit, slots }) {
    const control = ref<SelectionControl>()

    function onClick () {
      control.value?.inputRef?.click()
    }

    return () => {
      return (
        <SelectionControl
          ref={ control }
          class="ve-switch"
          { ...props }
          onUpdate:modelValue={ val => emit('update:modelValue', val) }
        >
          { {
            ...slots,
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
        </SelectionControl>
      )
    }
  }
})