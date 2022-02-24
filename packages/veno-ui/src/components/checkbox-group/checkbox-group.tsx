// Utils
import { computed, toRef } from 'vue'
import { defineComponent, getUid } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { SelectionGroupControl } from '../selection-group-control'
import { makeSelectionGroupControlProps } from '../selection-group-control/selection-group-control'

// Composables
import { makeSizeProps } from '../../composables/size'
import { makeDensityProps } from '../../composables/density'
import { provideDefaults } from '../../composables/defaults'

export const CheckboxGroup = defineComponent({
  name: 'VeCheckboxGroup',

  props: {
    ...makeSelectionGroupControlProps({
      type: 'checkbox',
      falseIcon: '$checkboxOff',
      trueIcon: '$checkboxOn',
      multiple: true,
    }),
    ...makeSizeProps(),
    ...makeDensityProps(),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { emit, slots }) {
    const id = computed(() => props.id || `ve-checkbox-group-${ getUid() }`)

    provideDefaults({
      VeCheckbox: {
        size: toRef(props, 'size'),
        density: toRef(props, 'density'),
        readonly: toRef(props, 'readonly'),
        disabled: toRef(props, 'disabled'),
      },
    })

    return () => {
      const { density, size, ...restProps } = props

      return (
        <FormControl
          class="ve-checkbox-group"
          size={ size }
          density={ density }
        >
          { {
            ...slots,
            default: ({ isDisabled, isReadonly, props: controlProps }) => {
              return (
                <SelectionGroupControl
                  { ...restProps }
                  { ...controlProps }
                  id={ id.value }
                  disabled={ isDisabled.value }
                  readonly={ isReadonly.value }
                  onUpdate:modelValue={ val => emit('update:modelValue', val) }
                >
                  { slots.default?.() }
                </SelectionGroupControl>
              )
            }
          } }
        </FormControl>
      )
    }
  }
})