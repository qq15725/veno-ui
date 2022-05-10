// Styles
import './styles/form-control.scss'

// Utils
import { computed, toRef, onBeforeMount, onBeforeUnmount } from 'vue'
import { genericComponent, convertToUnit, useRender, pick, getUid } from '../../utils'

// Components
import { Label } from '../label'
import { Messages } from '../messages'
import { Icon } from '../icon'

// Composables
import { makeDimensionProps, useDimension } from '../../composables/dimension'
import { makeDensityProps, useDensity } from '../../composables/density'
import { useForm } from '../../composables/form'
import { makeSizeProps, useSize } from '../../composables/size'
import { makeValidationProps, useValidation } from '../../composables/validation'
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { ComputedRef, PropType, Ref } from 'vue'
import type { MakeSlots } from '../../utils'

export type FormControlSlot = {
  isDisabled: ComputedRef<boolean>
  isReadonly: ComputedRef<boolean>
  isPristine: Ref<boolean | null>
  isValid: ComputedRef<boolean | null>
  isValidating: Ref<boolean>
  reset: () => void
  resetValidation: () => void
  validate: () => void
}

export type FormControlSlots = MakeSlots<{
  prepend: [FormControlSlot],
  label: [FormControlSlot],
  default: [FormControlSlot & { props: Record<string, unknown> }],
  append: [FormControlSlot],
  details: [FormControlSlot],
}>

export function filterFormControlSlots (slots: Record<string, unknown>) {
  return pick(slots, FormControlSlots)
}

export const FormControlEmits = {
  'click:prepend': (e: MouseEvent) => true,
  'click:label': (e: MouseEvent) => true,
  'click:append': (e: MouseEvent) => true,
  'update:modelValue': (val: any) => true,
}

export const FormControlSlots = [
  'prepend',
  'label',
  'default',
  'append',
  'details',
]

export const FormControl = genericComponent<new () => {
  $slots: FormControlSlots
}>()({
  name: 'VeFormControl',

  props: {
    /**
     * @zh 后置图标
     */
    appendIcon: [String, Object],

    /**
     * @zh 布局方向
     */
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
      validator: (v: any) => ['horizontal', 'vertical'].includes(v),
    },

    /**
     * @zh 聚焦的
     */
    focused: Boolean,

    /**
     * @zh 隐藏详情
     */
    hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,

    /**
     * @zh 存在提示
     */
    hint: String,

    /**
     * @zh 内联
     */
    inline: Boolean,

    /**
     * @zh 标签文本
     */
    label: [Boolean, String],

    /**
     * @zh 标签ID
     */
    labelId: String,

    /**
     * @zh 标签宽度
     */
    labelWidth: [String, Number],

    /**
     * @zh 提示消息
     */
    messages: {
      type: [Array, String],
      default: () => ([]),
    },

    /**
     * @zh 名称
     */
    name: String,

    /**
     * @zh 后置图标
     */
    prependIcon: String,

    /**
     * @zh 持续显示的提示
     */
    persistentHint: Boolean,

    ...makeDimensionProps(),
    ...makeSizeProps(),
    ...makeDensityProps(),
    ...makeValidationProps(),
  },

  emits: FormControlEmits,

  setup (props, { slots, emit }) {
    const { dimensionStyles: dimensionStyles } = useDimension(props)
    const { sizeClasses, sizeStyles } = useSize(props)
    const model = useProxiedModel(props, 'modelValue')
    const computedDimensionStyles = computed(() => ({
      ...dimensionStyles.value,
      minHeight: dimensionStyles.value.minHeight ?? dimensionStyles.value.height,
    }))
    const { densityClasses } = useDensity(props)
    const {
      errorMessages,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses,
    } = useValidation(props)

    const form = useForm()

    const id = computed(() => props.name ?? `ve-form-control-${ getUid() }`)

    onBeforeMount(() => {
      form?.register(id.value, {
        name: toRef(props, 'name'),
        modelValue: model,
        validate,
        reset,
        resetValidation
      })
    })

    onBeforeUnmount(() => {
      form?.unregister(id.value)
    })

    const slotProps = computed<FormControlSlot>(() => ({
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
    }))

    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.prependIcon)
      const hasLabel = !!(slots.label || props.label)
      const hasAppend = !!(slots.append || props.appendIcon)
      const hasHint = !!(slots.hint || props.hint)
      const hasMessages = !!(
        slots.messages ||
        props.messages?.length ||
        errorMessages.value.length
      )
      const hasDetails = !props.hideDetails || (
        props.hideDetails === 'auto' &&
        (hasMessages || hasHint)
      )
      const showMessages = hasMessages || (
        hasHint &&
        (props.persistentHint || props.focused)
      )

      return (
        <div
          class={ [
            've-form-control',
            {
              [`ve-form-control--${ props.direction }`]: !!props.direction,
              've-form-control--hide-details': props.hideDetails,
              've-form-control--inline': props.inline,
            },
            sizeClasses.value,
            densityClasses.value,
            validationClasses.value,
          ] }
        >
          { hasPrepend && (
            <div class="ve-form-control__prepend">
              { slots.prepend?.(slotProps.value) }

              { props.prependIcon && (
                <Icon
                  onClick={ (e: MouseEvent) => emit('click:prepend', e) }
                  icon={ props.prependIcon }
                />
              ) }
            </div>
          ) }

          { hasLabel && (
            <div
              class="ve-form-control__label"
              style={ { width: convertToUnit(props.labelWidth) } }
            >
              <Label
                disabled={ isDisabled.value }
                error={ isValid.value === false }
                onClick={ (e: MouseEvent) => emit('click:label', e) }
                for={ props.labelId }
              >
                { slots.label?.(slotProps.value) ?? props.label }
              </Label>
            </div>
          ) }

          { slots.default && (
            <div
              class="ve-form-control__control"
              style={ [
                sizeStyles.value,
                computedDimensionStyles.value,
              ] }
            >
              { slots.default(slotProps.value) }
            </div>
          ) }

          { hasAppend && (
            <div class="ve-form-control__append">
              { props.appendIcon && (
                <Icon
                  onClick={ (e: MouseEvent) => emit('click:append', e) }
                  icon={ props.appendIcon }
                />
              ) }

              { slots?.append?.(slotProps.value) }
            </div>
          ) }

          { hasDetails && (
            <div class="ve-form-control__details">
              <Messages
                active={ showMessages }
                value={ hasMessages ? props.messages : [props.hint] }
                v-slots={ { default: slots.messages } }
              />

              { slots.details?.(slotProps.value) }
            </div>
          ) }
        </div>
      )
    })

    return {
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
    }
  }
})

export type FormControl = InstanceType<typeof FormControl>