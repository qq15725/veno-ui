// Styles
import './styles/menu.scss'

// Utils
import { computed, ref } from 'vue'
import { getUid, useRender } from '@veno-ui/utils'
import { genericComponent } from '../../utils'

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
    'update:modelValue': (_modelValue: boolean) => true,
  },

  setup(props, { slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const overlayRef = ref()
    const id = computed(() => props.id || `ve-menu-${ getUid() }`)

    useRender(() => {
      return (
        <Overlay
          ref={ overlayRef }
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
    })

    return {
      overlayRef,
    }
  },
})

export type Menu = InstanceType<typeof Menu>
