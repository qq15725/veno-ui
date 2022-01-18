// Styles
import './styles/link.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { Button } from '../button'

// Types
import type { PropType } from 'vue'

export type Link = InstanceType<typeof Link>

export const Link = defineComponent({
  name: 'VeLink',

  props: {
    underline: {
      type: [Boolean, String] as PropType<boolean | 'hover'>,
      default: 'hover'
    },
    linkIcon: {
      type: String,
      default: 'veno-ui:$link',
    },
    prependIcon: [Boolean, String],
    appendIcon: [Boolean, String],
  },

  setup (props, { slots }) {
    return () => {
      return (
        <Button
          class={ [
            've-link',
            {
              've-link--underline': props.underline === true,
              've-link--underline-hover': props.underline === 'hover',
            }
          ] }
          variant="text"
          ripple={ false }
          overlay={ false }
          prepend-icon={
            props.prependIcon === true
              ? props.linkIcon
              : typeof props.prependIcon === 'string' ? props.prependIcon : undefined
          }
          append-icon={
            props.appendIcon === true
              ? props.linkIcon
              : typeof props.appendIcon === 'string' ? props.appendIcon : undefined
          }
        >
          { slots }
        </Button>
      )
    }
  }
})