// Styles
import './styles/carousel-item.scss'

// Utils
import { Transition, ref, watch } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeGroupItemProps, useGroupItem } from '../../composables/group'
import { makeTagProps } from '../../composables/tag'

// Components
import { CarouselKey } from './carousel'

export const CarouselItem = defineComponent({
  name: 'VeCarouselItem',

  props: {
    ...makeGroupItemProps(),
    ...makeTagProps(),
  },

  setup(props, { slots }) {
    const { isSelected, group } = useGroupItem(props, CarouselKey)
    const { items, selected } = group
    const transition = ref()

    watch(
      () => items.value.findIndex(({ id }) => selected.value.includes(id)),
      (val, oldVal) => {
        transition.value = oldVal > val
          ? 've-carousel-item-x-reverse-transition'
          : 've-carousel-item-x-transition'
      },
    )

    return () => (
      <Transition name={ transition.value }>
        <props.tag
          class="ve-carousel-item"
          v-show={ isSelected.value }
        >
          { slots.default?.() }
        </props.tag>
      </Transition>
    )
  },
})

export type CarouselItem = InstanceType<typeof CarouselItem>
