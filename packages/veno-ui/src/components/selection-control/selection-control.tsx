// Styles
import './styles/selection-control.scss'

// Components
import { Icon } from '../icon'
import { SelectionControlGroupSymbol } from './selection-control-group'

// Composables
import { makeDensityProps, useDensity } from '../../composables/density'
import { makeThemeProps } from '../../composables/theme'
import { useProxiedModel } from '../../composables/proxied-model'
import { useTextColor } from '../../composables/color'

// Utils
import { computed, inject, ref } from 'vue'
import {
  deepEqual,
  genericComponent,
  getUid,
  pick,
  propsFactory,
  SUPPORT_FOCUS_VISIBLE,
  useRender,
  wrapInArray,
} from '../../utils'

// Types
import type { ComputedRef, ExtractPropTypes, PropType, Ref, WritableComputedRef } from 'vue'
import type { MakeSlots } from '../../utils'

export type SelectionControlSlot = {
  model: WritableComputedRef<any>
  isReadonly: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  textColorClasses: Ref<string[]>
  props: {
    onBlur: (e: Event) => void
    onFocus: (e: FocusEvent) => void
    id: string
  }
}

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
  name: string
) {
  const group = inject(SelectionControlGroupSymbol, undefined)
  const { densityClasses } = useDensity(props, name)
  const modelValue = useProxiedModel(props, 'modelValue')
  const trueValue = computed(() => (
    props.trueValue !== undefined ? props.trueValue
      : props.value !== undefined ? props.value
      : true
  ))
  const falseValue = computed(() => (
    props.falseValue !== undefined ? props.falseValue : false
  ))
  const isMultiple = computed(() => (
    group?.multiple.value ||
    !!props.multiple ||
    (props.multiple == null && Array.isArray(modelValue.value))
  ))
  const model = computed({
    get () {
      const val = group ? group.modelValue.value : modelValue.value

      return isMultiple.value
        ? val.some((v: any) => props.valueComparator(v, trueValue.value))
        : props.valueComparator(val, trueValue.value)
    },
    set (val: boolean) {
      const currentValue = val ? trueValue.value : falseValue.value

      let newVal = currentValue

      if (isMultiple.value) {
        newVal = val
          ? [...wrapInArray(modelValue.value), currentValue]
          : wrapInArray(modelValue.value).filter((item: any) => !props.valueComparator(item, trueValue.value))
      }

      if (group) {
        group.modelValue.value = newVal
      } else {
        modelValue.value = newVal
      }
    },
  })
  const { textColorClasses, textColorStyles } = useTextColor(computed(() => {
    return (
      model.value
      && !props.error
      && !props.disabled
    ) ? props.color : undefined
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

export function filterSelectionControlProps (props: ExtractPropTypes<ReturnType<typeof makeSelectionControlProps>>) {
  return pick(props, Object.keys(SelectionControl.props) as any)
}

export type SelectionControl = InstanceType<typeof SelectionControl>

export const SelectionControl = genericComponent<new <T>() => {
  $props: {
    modelValue?: T
    'onUpdate:modelValue'?: (val: T) => any
  }
  $slots: MakeSlots<{
    label: [SelectionControlSlot]
    default: [SelectionControlSlot]
  }>
}>()({
  name: 'SelectionControl',

  inheritAttrs: false,

  props: makeSelectionControlProps(),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { attrs, slots }) {
    const {
      densityClasses,
      group,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      trueValue,
    } = useSelectionControl(props, 've-selection-control')
    const uid = getUid()
    const id = computed(() => props.id || `input-${ uid }`)
    const isFocused = ref(false)
    const isFocusVisible = ref(false)
    const input = ref<HTMLInputElement>()

    function onFocus (e: FocusEvent) {
      isFocused.value = true
      if (
        !SUPPORT_FOCUS_VISIBLE ||
        (SUPPORT_FOCUS_VISIBLE && (e.target as HTMLElement).matches(':focus-visible'))
      ) {
        isFocusVisible.value = true
      }
    }

    function onBlur () {
      isFocused.value = false
      isFocusVisible.value = false
    }

    useRender(() => {
      const type = group?.type.value ?? props.type
      const label = slots.label
        ? slots.label({
          label: props.label,
          props: { for: id.value },
        })
        : props.label
      const hasLabel = !!label

      return (
        <div
          class={ [
            've-selection-control',
            {
              've-selection-control--dirty': model.value,
              've-selection-control--disabled': props.disabled,
              've-selection-control--error': props.error,
              've-selection-control--focused': isFocused.value,
              've-selection-control--focus-visible': isFocusVisible.value,
              've-selection-control--inline': group?.inline.value || props.inline,
            },
          ] }
        >
          <div
            class={ [
              've-selection-control__input',
              densityClasses.value,
            ] }
          >
            { icon.value && (
              <Icon
                icon={ icon.value }
                class={ [
                  textColorClasses.value,
                ] }
                style={ textColorStyles.value }
              />
            ) }

            { slots.default?.({
              model,
              textColorClasses,
              textColorStyles,
              props: {
                onFocus,
                onBlur,
                id: id.value,
              },
            }) }

            { hasLabel && (
              <label
                class={ [
                  've-selection-control__label',
                ] }
                for={ id.value }
              >
                { label }
              </label>
            ) }

            <input
              v-model={ model.value }
              ref={ input }
              disabled={ props.disabled }
              id={ id.value }
              onBlur={ onBlur }
              onFocus={ onFocus }
              readonly={ props.readonly }
              type={ type }
              value={ trueValue.value }
              name={ group?.name.value ?? props.name }
              aria-checked={ type === 'checkbox' ? model.value : undefined }
              { ...attrs }
            />
          </div>
        </div>
      )
    })

    return {
      isFocused,
      input,
    }
  },
})
