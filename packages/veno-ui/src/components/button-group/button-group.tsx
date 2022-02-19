// Styles
import './styles/button-group.scss'

// Utils
import { defineComponent } from '../../utils'
import { reactive, toRef } from 'vue'

// Composables
import { makeDisabledProps } from '../../composables/disabled'
import { makePaperProps, usePaper } from '../../composables/paper'
import { provideDefaults } from '../../composables/defaults'

export const ButtonGroup = defineComponent({
  name: 'VeButtonGroup',

  props: {
    divided: Boolean,
    ...makeDisabledProps(),
    ...makePaperProps({
      shape: 'rounded-sm',
    } as const),
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)

    provideDefaults(reactive({
      VeButton: {
        disabled: toRef(props, 'disabled'),
        height: 'auto',
        color: toRef(props, 'color'),
        variant: toRef(props, 'variant'),
      },
    }))

    return () => {
      return (
        <props.tag
          class={ [
            've-button-group',
            {
              've-button-group--divided': props.divided,
            },
            paperClasses.value,
          ] }
          style={ [
            paperStyles.value,
          ] }
          v-slots={ slots }
        />
      )
    }
  }
})