// Styles
import './styles/ve-tooltip.scss'

// Components
import { VeOverlay } from '../ve-overlay'
import { VeScaleTransition } from '../ve-transition'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Types
import type { PropType } from 'vue'
import type { OverlaySlots } from '../ve-overlay'
import type { StrategyProps } from '../ve-overlay/composables/position-strategies'
export type VeTooltip = InstanceType<typeof VeTooltip>

export const VeTooltip = genericComponent<new () => {
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
      type: String as PropType<StrategyProps['anchor']>,
      default: 'bottom',
    },
    origin: {
      type: String as PropType<StrategyProps['origin']>,
      default: 'auto',
    },
    ...makeTransitionProps({
      transition: { component: VeScaleTransition, },
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
        : props.anchor + ' center' as StrategyProps['anchor']
    })
    const origin = computed(() => {
      return (
        props.origin === 'auto' ||
        props.origin === 'overlap' ||
        props.origin.split(' ').length > 1 ||
        props.anchor.split(' ').length > 1
      ) ? props.origin
        : props.origin + ' center' as StrategyProps['origin']
    })

    return () => {
      return (
        <VeOverlay
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
          { slots.default?.() ?? props.text }

          { props.arrow && (
            <div class="ve-tooltip__arrow">
              <div class="ve-tooltip__arrow-inner" />
            </div>
          ) }
        </VeOverlay>
      )
    }
  },
})