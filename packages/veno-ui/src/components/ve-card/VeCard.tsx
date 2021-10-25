// Styles
import './styles/ve-card.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme';
import { makeLoadingProps, useLoading } from '../../composables/loading';
import { makeDisabledProps, useDisabled } from '../../composables/disabled';
import { makeRouterProps, useLink } from '../../composables/router'
import { makePositionProps, usePosition } from '../../composables/position'
import { makeDimensionProps, useDimension } from '../../composables/dimension'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeRoundedProps, useRounded } from '../../composables/rounded'
import { makeVariantProps, useVariant } from '../../composables/variant'
import { makeElevationProps, useElevation } from '../../composables/elevation'

// Components
import { VeAvatar } from '../ve-avatar'
import VeCardHeader from './VeCardHeader'
import VeCardHeaderText from './VeCardHeaderText'
import VeCardAvatar from './VeCardAvatar'
import VeCardTitle from './VeCardTitle'
import VeCardSubtitle from './VeCardSubtitle'
import { VeDivider } from '../ve-divider'
import VeCardText from './VeCardText'
import VeCardActions from './VeCardActions'

export default defineComponent({
  name: 'VeCard',

  props: {
    link: Boolean,
    appendAvatar: String,
    prependAvatar: String,
    title: String,
    subtitle: String,
    divider: Boolean,
    text: String,
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
    ...makeElevationProps(),
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
    const { elevationClasses } = useElevation(props)

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag
      const hasTitle = !!(slots.title || props.title)
      const hasSubtitle = !!(slots.subtitle || props.subtitle)
      const hasHeaderText = hasTitle || hasSubtitle
      const hasAppend = !!(slots.append || props.appendAvatar)
      const hasPrepend = !!(slots.prepend || props.prependAvatar)
      const hasHeader = hasHeaderText || hasPrepend || hasAppend
      const hasText = !!(slots.text || props.text)
      const isClickable = !props.disabled && (link.isClickable.value || props.link)

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
            elevationClasses.value,
          ] }
          style={ [
            positionStyles.value,
            dimensionStyles.value,
            colorStyles.value,
          ] }
          href={ link.href.value }
          onClick={ isClickable && link.navigate }
        >
          { hasHeader && (
            <VeCardHeader>
              { hasPrepend && (
                <VeCardAvatar>
                  { slots.prepend
                    ? slots.prepend()
                    : (
                      <VeAvatar
                        image={ props.prependAvatar }
                      />
                    )
                  }
                </VeCardAvatar>
              ) }

              { hasHeaderText && (
                <VeCardHeaderText>
                  { hasTitle && (
                    <VeCardTitle>
                      { slots.title ? slots.title() : props.title }
                    </VeCardTitle>
                  ) }

                  {
                    hasSubtitle && (
                      <VeCardSubtitle>
                        { slots.subtitle ? slots.subtitle() : props.subtitle }
                      </VeCardSubtitle>
                    )
                  }
                </VeCardHeaderText>
              ) }

              { hasAppend && (
                <VeCardAvatar>
                  { slots.append
                    ? slots.append()
                    : (
                      <VeAvatar
                        image={ props.appendAvatar }
                      />
                    )
                  }
                </VeCardAvatar>
              ) }
            </VeCardHeader>
          ) }

          { props.divider && <VeDivider /> }

          { hasText && (
            <VeCardText>
              { slots.text ? slots.text() : props.text }
            </VeCardText>
          ) }

          { slots.default?.() }

          { slots.actions && props.divider && <VeDivider /> }

          { slots.actions && (
            <VeCardActions>{ slots.actions() }</VeCardActions>
          ) }
        </Tag>
      )
    }
  }
})