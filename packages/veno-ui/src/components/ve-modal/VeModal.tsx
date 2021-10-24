// Styles
import './styles/ve-modal.scss'

// Utils
import {
  defineComponent,
  computed,
} from 'vue'
import { getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Components
import { VeModalTransition } from '../ve-transition'
import { VeOverlay } from '../ve-overlay'

export default defineComponent({
  name: 'VeModal',

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

    const id = computed(() => props.id || `ve-modal-${ getUid() }`)

    return () => (
      <VeOverlay
        v-model={ isActive.value }
        class={ [
          've-modal',
        ] }
        id={ id.value }
        transition={ props.transition }
        activator-props={ {
          'aria-describedby': id.value,
        } }
        { ...attrs }
        v-slots={ {
          activator: slots.activator,
          default: slots.default,
        } }
      />
    )
  }
})