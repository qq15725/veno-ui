// Styles
import './styles/ve-button.scss'

// Utils
import { computed, defineComponent } from 'vue'

// Composables
import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeTagProps } from '../../composables/tag'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeRouterProps, useLink } from '../../composables/router'
import { makePositionProps, usePosition } from '../../composables/position'
import { makeSizeProps, useSize, predefinedSizes } from '../../composables/size'
import { makeDimensionProps, useDimension } from '../../composables/dimension'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeRoundedProps, useRounded } from '../../composables/rounded'
import { makeVariantProps, useVariant } from '../../composables/variant'

// Components
import { VeProgress } from '../ve-progress'
import { VeIcon } from '../ve-icon'

export default defineComponent({
  name: 'VeButton',

  props: {
    type: {
      type: String,
      default: 'button',
    },
    icon: [Boolean, String],
    prependIcon: String,
    appendIcon: String,
    stacked: Boolean,
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

    const progressSize = computed(() => {
      return 18 + 4 * Number([-2, -1, 0, 1, 2][predefinedSizes.findIndex(v => v === props.size)])
    })

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag

      return (
        <Tag
          type={ Tag === 'a' ? undefined : props.type }
          class={ [
            {
              've-button': true,
              've-button--active': link.isExactActive?.value,
              've-button--block': props.block,
              've-button--icon': !!props.icon,
              've-button--stacked': props.stacked,
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
          { props.variant !== 'text' && !props.icon && (
            <div class="ve-button__overlay" />
          ) }

          { props.loading && (
            <VeProgress
              class="ve-button__progress"
              size={ progressSize.value }
              width={ 2 }
              indeterminate
            />
          ) }

          { !props.icon && props.prependIcon && (
            <VeIcon
              class="ve-button__icon"
              icon={ props.prependIcon }
              left={ !props.stacked }
            />
          ) }

          { typeof props.icon === 'boolean'
            ? slots.default?.()
            : (
              <VeIcon
                class="ve-button__icon"
                icon={ props.icon }
                size={ props.size }
              />
            )
          }

          { !props.icon && props.appendIcon && (
            <VeIcon
              class="ve-button__icon"
              icon={ props.appendIcon }
              right={ !props.stacked }
            />
          ) }
        </Tag>
      )
    }
  }
})