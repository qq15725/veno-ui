// Utils
import { computed, reactive } from 'vue'
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

export const CheckboxGroup = defineComponent({
  name: 'VeCheckboxGroup',

  props: {
    ...makeFormControlProps(),
    ...makeSelectionGroupControlProps({
      type: 'checkbox',
      falseIcon: 'veno-ui:$checkboxOff',
      trueIcon: 'veno-ui:$checkboxOn',
      multiple: true,
    }),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots, attrs }) {
    const uid = getUid()
    const id = computed(() => props.id || `ve-checkbox-group-${ uid }`)

    provideDefaults(reactive({
      defaults: {
        VeCheckbox: {
          density: computed(() => props.density),
          readonly: computed(() => props.readonly),
          disabled: computed(() => props.disabled),
        },
      }
    }))

    return () => {
      const [formControlAttrs, restAttrs] = filterInputAttrs(attrs)
      const [formControlProps] = filterFormControlProps(props)
      const [selectionGroupControlProps] = filterSelectionGroupControlProps(props)
      const { default: defaultSlot, ...restSlots } = slots

      return (
        <FormControl
          { ...formControlProps }
          class="ve-checkbox-group"
          { ...formControlAttrs }
        >
          { {
            ...restSlots,
            default: ({ isDisabled, isReadonly, props: controlProps }) => {
              return (
                <SelectionGroupControl
                  { ...selectionGroupControlProps }
                  { ...controlProps }
                  id={ id.value }
                  disabled={ isDisabled.value }
                  readonly={ isReadonly.value }
                  { ...restAttrs }
                >
                  { { default: defaultSlot } }
                </SelectionGroupControl>
              )
            }
          } }
        </FormControl>
      )
    }
  }
})