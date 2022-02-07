// Utils
import { computed, inject } from 'vue'
import { deepEqual, propsFactory, wrapInArray, getCurrentInstanceName } from '../../utils'

// Composables
import { SelectionGroupControlSymbol } from '../selection-group-control'
import { makeDensityProps, useDensity } from '../density'
import { makeThemeProps } from '../theme'
import { useProxiedModel } from '../proxied-model'
import { useTextColor } from '../color'

// Types
import type { ExtractPropTypes, PropType } from 'vue'

export const makeSelectionControlProps = propsFactory({
  color: String,
  disabled: Boolean,
  error: Boolean,
  id: String,
  inline: Boolean,
  label: String,
  falseIcon: String,
  trueIcon: String,
  multiple: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  name: String,
  readonly: Boolean,
  trueValue: null,
  falseValue: null,
  modelValue: null,
  type: String,
  value: null,
  valueComparator: {
    type: Function as PropType<typeof deepEqual>,
    default: deepEqual,
  },
  ...makeThemeProps(),
  ...makeDensityProps(),
}, 'selection-control')

export function useSelectionControl (
  props: ExtractPropTypes<ReturnType<typeof makeSelectionControlProps>> & {
    'onUpdate:modelValue': ((val: any) => void) | undefined
  },
  name = getCurrentInstanceName()
) {
  const group = inject(SelectionGroupControlSymbol, undefined)
  const { densityClasses } = useDensity(props, name)
  const modelValue = useProxiedModel(props, 'modelValue')
  const trueValue = computed(() => (
    props.trueValue !== undefined ? props.trueValue : (
      props.value !== undefined ? props.value : true
    )
  ))
  const falseValue = computed(() => (
    props.falseValue !== undefined ? props.falseValue : false
  ))
  const isMultiple = computed(() => (
    group?.multiple.value
    || !!props.multiple
    || (props.multiple == null && Array.isArray(modelValue.value))
  ))
  const model = computed({
    get () {
      const val = group ? group.modelValue.value : modelValue.value

      if (isMultiple.value) {
        return (val || []).some((v: any) => props.valueComparator(v, trueValue.value))
      }

      return props.valueComparator(val, trueValue.value)
    },
    set (val: boolean) {
      const currentValue = val ? trueValue.value : falseValue.value

      let newVal = currentValue

      if (isMultiple.value) {
        const oldVal = group ? group.modelValue.value : modelValue.value

        if (val) {
          newVal = [...wrapInArray(oldVal), currentValue]
        } else {
          newVal = wrapInArray(oldVal)
            .filter((v: any) => !props.valueComparator(v, trueValue.value))
        }
      }

      if (group) {
        group.modelValue.value = newVal
      } else {
        modelValue.value = newVal
      }
    }
  })
  const { textColorClasses, textColorStyles } = useTextColor(computed(() => {
    return model.value ? props.color : undefined
  }))
  const icon = computed(() => {
    return model.value
      ? group?.trueIcon.value ?? props.trueIcon
      : group?.falseIcon.value ?? props.falseIcon
  })

  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    icon,
  }
}