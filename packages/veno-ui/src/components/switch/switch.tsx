// Styles
import './styles/switch.scss'

// Utils
import { ref } from 'vue'
import { genericComponent } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { SelectionControl } from '../selection-control'
import { makeSelectionControlProps, filterSelectionControlProps } from '../selection-control/selection-control'

// Types
export type Switch = InstanceType<typeof Switch>

export const Switch = genericComponent()({
  name: 'VeSwitch',

  inheritAttrs: false,

  props: {
    ...makeFormControlProps(),
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
      const [formControlProps] = filterFormControlProps(props)
      const [{ label, ...selectionInputProps }] = filterSelectionControlProps(props)

      return (
        <FormControl
          { ...formControlProps }
          class="ve-switch"
          v-slots={ {
            prepend: slots.prepend,
            default: ({ isDisabled, isReadonly, props: formControlProps }) => {
              return (
                <SelectionControl
                  { ...selectionInputProps }
                  ref={ control }
                  type="checkbox"
                  onUpdate:modelValue={ val => emit('update:modelValue', val) }
                  disabled={ isDisabled.value }
                  readonly={ isReadonly.value }
                  { ...formControlProps }
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
            },
            append: slots.append,
          } }
        />
      )
    }
  }
})