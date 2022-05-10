// Styles
import './styles/scrim.scss'

// Utils
import { toRef } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { MaybeTransition, makeTransitionProps } from '../../composables/transition'
import { useBackgroundColor } from '../../composables/color'

// Components
import { FadeTransition } from '../transition'

export const Scrim = defineComponent({
  name: 'VeScrim',

  inheritAttrs: false,

  props: {
    modelValue: Boolean,
    color: String,
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    }),
  },

  setup(props, { attrs }) {
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(toRef(props, 'color'))

    return () => {
      return (
        <MaybeTransition transition={ props.transition } appear>
          { props.modelValue && (
            <div
              class={ [
                've-scrim',
                backgroundColorClasses.value,
              ] }
              style={ backgroundColorStyles.value }
              { ...attrs }
            />
          ) }
        </MaybeTransition>
      )
    }
  },
})
