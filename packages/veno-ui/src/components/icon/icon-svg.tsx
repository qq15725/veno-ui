// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeIconSetProps } from '../../composables/icon/make-icon-props'

export const IconSvg = defineComponent({
  name: 'VeIconSvg',

  props: {
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
    ...makeIconSetProps(),
  },

  setup (props) {
    return () => {
      const isString = typeof props.icon === 'string'

      return (
        <props.tag>
          { isString ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={ props.viewBox }
              role="img"
              aria-hidden="true"
            >
              <path d={ props.icon as string } />
            </svg>
          ) : (
            <props.icon
              role="img"
              aria-hidden="true"
            />
          ) }
        </props.tag>
      )
    }
  },
})
