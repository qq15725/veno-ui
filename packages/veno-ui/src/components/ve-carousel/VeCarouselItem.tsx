// Styles
import './styles/ve-carousel.scss'

// Utils
import { watch, ref } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { Transition } from 'vue'
import { makeGroupItemProps, useGroupItem } from '../../composables/group'
import { makeTagProps } from '../../composables/tag'

// Components
import { VeCarouselSymbol } from './VeCarousel'

// Types
export type VeCarouselItem = InstanceType<typeof VeCarouselItem>

export const VeCarouselItem = genericComponent()({
  name: 'VeCarouselItem',

  props: {
    ...makeGroupItemProps(),
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const { isSelected, group } = useGroupItem(props, VeCarouselSymbol)
    const transitionName = ref()

    watch(group.selected, (newSelected, oldSelected) => {
      if (oldSelected[0] > newSelected[0]) {
        transitionName.value = 've-carousel-x-reverse-transition'
      } else {
        transitionName.value = 've-carousel-x-transition'
      }
    })

    return () => (
      <Transition name={ transitionName.value }>
        <props.tag
          class={ [
            've-carousel-item',
          ] }
          v-show={ isSelected.value }
        >
          { slots.default?.() }
        </props.tag>
      </Transition>
    )
  }
})