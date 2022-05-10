// Styles
import './styles/selection-control.scss'

// Utils
import { computed, onBeforeMount, onBeforeUnmount, ref, toRef } from 'vue'
import type { ComputedRef, ExtractPropTypes, PropType, Ref, WritableComputedRef } from 'vue'
import {
  SUPPORTS_FOCUS_VISIBLE,
  deepEqual,
  filterInputAttrs,
  genericComponent,
  getUid,
  pick,
  propsFactory,
  useRender,
  wrapInArray,
} from '../../utils'

// Components
import { Icon } from '../icon'
import { Label } from '../label'

// Composables
import { useTextColor } from '../../composables/color'
import { makeDensityProps, useDensity } from '../../composables/density'
import { useForm } from '../../composables/form'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeSizeProps, useSize } from '../../composables/size'
import { useSelectionGroupControl } from '../selection-group-control/selection-group-control'
import { makeThemeProps } from '../../composables/theme'

// Types
import type { MakeSlots } from '../../utils'

export interface SelectionControlSlot {
  label: string | undefined
  model: WritableComputedRef<any>
  isReadonly: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  textColorClasses: Ref<string[]>
  textColorStyles: Ref<string[]>
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
  ...makeSizeProps(),
  ...makeDensityProps(),
}, 'selection-control')

export function filterSelectionControlProps(props: ExtractPropTypes<ReturnType<typeof makeSelectionControlProps>>) {
  return pick(props, Object.keys(SelectionControl.props) as any)
}

export const SelectionControl = genericComponent<new <T>() => {
  $props: {
    modelValue?: T
    'onUpdate:modelValue'?: (val: T) => any
  }
  $slots: MakeSlots<{
    label: [SelectionControlSlot]
    input: [SelectionControlSlot]
    default: [SelectionControlSlot]
  }>
}>()({
  name: 'VeSelectionControl',

  inheritAttrs: false,

  props: makeSelectionControlProps(),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup(props, { attrs, slots }) {
    const group = useSelectionGroupControl()
    const { sizeClasses, sizeStyles } = useSize(props)
    const { densityClasses } = useDensity(props)
    const modelValue = useProxiedModel(props, 'modelValue')
    const trueValue = computed(() => (
      props.trueValue !== undefined
        ? props.trueValue
        : (
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
      get() {
        const val = group ? group.modelValue.value : modelValue.value
        if (isMultiple.value) {
          return (val || []).some((v: any) => props.valueComparator(v, trueValue.value))
        }
        return props.valueComparator(val, trueValue.value)
      },
      set(val: boolean) {
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
      },
    })
    const { textColorClasses, textColorStyles } = useTextColor(computed(() => {
      return model.value ? props.color : undefined
    }))
    const icon = computed(() => {
      return model.value
        ? group?.trueIcon.value ?? props.trueIcon
        : group?.falseIcon.value ?? props.falseIcon
    })

    const id = computed(() => props.name || props.id || `ve-selection-control-${ getUid() }`)
    const isFocused = ref(false)
    const isFocusVisible = ref(false)
    const inputRef = ref<HTMLInputElement>()
    const form = useForm()

    onBeforeMount(() => {
      form?.register(id.value, {
        name: toRef(props, 'name'),
        modelValue: model,
      })
    })

    onBeforeUnmount(() => {
      form?.unregister(id.value)
    })

    function onFocus(e: FocusEvent) {
      isFocused.value = true
      if (
        !SUPPORTS_FOCUS_VISIBLE
        || (SUPPORTS_FOCUS_VISIBLE && (e.target as HTMLElement).matches(':focus-visible'))
      ) {
        isFocusVisible.value = true
      }
    }

    function onBlur() {
      isFocused.value = false
      isFocusVisible.value = false
    }

    useRender(() => {
      const slotProps = {
        label: props.label,
        model,
        textColorClasses,
        textColorStyles,
        props: {
          onFocus,
          onBlur,
          id: id.value,
        },
      }

      const type = group?.type.value ?? props.type
      const hasLabel = !!(slots.label || props.label || props.value)
      const [rootAttrs, restAttrs] = filterInputAttrs(attrs)

      return (
        <div
          { ...rootAttrs }
          className={ [
            've-selection-control',
            {
              've-selection-control--dirty': model.value,
              've-selection-control--disabled': props.disabled,
              've-selection-control--error': props.error,
              've-selection-control--focused': isFocused.value,
              've-selection-control--focus-visible': isFocusVisible.value,
              've-selection-control--inline': group?.inline.value || props.inline,
            },
            sizeClasses.value,
            densityClasses.value,
            textColorClasses.value,
          ] }
          style={ sizeStyles.value }
        >
          <div className="ve-selection-control__wrapper">
            { slots.default?.(slotProps) }

            <div
              className="ve-selection-control__input"
              style={ textColorStyles.value }
            >
              { icon.value && <Icon icon={ icon.value } /> }

              { slots.input?.(slotProps) }

              <input
                className="ve-native-control"
                ref={ inputRef }
                v-model={ model.value }
                disabled={ props.disabled }
                id={ id.value }
                onBlur={ onBlur }
                onFocus={ onFocus }
                readOnly={ props.readonly }
                type={ type }
                value={ trueValue.value }
                name={ group?.name.value ?? props.name }
                aria-checked={ type === 'checkbox' ? model.value : undefined }
                { ...restAttrs }
              />
            </div>
          </div>

          { hasLabel && (
            <Label for={ id.value }>
              { slots.label?.(slotProps) ?? props.label ?? props.value }
            </Label>
          ) }
        </div>
      )
    })

    return {
      isFocused,
      inputRef,
    }
  },
})

export type SelectionControl = InstanceType<typeof SelectionControl>
