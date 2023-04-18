// Styles
import './styles/messages.scss'

// Utils
import { computed } from 'vue'
import { wrapInArray } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Components
import { FadeTransition } from '../transition'

// Composables
import { MaybeTransition, makeTransitionProps } from '../../composables/transition'

export const Messages = defineComponent({
  name: 'VeMessages',

  props: {
    active: Boolean,
    value: {
      type: [Array, String],
      default: () => ([]),
    },

    ...makeTransitionProps({
      transition: {
        component: FadeTransition,
        group: true,
      },
    }),
  },

  setup(props, { slots }) {
    const messages = computed(() => wrapInArray(props.value))

    return () => {
      const hasMessages = messages.value.length > 0 && props.active

      return (
        <MaybeTransition
          transition={ props.transition }
          tag="div"
          class="ve-messages"
        >
          { hasMessages && (
            messages.value.map((message: any, i) => (
              <div class="ve-messages__message" key={ i }>
                { message }
              </div>
            ))
          ) }

          { slots?.default?.() }
        </MaybeTransition>
      )
    }
  },
})
