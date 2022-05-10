// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeDelayProps, useDelay } from '../../composables/delay'
import { useProxiedModel } from '../../composables/proxied-model'

// Types
export type Hover = InstanceType<typeof Hover>

export const Hover = defineComponent({
  name: 'VeHover',

  props: {
    disabled: Boolean,
    modelValue: {
      type: Boolean,
      default: undefined,
    },

    ...makeDelayProps(),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup(props, { slots }) {
    const hover = useProxiedModel(props, 'modelValue')
    const { runOpenDelay, runCloseDelay } = useDelay(props, value => {
      !props.disabled && (hover.value = value)
    })

    return () => slots.default?.({
      hover: hover.value,
      props: {
        onMouseenter: runOpenDelay,
        onMouseleave: runCloseDelay,
      },
    })
  },
})
