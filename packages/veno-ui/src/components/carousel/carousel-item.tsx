// Styles
import './styles/carousel-item.scss'

// Utils
import { watch, ref } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { Transition } from 'vue'
import { makeGroupItemProps, useGroupItem } from '../../composables/group'
import { makeTagProps } from '../../composables/tag'

// Components
import { CarouselSymbol } from './carousel'

// Types
export type CarouselItem = InstanceType<typeof CarouselItem>

export const CarouselItem = genericComponent()({
  name: 'VeCarouselItem',

  props: {
    ...makeGroupItemProps(),
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const { isSelected, group } = useGroupItem(props, CarouselSymbol)
    const transitionName = ref()

    watch(group.selected, (newSelected, oldSelected) => {
      if (oldSelected[0] > newSelected[0]) {
        transitionName.value = 've-carousel-item-x-reverse-transition'
      } else {
        transitionName.value = 've-carousel-item-x-transition'
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