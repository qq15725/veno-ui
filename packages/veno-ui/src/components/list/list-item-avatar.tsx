// Styles
import './styles/list-item-avatar.scss'

// Composables
import { makeTagProps } from '../../composables/tag'

// Utils
import { genericComponent } from '../../utils'

// Types
export type ListItemAvatar = InstanceType<typeof ListItemAvatar>

export const ListItemAvatar = genericComponent()({
  name: 'VeListItemAvatar',

  props: {
    left: Boolean,
    right: Boolean,
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    return () => {
      return (
        <props.tag
          class={ [
            've-list-item-avatar',
            {
              've-list-item-avatar--start': props.left,
              've-list-item-avatar--end': props.right,
            },
          ] }
          v-slots={ slots }
        />
      )
    }
  },
})