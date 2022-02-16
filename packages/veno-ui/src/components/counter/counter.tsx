// Styles
import './styles/counter.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, MakeSlots } from '../../utils'

// Composables
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'

// Components
import { FadeTransition } from '../transition'

export type CounterSlot = {
  counter: string,
  max: number,
  value: number,
}

export type CounterSlots = MakeSlots<{
  default: [CounterSlot]
}>

export const Counter = genericComponent<new () => {
  $slots: CounterSlots
}>()({
  name: 'VeCounter',

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
            class="ve-counter"
            v-show={ props.active }
          >
            { slots.default?.({
              counter: counter.value,
              max: Number(props.max),
              value: Number(props.value),
            }) ?? counter.value }
          </div>
        </MaybeTransition>
      )
    }
  },
})
