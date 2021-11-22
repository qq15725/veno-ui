// Styles
import './styles/ve-dialog.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Components
import { VeModalTransition } from '../ve-transition'
import { VeOverlay } from '../ve-overlay'

// Types
export type VeDialog = InstanceType<typeof VeDialog>

export const VeDialog = genericComponent()({
  name: 'VeDialog',

  props: {
    id: String,
    modelValue: Boolean,
    ...makeTransitionProps({
      transition: { component: VeModalTransition, },
    })
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots, attrs }) {
    const isActive = useProxiedModel(props, 'modelValue')

    const id = computed(() => props.id || `ve-dialog-${ getUid() }`)

    return () => (
      <VeOverlay
        aria-role="dialog"
        aria-modal="true"
        activator-props={{
          'aria-haspopup': 'dialog',
          'aria-expanded': String(isActive.value),
          'aria-describedby': id.value,
        }}
        v-model={ isActive.value }
        class={ [
          've-dialog',
        ] }
        id={ id.value }
        transition={ props.transition }
        { ...attrs }
        v-slots={ {
          activator: slots.activator,
          default: slots.default,
        } }
      />
    )
  }
})