// Styles
import './styles/ve-carousel.scss'

// Utils
import { defineComponent, watch, ref } from 'vue'

// Composables
import { Transition } from 'vue'
import { makeGroupItemProps, useGroupItem } from '../../composables/group'
import { makeTagProps } from '../../composables/tag'

// Components
import { VeCarouselSymbol } from './VeCarousel'

export default defineComponent({
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