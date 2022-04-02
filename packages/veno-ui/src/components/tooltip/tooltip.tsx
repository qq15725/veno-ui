// Styles
import './styles/tooltip.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid, convertToUnit } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Components
import { Overlay } from '../overlay'
import { ScaleTransition } from '../transition'

// Types
import type { PropType } from 'vue'
import type { OverlaySlots } from '../overlay/overlay'
import type { Origin } from '../../composables/position-strategy'
import type { Anchor } from '../../utils'

export const Tooltip = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeTooltip',

  props: {
    /**
     * @zh 是否展示
     */
    modelValue: Boolean,

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

    /**
     * @zh 锚点位置
     */
    anchor: {
      type: String as PropType<Anchor>,
      default: 'top',
    },

    /**
     * @zh 原始点位置
     */
    origin: {
      type: String as PropType<Origin>,
      default: 'auto',
    },

    /**
     * @zh 最大宽度
     */
    maxWidth: {
      type: [String, Number],
      default: 300,
    },
    ...makeTransitionProps({
      transition: { component: ScaleTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
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
          class="ve-tooltip"
          id={ id.value }
          transition={ props.transition }
          absolute
          positionStrategy="connected"
          scrollStrategy="reposition"
          anchor={ anchor.value }
          origin={ origin.value }
          minWidth={ 0 }
          offset={ 10 }
          scrim={ false }
          persistent
          openOnClick={ false }
          openOnHover
          activatorProps={ {
            'aria-describedby': id.value,
          } }
          v-slots={ {
            activator: slots.activator,
          } }
        >
          <div
            class="ve-tooltip__wrapper"
            style={ {
              maxWidth: convertToUnit(props.maxWidth),
            } }
          >
            { slots.default?.() ?? props.text }

            { props.arrow && <div class="ve-tooltip__arrow" /> }
          </div>
        </Overlay>
      )
    }
  },
})

export type Tooltip = InstanceType<typeof Tooltip>