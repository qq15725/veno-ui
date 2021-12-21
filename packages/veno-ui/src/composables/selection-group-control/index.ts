// Utils
import { computed, provide, toRef } from 'vue'
import { getUid, propsFactory } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'

export interface SelectionGroupContext {
  disabled: Ref<boolean>
  inline: Ref<boolean>
  id: Ref<string | undefined>
  name: Ref<string | undefined>
  modelValue: Ref<any>
  multiple: Ref<boolean>
  trueIcon: Ref<string | undefined>
  falseIcon: Ref<string | undefined>
  readonly: Ref<boolean>
  type: Ref<string | undefined>
}

export const SelectionGroupControlSymbol: InjectionKey<SelectionGroupContext> = Symbol.for('veno-ui:selection-control-group')

export const makeSelectionGroupControlProps = propsFactory({
  id: String,
  inline: Boolean,
  name: String,
  falseIcon: String,
  trueIcon: String,
  multiple: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  disabled: Boolean,
  readonly: Boolean,
  type: String,
  modelValue: null,
}, 'selection-control-group')

export const useSelectionGroupControl = (
  props: ExtractPropTypes<ReturnType<typeof makeSelectionGroupControlProps>> & {
    'onUpdate:modelValue': ((val: any) => void) | undefined
  }
) => {
  const modelValue = useProxiedModel(props, 'modelValue')
  const uid = getUid()
  const id = computed(() => props.id || `selection-control-group-${uid}`)
  const name = computed(() => props.name || id.value)

  const group = {
    disabled: toRef(props, 'disabled'),
    inline: toRef(props, 'inline'),
    modelValue,
    multiple: computed(() => !!props.multiple || (props.multiple == null && Array.isArray(modelValue.value))),
    id,
    name,
    falseIcon: toRef(props, 'falseIcon'),
    trueIcon: toRef(props, 'trueIcon'),
    readonly: toRef(props, 'readonly'),
    type: toRef(props, 'type'),
  }

  provide(SelectionGroupControlSymbol, group)

  return group
}