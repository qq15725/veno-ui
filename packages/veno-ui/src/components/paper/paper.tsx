// Styles
import './styles/paper.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'

// Types
export type Paper = InstanceType<typeof Paper>

export const Paper = defineComponent({
  name: 'VePaper',

  props: {
    textCenter: Boolean,
    ...makePaperProps({
      size: undefined,
      density: undefined,
    }),
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)

    return () => (
      <props.tag
        class={ [
          've-paper',
          {
            've-paper--text-center': props.textCenter,
          },
          paperClasses.value
        ] }
        style={ [
          paperStyles.value
        ] }
        v-slots={ slots }
      />
    )
  }
})