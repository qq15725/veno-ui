// Styles
import './styles/selection-control-group.scss'

// Utils
import { computed, defineComponent, provide, toRef } from 'vue'
import { getUid, useRender } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { InjectionKey, PropType, Ref } from 'vue'

export interface SelectionGroupContext {
  disabled: Ref<boolean>
  inline: Ref<boolean>
  name: Ref<string | undefined>
  modelValue: Ref<any>
  multiple: Ref<boolean>
  trueIcon: Ref<string | undefined>
  falseIcon: Ref<string | undefined>
  readonly: Ref<boolean>
  type: Ref<string | undefined>
}

export const SelectionControlGroupSymbol: InjectionKey<SelectionGroupContext> = Symbol.for('veno-ui:selection-control-group')

export type SelectionControlGroup = InstanceType<typeof SelectionControlGroup>

export const SelectionControlGroup = defineComponent({
  name: 'SelectionControlGroup',

  inheritAttrs: false,

  props: {
    disabled: Boolean,
    id: String,
    inline: Boolean,
    name: String,
    falseIcon: String,
    trueIcon: String,
    multiple: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
    readonly: Boolean,
    type: String,
    modelValue: null,
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots }) {
    const modelValue = useProxiedModel(props, 'modelValue')
    const uid = getUid()
    const id = computed(() => props.id || `selection-control-group-${uid}`)
    const name = computed(() => props.name || id.value)

    provide(SelectionControlGroupSymbol, {
      disabled: toRef(props, 'disabled'),
      inline: toRef(props, 'inline'),
      modelValue,
      multiple: computed(() => !!props.multiple || (props.multiple == null && Array.isArray(modelValue.value))),
      name,
      falseIcon: toRef(props, 'falseIcon'),
      trueIcon: toRef(props, 'trueIcon'),
      readonly: toRef(props, 'readonly'),
      type: toRef(props, 'type'),
    })

    useRender(() => {
      return (
        <div
          class="ve-selection-control-group"
          aria-labelled-by={ props.type === 'radio' ? id.value : undefined }
          role={ props.type === 'radio' ? 'radiogroup' : undefined }
        >
          { slots?.default?.() }
        </div>
      )
    })

    return {}
  },
})