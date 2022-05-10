// Styles
import './styles/list-item-avatar.scss'

// Components
import { Avatar } from '../avatar'

// Composables
import { makeAvatarProps } from '../avatar/avatar'

// Utils
import { defineComponent } from '../../utils'

// Types
export const ListItemAvatar = defineComponent({
  name: 'VeListItemAvatar',

  props: makeAvatarProps(),

  setup(props, { slots }) {
    return () => {
      return (
        <Avatar
          class={ [
            've-list-item-avatar',
            {
              've-list-item-avatar--start': props.start,
              've-list-item-avatar--end': props.end,
            },
          ] }
          { ...props }
          v-slots={ slots }
        />
      )
    }
  },
})

export type ListItemAvatar = InstanceType<typeof ListItemAvatar>
