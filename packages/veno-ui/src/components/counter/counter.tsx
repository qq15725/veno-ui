// Styles
import './styles/counter.scss'

// Utils
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { computed, defineComponent } from 'vue'

// Components
import { FadeTransition } from '../transition'

export const Counter = defineComponent({
  name: 'VeCounter',

  functional: true,

  props: {
    active: Boolean,
    max: [Number, String],
    value: {
      type: [Number, String],
      default: 0,
    },

    ...makeTransitionProps({
      transition: { component: FadeTransition },
    }),
  },

  setup (props, { slots }) {
    const counter = computed(() => {
      return props.max ? `${ props.value } / ${ props.max }` : String(props.value)
    })

    return () => {
      return (
        <MaybeTransition transition={ props.transition }>
          <div
            v-show={ props.active }
            class="ve-counter"
          >
            { slots.default
              ? slots.default({
                counter: counter.value,
                max: props.max,
                value: props.value,
              })
              : counter.value
            }
          </div>
        </MaybeTransition>
      )
    }
  },
})
