// Styles
import './styles/selection-group-control.scss'

// Utils
import { computed, toRef, provide, inject } from 'vue'
import { defineComponent, getUid, propsFactory, useRender, createSymbol } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { PropType, Ref, InjectionKey } from 'vue'

export interface SelectionGroupInstance
{
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

export const SelectionGroupControlKey: InjectionKey<SelectionGroupInstance> = createSymbol('selection-control-group')

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

export const SelectionGroupControl = defineComponent({
  name: 'VeSelectionGroupControl',

  props: makeSelectionGroupControlProps(),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots }) {
    const modelValue = useProxiedModel(props, 'modelValue')
    const id = computed(() => props.name || props.id || `ve-selection-control-group-${ getUid() }`)
    const multiple = computed(() => {
      return !!props.multiple
        || (props.multiple == null && Array.isArray(modelValue.value))
    })

    const group = {
      disabled: toRef(props, 'disabled'),
      inline: toRef(props, 'inline'),
      modelValue,
      multiple,
      id,
      name: toRef(props, 'name'),
      falseIcon: toRef(props, 'falseIcon'),
      trueIcon: toRef(props, 'trueIcon'),
      readonly: toRef(props, 'readonly'),
      type: toRef(props, 'type'),
    }

    provide(SelectionGroupControlKey, group)

    useRender(() => {
      return (
        <div
          class="ve-selection-group-control"
          aria-labelled-by={ props.type === 'radio' ? group.id.value : undefined }
          role={ props.type === 'radio' ? 'radiogroup' : undefined }
        >
          { slots.default?.() }
        </div>
      )
    })

    return group
  },
})

export function useSelectionGroupControl () {
  return inject(SelectionGroupControlKey, null)
}

export type SelectionGroupControl = InstanceType<typeof SelectionGroupControl>