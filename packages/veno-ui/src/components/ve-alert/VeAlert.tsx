// Styles
import './styles/ve-alert.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeTagProps } from '../../composables/tag'

// Components
import { VeAvatar } from '../../components/ve-avatar'

// Types
import type { PropType } from 'vue'

const allowedTypes = ['success', 'info', 'warning', 'error'] as const

type ContextualType = typeof allowedTypes[number]

export default defineComponent({
  name: 'VeAlert',

  props: {
    closable: Boolean,
    closeIcon: {
      type: String,
      default: 'veno-ui:$close',
    },
    title: String,
    type: {
      type: String as PropType<ContextualType>,
      validator: (val: ContextualType) => allowedTypes.includes(val),
    },
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    return () => (
      <props.tag
        class={ [
          've-alert',
          `text-${ props.type }`,
        ] }
      >
        { props.type && (
          <div class="ve-alert__icon">
            <VeAvatar
              size="small"
              icon={ `veno-ui:$${ props.type }` }
            />
          </div>
        ) }

        <div class="ve-alert__wrap">
          {
            props.title && (
              <div class="ve-alert__title">{ props.title }</div>
            )
          }

          {
            slots.default && (
              <div class="ve-alert__content">{ slots.default?.() }</div>
            )
          }

        </div>
      </props.tag>
    )
  },
})
