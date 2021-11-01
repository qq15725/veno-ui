// Styles
import './styles/ve-responsive.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeDimensionProps, useDimension } from '../../composables/dimension'

// Components
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

// Types
export type VeResponsive = InstanceType<typeof VeResponsive>

export const VeResponsive = genericComponent()({
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
