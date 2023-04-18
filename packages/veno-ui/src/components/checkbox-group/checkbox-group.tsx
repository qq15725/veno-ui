// Utils
import { computed, toRef } from 'vue'
import { getUid } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { SelectionGroupControl } from '../selection-group-control'
import { makeSelectionGroupControlProps } from '../selection-group-control/selection-group-control'
import { Checkbox } from '../checkbox'

// Composables
import { makeSizeProps } from '../../composables/size'
import { makeDensityProps } from '../../composables/density'
import { provideDefaults } from '../../composables/defaults'
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { PropType } from 'vue'

export interface CheckboxGroupItemProps {
  value: any

  [key: string]: any
}

export const CheckboxGroup = defineComponent({
  name: 'VeCheckboxGroup',

  props: {
    /**
     * @zh 复选框的所有可选项
     */
    items: Array as PropType<(string | CheckboxGroupItemProps)[]>,

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
    'update:modelValue': (_val: any) => true,
  },

  setup(props, { slots }) {
    const id = computed(() => props.id || `ve-checkbox-group-${ getUid() }`)
    const model = useProxiedModel(props, 'modelValue')
    const items = computed(() => {
      return props.items?.map(
        itemProps => typeof itemProps === 'string'
          ? { value: itemProps }
          : itemProps,
      )
    })

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
          density={ density }
          name={ props.name }
          size={ size }
          v-model={ model.value }
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
                  v-model={ model.value }
                >
                  { items.value?.map(itemProps => <Checkbox { ...itemProps } />) }

                  { slots.default?.() }
                </SelectionGroupControl>
              )
            },
          } }
        </FormControl>
      )
    }
  },
})
