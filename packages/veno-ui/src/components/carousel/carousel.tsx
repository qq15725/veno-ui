// Styles
import './styles/carousel.scss'

// Utils
import { toRef, watch } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeTagProps } from '../../composables/tag'
import { makeGroupProps, useGroup } from '../../composables/group'

// Components
import { CarouselActivator } from './carousel-activator'

// Types
export const CarouselKey = Symbol.for('veno-ui:carousel')

export const Carousel = defineComponent({
  name: 'VeCarousel',

  props: {
    autoplay: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: (value: string | number) => value > 0,
    },
    ...makePaperProps({
      variant: 'text',
      size: undefined,
      density: undefined,
    } as const),
    ...makeGroupProps(),
    ...makeTagProps(),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const { paperStyles, paperClasses } = usePaper(props)
    const { isSelected, select, selected, next, items } = useGroup(props, CarouselKey)

    let slideTimeout: number | undefined

    const restartTimeout = () => {
      slideTimeout && clearTimeout(slideTimeout)
      slideTimeout = undefined
      window.requestAnimationFrame(() => {
        if (!props.autoplay) return
        slideTimeout = window.setTimeout(
          next,
          +props.interval > 0 ? +props.interval : 6000
        )
      })
    }

    watch([
      selected,
      toRef(props, 'autoplay'),
      toRef(props, 'interval')
    ], restartTimeout)

    watch(items, (newItems, oldItems) => {
      if (oldItems.length === 0 && newItems.length === 1) {
        select(newItems[0], true)
      }
    })

    return () => (
      <props.tag
        class={ [
          've-carousel',
          paperClasses.value,
        ] }
        style={ [
          paperStyles.value,
        ] }
      >
        { slots.default?.() }

        <div class="ve-carousel__controls">
          {
            items.value.map(id => (
              <CarouselActivator
                active={ isSelected(id) }
                onClick={ () => select(id, true) }
              />
            ))
          }
        </div>
      </props.tag>
    )
  }
})

export type Carousel = InstanceType<typeof Carousel>