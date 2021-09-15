// Styles
import './styles/ve-responsive.scss'

// Composables
import { makeDimensionProps, useDimension } from '../../composables/dimensions'

// Utilities
import { defineComponent, computed } from 'vue'

export function useAspectStyles (props: { aspectRatio?: string | number }) {
  return {
    aspectStyles: computed(() => {
      const ratio = Number(props.aspectRatio)

      return ratio
        ? { paddingBottom: String(1 / ratio * 100) + '%' }
        : undefined
    }),
  }
}

export default defineComponent({
  name: 'VeResponsive',

  props: {
    aspectRatio: [String, Number],
    contentClass: String,

    ...makeDimensionProps(),
  },

  setup (props, { slots }) {
    const { dimensionStyles } = useDimension(props)
    const { aspectStyles } = useAspectStyles(props)

    return () => (
      <div class="ve-responsive" style={ dimensionStyles.value }>
        <div class="ve-responsive__sizer" style={ aspectStyles.value } />
        { slots.additional?.() }
        { slots.default && (
          <div class={ ['ve-responsive__content', props.contentClass] }>
            { slots.default() }
          </div>
        ) }
      </div>
    )
  },
})
