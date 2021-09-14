import './styles/ve-btn.scss'

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
  name: 'VeBtn',

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
    const { loadingClasses } = useLoading(props, 've-btn')
    const { disabledClasses } = useDisabled(props, 've-btn')
    const { positionClasses, positionStyles } = usePosition(props, 've-btn')
    const { sizeClasses, sizeStyles } = useSize(props, 've-btn')
    const { dimensionStyles } = useDimension(props)
    const { borderClasses } = useBorder(props, 've-btn')
    const { roundedClasses } = useRounded(props, 've-btn')
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-btn')

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag

      return (
        <Tag
          type={ Tag === 'a' ? undefined : 'button' }
          class={ [
            {
              've-btn': true,
              've-btn--active': link.isExactActive?.value,
              've-btn--block': props.block,
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
          { props.variant !== 'text' && <div class="ve-btn__overlay" /> }

          <span>{ slots.default?.() }</span>
        </Tag>
      )
    }
  }
})