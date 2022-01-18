// Styles
import './styles/tag.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'

// Components
import { Icon } from '../icon'

// Types
export type Tag = InstanceType<typeof Tag>

export const Tag = defineComponent({
  name: 'VeTag',

  props: {
    icon: String,
    ...makePaperProps(),
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
          { props.icon && (
            <Icon
              class="ve-tag__icon"
              icon={ props.icon }
              left={ true }
            />
          ) }

          { slots.default?.() }
        </props.tag>
      )
    }
  }
})