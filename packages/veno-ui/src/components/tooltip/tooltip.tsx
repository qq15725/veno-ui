// Styles
import './styles/tooltip.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeOverlayProps } from '../overlay/overlay'

// Components
import { Overlay } from '../overlay'
import { ScaleTransition } from '../transition'

// Types
import type { OverlaySlots } from '../overlay/overlay'
import type { Origin } from '../../composables/position-strategy'
import type { Anchor } from '../../utils'

export const Tooltip = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeTooltip',

  props: {
    /**
     * @zh DOM ID
     */
    id: String,

    /**
     * @zh 工具提示内容
     */
    text: String,

    /**
     * @zh 是否显示箭头
     */
    arrow: {
      type: Boolean,
      default: true,
    },

    ...makeOverlayProps({
      anchor: 'top',
      maxWidth: 300,
      minWidth: 0,
      offset: 10,
      openOnClick: false,
      openOnHover: true,
      origin: 'auto',
      positionStrategy: 'connected',
      scrollStrategy: 'reposition',
      transition: { component: ScaleTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (_modelValue: boolean) => true,
  },

  setup(props, { slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const id = computed(() => props.id || `ve-tooltip-${ getUid() }`)
    const anchor = computed(() => {
      return props.anchor.split(' ').length > 1
        ? props.anchor
        : `${ props.anchor } center` as Anchor
    })
    const origin = computed(() => {
      return (
        props.origin === 'auto'
        || props.origin === 'overlap'
        || props.origin.split(' ').length > 1
        || props.anchor.split(' ').length > 1
      )
        ? props.origin
        : `${ props.origin } center` as Origin
    })

    return () => {
      return (
        <Overlay
          { ...props }
          absolute
          activatorProps={ {
            'aria-describedby': id.value,
          } }
          anchor={ anchor.value }
          class="ve-tooltip"
          contentClass="ve-tooltip__wrapper"
          id={ id.value }
          origin={ origin.value }
          persistent
          role="tooltip"
          scrim={ false }
          v-model={ isActive.value }
          v-slots={ {
            activator: slots.activator,
          } }
        >
          { slots.default?.() ?? props.text }

          { props.arrow && <div class="ve-tooltip__arrow" /> }
        </Overlay>
      )
    }
  },
})

export type Tooltip = InstanceType<typeof Tooltip>
