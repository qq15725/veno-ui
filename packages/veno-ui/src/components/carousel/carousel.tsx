// Styles
import './styles/carousel.scss'

// Utils
import { toRef, watch } from 'vue'
import { createSymbol, defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeGroupProps, useGroup } from '../../composables/group'

// Components
import { CarouselActivator } from './carousel-activator'

// Keys
export const CarouselKey = createSymbol('carousel')

export const Carousel = defineComponent({
  name: 'VeCarousel',

  props: {
    /**
     * @zh 自动播放
     */
    autoplay: Boolean,

    /**
     * @zh 播放的时间间隔
     */
    interval: {
      type: [Number, String],
      default: 6000,
      validator: (value: string | number) => value > 0,
    },
    ...makeGroupProps({
      mandatory: 'force',
    } as const),
    ...makePaperProps({
      variant: 'text',
      size: undefined,
      density: undefined,
    } as const),
  },

  emits: {
    'update:modelValue': (_value: any) => true,
  },

  setup(props, { slots }) {
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
          +props.interval > 0 ? +props.interval : 6000,
        )
      })
    }

    watch([
      selected,
      toRef(props, 'autoplay'),
      toRef(props, 'interval'),
    ], restartTimeout)

    return () => (
      <props.tag
        class={ [
          've-carousel',
          paperClasses.value,
        ] }
        style={ paperStyles.value }
      >
        { slots.default?.() }

        <div class="ve-carousel__controls">
          { items.value.map(v => (
            <CarouselActivator
              active={ isSelected(v.id) }
              onClick={ () => select(v.id, true) }
            />
          )) }
        </div>
      </props.tag>
    )
  },
})

export type Carousel = InstanceType<typeof Carousel>
