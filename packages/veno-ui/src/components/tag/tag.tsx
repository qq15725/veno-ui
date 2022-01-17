// Styles
import './styles/tag.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'

// Types
export type Tag = InstanceType<typeof Tag>

export const Tag = defineComponent({
  name: 'VeTag',

  props: {
    ...makePaperProps({
      color: 'secondary',
    } as const),
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)

    return () => {
      return (
        <props.tag
          class={ [
            've-tag',
            paperClasses.value
          ] }
          style={ paperStyles.value }
        >
          { slots }
        </props.tag>
      )
    }
  }
})