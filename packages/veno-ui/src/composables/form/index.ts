// Utils
import { computed, inject, provide, ref, watch } from 'vue'
import { createSymbol, getCurrentInstance, propsFactory, getObjectValueByPath, setObjectValueByPath } from '../../utils'
import { useProxiedModel } from '../proxied-model'

// Types
import type { ComputedRef, ExtractPropTypes, InjectionKey, PropType, Ref, WatchStopHandle } from 'vue'

export interface FormField
{
  name: Ref<string | undefined>
  modelValue: Ref
  validate?: () => Promise<string[]>
  reset?: () => void
  resetValidation?: () => void
}

export interface FormInstance
{
  items: Map<string | number, FormField>
  isDisabled: ComputedRef<boolean>
  isReadonly: ComputedRef<boolean>
  isValidating: Ref<boolean>
  register: (id: number | string, item: FormField) => void
  unregister: (id: number | string) => void
}

interface FormValidationResult
{
  id: number | string
  errorMessages: string[]
}

export const FormKey: InjectionKey<FormInstance> = createSymbol('form')

export const makeFormProps = propsFactory({
  disabled: Boolean,
  fastFail: Boolean,
  lazyValidation: Boolean,
  readonly: Boolean,
  valid: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  modelValue: Object as PropType<Record<string, any>>,
})

export function provideForm (
  props: ExtractPropTypes<ReturnType<typeof makeFormProps>> & {
    'onUpdate:valid': ((val: boolean | null) => void) | undefined
    'onUpdate:modelValue': ((val: Record<string, any>) => void) | undefined
  }
) {
  const vm = getCurrentInstance('provideForm')
  const valid = useProxiedModel(props, 'valid')
  const model = useProxiedModel(props, 'modelValue')

  const isDisabled = computed(() => props.disabled)
  const isReadonly = computed(() => props.readonly)
  const isValidating = ref(false)
  const items = new Map<string | number, FormField>()
  const watchs = new Map<string | number, WatchStopHandle[]>()
  const errorMessages = ref<FormValidationResult[]>([])

  async function submit (e: Event) {
    e.preventDefault()
    const results = []
    let _valid = true
    errorMessages.value = []
    valid.value = null
    isValidating.value = true
    for (const [id, item] of items) {
      if (!item.validate) continue
      const itemErrorMessages = await item.validate()
      if (itemErrorMessages.length > 0) {
        _valid = false
        results.push({
          id,
          errorMessages: itemErrorMessages,
        })
      }
      if (!_valid && props.fastFail) break
    }
    errorMessages.value = results
    valid.value = _valid
    isValidating.value = false
    vm?.emit('submit', model.value, e)
  }

  async function reset (e: Event) {
    e.preventDefault()
    items.forEach(item => item.reset?.())
    valid.value = null
    vm?.emit('reset', e)
  }

  async function resetValidation () {
    items.forEach(item => item.resetValidation?.())
    errorMessages.value = []
    valid.value = null
    vm?.emit('resetValidation')
  }

  provide(FormKey, {
    isDisabled,
    isReadonly,
    isValidating,
    items,
    register: (id, item) => {
      items.set(id, item)
      watchs.set(id, [
        watch(item.name, name => {
          if (!name) return
          const val = getObjectValueByPath(model.value, name)
          if (val !== item.modelValue.value) item.modelValue.value = val
        }, { immediate: true }),
        watch(item.modelValue, value => {
          const name = item.name.value
          if (!name) return
          if (value !== getObjectValueByPath(model.value, name)) {
            setObjectValueByPath(model.value, name, value)
          }
        }, { immediate: true, deep: true })
      ])
    },
    unregister: id => {
      items.delete(id)
      watchs.get(id)?.forEach(v => v())
      watchs.delete(id)
    }
  })

  return {
    errorMessages,
    isDisabled,
    isReadonly,
    isValidating,
    items,
    submit,
    reset,
    resetValidation,
  }
}

export function useForm () {
  return inject(FormKey, null)
}
