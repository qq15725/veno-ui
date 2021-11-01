// Styles
import './styles/ve-carousel.scss'

// Utils
import { toRef, watch } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeGroupProps, useGroup } from '../../composables/group'
import { makeTagProps } from '../../composables/tag'

// Types
export const VeCarouselSymbol = Symbol.for('veno-ui:ve-carousel')
export type VeCarousel = InstanceType<typeof VeCarousel>

export const VeCarousel = genericComponent()({
  name: 'VeCarousel',

  props: {
    autoplay: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: (value: string | number) => value > 0,
    },
    ...makeGroupProps(),
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const { isSelected, select, selected, next, items } = useGroup(props, VeCarouselSymbol)

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
        ] }
      >
        { slots.default?.() }

        <div class="ve-carousel__controls">
          {
            items.value.map(id => (
              <div
                class={ [
                  've-carousel__dot',
                  {
                    've-carousel__dot--active': isSelected(id),
                  },
                ] }
                onClick={ () => select(id, true) }
              />
            ))
          }
        </div>
      </props.tag>
    )
  }
})