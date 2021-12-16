// Styles
import './styles/tooltip.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Components
import { Overlay } from '../overlay'
import { ScaleTransition } from '../transition'

// Types
import type { PropType } from 'vue'
import type { OverlaySlots } from '../overlay/overlay'
import type { Anchor, Origin } from '../../composables/position-strategy'

export type Tooltip = InstanceType<typeof Tooltip>

export const Tooltip = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeTooltip',

  inheritAttrs: false,

  props: {
    modelValue: Boolean,
    id: String,
    text: String,
    arrow: {
      type: Boolean,
      default: true,
    },
    anchor: {
      type: String as PropType<Anchor>,
      default: 'bottom',
    },
    origin: {
      type: String as PropType<Origin>,
      default: 'auto',
    },
    ...makeTransitionProps({
      transition: { component: ScaleTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { attrs, slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const id = computed(() => props.id || `ve-tooltip-${ getUid() }`)
    const anchor = computed(() => {
      return props.anchor.split(' ').length > 1
        ? props.anchor
        : props.anchor + ' center' as Anchor
    })
    const origin = computed(() => {
      return (
        props.origin === 'auto' ||
        props.origin === 'overlap' ||
        props.origin.split(' ').length > 1 ||
        props.anchor.split(' ').length > 1
      ) ? props.origin
        : props.origin + ' center' as Origin
    })

    return () => {
      return (
        <Overlay
          role="tooltip"
          v-model={ isActive.value }
          class={ [
            've-tooltip',
          ] }
          id={ id.value }
          transition={ props.transition }
          absolute
          position-strategy="connected"
          scroll-strategy="reposition"
          anchor={ anchor.value }
          origin={ origin.value }
          min-width={ 0 }
          offset={ 10 }
          scrim={ false }
          persistent
          open-on-click={ false }
          open-on-hover
          activator-props={ {
            'aria-describedby': id.value,
          } }
          { ...attrs }
          v-slots={ {
            activator: slots.activator,
          } }
        >
          <div class="ve-tooltip__wrap">
            { slots.default?.() ?? props.text }

            { props.arrow && <div class="ve-tooltip__arrow" /> }
          </div>
        </Overlay>
      )
    }
  },
})