// Styles
import './styles/messages.scss'

// Components
import { FadeTransition } from '../transition'

// Composables
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'

// Utilities
import { defineComponent, wrapInArray } from '../../utils'
import { computed } from 'vue'

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

  setup (props, { slots }) {
    const messages = computed(() => wrapInArray(props.value))

    return () => (
      <MaybeTransition
        transition={ props.transition }
        tag="div"
        class="ve-messages"
      >
        { (messages.value.length > 0 && props.active) && (
          messages.value.map((message: any, i) => (
            <div class="ve-messages__message" key={ i }>
              { message }
            </div>
          ))
        ) }

        { slots?.default?.() }
      </MaybeTransition>
    )
  },
})
