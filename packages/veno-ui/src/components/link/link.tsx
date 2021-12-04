// Utils
import { genericComponent } from '../../utils'

// Components
import { Button } from '../button'

// Types
import type { ButtonSlots } from '../button/button'

export type Link = InstanceType<typeof Link>

export const Link = genericComponent<new () => {
  $slots: ButtonSlots
}>()({
  name: 'Link',

  props: {
    //
  },

  setup (props, { slots, attrs }) {
    return () => {
      return (
        <Button
          variant="link"
          { ...attrs }
          v-slots={ slots }
        />
      )
    }
  }
})