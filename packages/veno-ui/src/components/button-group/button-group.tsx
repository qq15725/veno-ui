// Styles
import './styles/button-group.scss'

// Utils
import { defineComponent } from '../../utils'
import { reactive, computed } from 'vue'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { provideDefaults } from '../../composables/defaults'

export const ButtonGroup = defineComponent({
  name: 'VeButtonGroup',

  props: {
    divided: Boolean,
    ...makePaperProps({
      shape: 'rounded'
    } as const),
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)

    provideDefaults(reactive({
      defaults: {
        VeButton: {
          height: 'auto',
          color: computed(() => props.color),
          variant: computed(() => props.variant),
        },
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