import './styles/ve-button.scss'

import { defineComponent } from 'vue'

import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeTagProps } from '../../composables/tag'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeRouterProps, useLink } from '../../composables/router'
import { makePositionProps, usePosition } from '../../composables/position'
import { makeSizeProps, useSize } from '../../composables/size'
import { makeDimensionProps, useDimension } from '../../composables/dimensions'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeRoundedProps, useRounded } from '../../composables/rounded'
import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeButton',

  props: {
    block: Boolean,
    ...makeThemeProps(),
    ...makeTagProps({
      tag: 'button',
    }),
    ...makeDisabledProps(),
    ...makeLoadingProps(),
    ...makeRouterProps(),
    ...makePositionProps(),
    ...makeSizeProps(),
    ...makeDimensionProps(),
    ...makeBorderProps(),
    ...makeRoundedProps(),
    ...makeVariantProps(),
  },

  setup: function (props, { attrs, slots }) {
    const link = useLink(props, attrs)
    const { themeClasses } = useTheme(props)
    const { loadingClasses } = useLoading(props, 've-button')
    const { disabledClasses } = useDisabled(props, 've-button')
    const { positionClasses, positionStyles } = usePosition(props, 've-button')
    const { sizeClasses, sizeStyles } = useSize(props, 've-button')
    const { dimensionStyles } = useDimension(props)
    const { borderClasses } = useBorder(props, 've-button')
    const { roundedClasses } = useRounded(props, 've-button')
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-button')

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag

      return (
        <Tag
          type={ Tag === 'a' ? undefined : 'button' }
          class={ [
            {
              've-button': true,
              've-button--active': link.isExactActive?.value,
              've-button--block': props.block,
            },
            themeClasses.value,
            disabledClasses.value,
            loadingClasses.value,
            positionClasses.value,
            sizeClasses.value,
            borderClasses.value,
            roundedClasses.value,
            colorClasses.value,
            variantClasses.value,
          ] }
          style={ [
            positionStyles.value,
            sizeStyles.value,
            dimensionStyles.value,
            colorStyles.value,
          ] }
          disabled={ props.disabled || undefined }
          href={ link.href.value }
          onClick={ props.disabled || link.navigate }
        >
          { props.variant !== 'text' && <div class="ve-button__overlay" /> }

          <span>{ slots.default?.() }</span>
        </Tag>
      )
    }
  }
})