// Styles
import './styles/dialog.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Components
import { DialogTransition } from '../transition'
import { Overlay } from '../overlay'

// Types
import type { OverlaySlots } from '../overlay/overlay'

export type Dialog = InstanceType<typeof Dialog>

export const Dialog = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeDialog',

  props: {
    id: String,
    modelValue: Boolean,
    ...makeTransitionProps({
      transition: { component: DialogTransition },
    } as const)
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots, attrs }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const uid = getUid()
    const id = computed(() => props.id || `ve-dialog-${ uid }`)

    return () => (
      <Overlay
        aria-role="dialog"
        aria-modal="true"
        activator-props={ {
          'aria-haspopup': 'dialog',
          'aria-expanded': String(isActive.value),
          'aria-describedby': id.value,
        } }
        v-model={ isActive.value }
        class="ve-dialog"
        id={ id.value }
        transition={ props.transition }
        { ...attrs }
        v-slots={ slots }
      />
    )
  }
})