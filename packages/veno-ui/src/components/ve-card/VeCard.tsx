import './styles/ve-card.scss'

import { defineComponent } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme';
import { makeLoadingProps, useLoading } from '../../composables/loading';
import { makeDisabledProps, useDisabled } from '../../composables/disabled';
import { makeRouterProps, useLink } from '../../composables/router'
import { makePositionProps, usePosition } from '../../composables/position'
import { makeDimensionProps, useDimension } from '../../composables/dimensions'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeRoundedProps, useRounded } from '../../composables/rounded'
import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeCard',

  props: {
    link: Boolean,
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeLoadingProps(),
    ...makeDisabledProps(),
    ...makeRouterProps(),
    ...makePositionProps(),
    ...makeDimensionProps(),
    ...makeBorderProps(),
    ...makeRoundedProps(),
    ...makeVariantProps(),
  },

  setup (props, { attrs, slots }) {
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props, 've-card')
    const { themeClasses } = useTheme(props)
    const { disabledClasses } = useDisabled(props, 've-card')
    const { positionClasses, positionStyles } = usePosition(props, 've-card')
    const { dimensionStyles } = useDimension(props)
    const { borderClasses } = useBorder(props, 've-card')
    const { roundedClasses } = useRounded(props, 've-card')
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-card')
    const isClickable = !props.disabled && (link.isClickable.value || props.link)

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag

      return (
        <Tag
          class={ [
            've-card',
            {
              've-card--link': isClickable,
            },
            themeClasses.value,
            loadingClasses.value,
            disabledClasses.value,
            positionClasses.value,
            borderClasses.value,
            roundedClasses.value,
            colorClasses.value,
            variantClasses.value,
          ] }
          style={ [
            positionStyles.value,
            dimensionStyles.value,
            colorStyles.value,
          ] }
          disabled={ props.disabled || undefined }
          href={ link.href.value }
          onClick={ props.disabled || link.navigate }
        >
          { slots.default?.() }
        </Tag>
      )
    }
  }
})