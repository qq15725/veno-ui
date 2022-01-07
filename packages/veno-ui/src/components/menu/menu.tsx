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
import { DialogTransition } from '../transition'

// Types
import type { OverlaySlots } from '../overlay/overlay'

export type Menu = InstanceType<typeof Menu>

export const Menu = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeMenu',

  inheritAttrs: false,

  props: {
    modelValue: Boolean,
    id: String,
    ...makeTransitionProps({
      transition: { component: DialogTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { attrs, slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const id = computed(() => props.id || `ve-menu-${ getUid() }`)

    return () => {
      return (
        <Overlay
          v-model={ isActive.value }
          class={ [
            've-menu',
          ] }
          transition={ props.transition }
          absolute
          positionStrategy="connected"
          scrollStrategy="reposition"
          scrim={ false }
          activatorProps={ {
            'aria-haspopup': 'menu',
            'aria-expanded': String(isActive.value),
            'aria-owns': id.value,
          } }
          { ...attrs }
          v-slots={ slots }
        />
      )
    }
  },
})