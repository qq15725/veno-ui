// Utils
import { computed, toRef } from 'vue'
import { defineComponent, filterInputAttrs, getUid } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { SelectionGroupControl } from '../selection-group-control'
import {
  makeSelectionGroupControlProps,
  filterSelectionGroupControlProps
} from '../selection-group-control/selection-group-control'

// Composables
import { provideDefaults } from '../../composables/defaults'

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
      trueIcon: '$radioOn',
      falseIcon: '$radioOff',
    }),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { attrs, slots, emit }) {
    const uid = getUid()
    const id = computed(() => props.id || `ve-radio-group-${ uid }`)

    provideDefaults({
      VeRadio: {
        density: toRef(props, 'density'),
        readonly: toRef(props, 'readonly'),
        disabled: toRef(props, 'disabled'),
      },
    })

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
            default: ({ isDisabled, isReadonly, props: controlProps }) => (
              <SelectionGroupControl
                { ...selectionGroupControlProps }
                { ...controlProps }
                id={ id.value }
                disabled={ isDisabled.value }
                readonly={ isReadonly.value }
                onUpdate:modelValue={ val => emit('update:modelValue', val) }
                { ...restAttrs }
              >
                { { default: defaultSlot } }
              </SelectionGroupControl>
            ),
          } }
        </FormControl>
      )
    }
  },
})
