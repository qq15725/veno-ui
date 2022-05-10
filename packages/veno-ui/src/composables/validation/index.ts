// Utils
import { computed, ref } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import { getCurrentInstance, getCurrentInstanceName, propsFactory } from '../../utils'

// Types

export type ValidationResult = string | true
export type ValidationRule =
  | ValidationResult
  | PromiseLike<ValidationResult>
  | ((value: any) => ValidationResult)
  | ((value: any) => PromiseLike<ValidationResult>)

export const makeValidationProps = propsFactory({
  /**
   * @zh 是否为禁用状态
   */
  disabled: Boolean,

  /**
   * @zh 是否为错误状态
   */
  error: Boolean,

  /**
   * @zh 错误消息
   */
  errorMessages: {
    type: [Array, String] as PropType<string | string[]>,
    default: () => ([]),
  },

  /**
   * @zh 最大错误数
   */
  maxErrors: {
    type: [Number, String],
    default: 1,
  },

  /**
   * @zh 是否只读
   */
  readonly: Boolean,

  /**
   * @zh 验证规则
   */
  rules: {
    type: Array as PropType<ValidationRule[]>,
    default: () => ([]),
  },

  /**
   * @zh 验证值
   */
  modelValue: null,
})

export function useValidation(
  props: ExtractPropTypes<ReturnType<typeof makeValidationProps>>,
  name = getCurrentInstanceName(),
) {
  const errorMessages = ref<string[]>([])
  const isPristine = ref(true)
  const isDisabled = computed(() => !!props.disabled)
  const isReadonly = computed(() => !!props.readonly)
  const isValid = computed(() => {
    if (
      props.error
      || props.errorMessages?.length
      || errorMessages.value.length
    ) return false

    return isPristine.value ? null : true
  })
  const isValidating = ref(false)
  const validationClasses = computed(() => {
    return {
      [`${ name }--error`]: isValid.value === false,
      [`${ name }--disabled`]: isDisabled.value,
      [`${ name }--readonly`]: isReadonly.value,
    }
  })

  const vm = getCurrentInstance('useValidation')

  function reset() {
    resetValidation()

    vm?.emit('update:modelValue', null)
  }

  function resetValidation() {
    isPristine.value = true
    errorMessages.value = []
  }

  async function validate() {
    const results = []
    errorMessages.value = []
    isValidating.value = true
    for (const rule of props.rules) {
      if (results.length >= (props.maxErrors || 1)) {
        break
      }
      const handler = typeof rule === 'function' ? rule : () => rule
      const result = await handler(props?.modelValue?.value ?? props.modelValue)
      if (result === true) continue
      if (typeof result !== 'string') {
        // eslint-disable-next-line no-console
        console.warn(`${ result } is not a valid value. Rule functions must return boolean true or a string.`)
        continue
      }
      results.push(result)
    }
    errorMessages.value = results
    isValidating.value = false
    isPristine.value = false
    return errorMessages.value
  }

  return {
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
  }
}
