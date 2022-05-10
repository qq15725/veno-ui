// Styles
import './styles/carousel-activator.scss'

// Utils
import { genericComponent } from '../../utils'

// Types
export type CarouselActivator = InstanceType<typeof CarouselActivator>

export const CarouselActivator = genericComponent()({
  name: 'VeCarouselActivator',

  props: {
    // TODO variant: 'dot' | 'line' | 'slider'
    active: Boolean,
  },

  setup(props) {
    return () => (
      <div
        className={ [
          've-carousel-activator',
          {
            've-carousel-activator--active': props.active,
          },
        ] }
      />
    )
  },
})
