// Styles
import './styles/ve-list-item-avatar.scss'

// Composables
import { makeTagProps } from '../../composables/tag'

// Utils
import { genericComponent } from '../../utils'

export const VeListItemAvatar = genericComponent()({
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

export type VeListItemAvatar = InstanceType<typeof VeListItemAvatar>