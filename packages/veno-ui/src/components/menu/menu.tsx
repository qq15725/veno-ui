// Styles
import './styles/menu.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Components
import { Overlay } from '../overlay'
import { MenuTransition } from '../transition'

// Types
import type { OverlaySlots } from '../overlay/overlay'

export const Menu = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeMenu',

  props: {
    modelValue: Boolean,
    id: String,
    ...makeTransitionProps({
      transition: { component: MenuTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const id = computed(() => props.id || `ve-menu-${ getUid() }`)

    return () => {
      return (
        <Overlay
          v-model={ isActive.value }
          class="ve-menu"
          transition={ props.transition }
          absolute
          positionStrategy="connected"
          scrollStrategy="reposition"
          closeDelay={ 100 }
          minWidth={ 0 }
          offset={ 4 }
          scrim={ false }
          activatorProps={ {
            'aria-haspopup': 'menu',
            'aria-expanded': String(isActive.value),
            'aria-owns': id.value,
          } }
        >
          { slots }
        </Overlay>
      )
    }
  },
})

export type Menu = InstanceType<typeof Menu>