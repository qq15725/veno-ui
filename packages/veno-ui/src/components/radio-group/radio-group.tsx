// Utils
import { computed, toRef } from 'vue'
import type { PropType } from 'vue'
import { defineComponent, getUid } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { SelectionGroupControl } from '../selection-group-control'
import { makeSelectionGroupControlProps } from '../selection-group-control/selection-group-control'
import { Radio } from '../radio'

// Composables
import { makeSizeProps } from '../../composables/size'
import { makeDensityProps } from '../../composables/density'
import { provideDefaults } from '../../composables/defaults'
import { useProxiedModel } from '../../composables/proxied-model'

// Types

export interface RadioGroupItemProps {
  value: any

  [key: string]: any
}

export const RadioGroup = defineComponent({
  name: 'VeRadioGroup',

  props: {
    /**
     * @zh 单选组的所有可选项
     */
    items: Array as PropType<(string | RadioGroupItemProps)[]>,

    ...makeSelectionGroupControlProps({
      type: 'radio',
      trueIcon: '$radioOn',
      falseIcon: '$radioOff',
    }),
    ...makeSizeProps(),
    ...makeDensityProps(),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup(props, { emit, slots }) {
    const id = computed(() => props.id || `ve-radio-group-${ getUid() }`)
    const model = useProxiedModel(props, 'modelValue')
    const items = computed(() => {
      return props.items?.map(
        itemProps => typeof itemProps === 'string'
          ? { value: itemProps }
          : itemProps,
      )
    })

    provideDefaults({
      VeRadio: {
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
          class="ve-radio-group"
          density={ density }
          name={ props.name }
          size={ size }
          v-model={ model.value }
        >
          { {
            ...slots,
            default: ({ isDisabled, isReadonly, props: controlProps }) => (
              <SelectionGroupControl
                { ...restProps }
                { ...controlProps }
                id={ id.value }
                disabled={ isDisabled.value }
                readonly={ isReadonly.value }
                v-model={ model.value }
              >
                { items.value?.map(itemProps => <Radio { ...itemProps } />) }

                { slots.default?.() }
              </SelectionGroupControl>
            ),
          } }
        </FormControl>
      )
    }
  },
})
