// Styles
import './styles/switch.scss'

// Utils
import { ref } from 'vue'
import { defineComponent } from '../../utils'

// Components
import { SelectionControl } from '../selection-control'
import { makeSelectionControlProps, filterSelectionControlProps } from '../selection-control/selection-control'

// Types
export type Switch = InstanceType<typeof Switch>

export const Switch = defineComponent({
  name: 'VeSwitch',

  props: {
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
      const [selectionInputProps] = filterSelectionControlProps(props)

      return (
        <SelectionControl
          { ...selectionInputProps }
          ref={ control }
          class="ve-switch"
          type="checkbox"
          onUpdate:modelValue={ val => emit('update:modelValue', val) }
        >
          { {
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