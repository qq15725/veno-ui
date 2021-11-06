// Styles
import './styles/ve-card.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

// Components
import { VeAvatar } from '../ve-avatar'
import { VeDivider } from '../ve-divider'
import { VeImage } from '../ve-image'
import { VeCardImage } from './VeCardImage'
import { VeCardAvatar } from './VeCardAvatar'
import { VeCardHeader } from './VeCardHeader'
import { VeCardHeaderText } from './VeCardHeaderText'
import { VeCardTitle } from './VeCardTitle'
import { VeCardSubtitle } from './VeCardSubtitle'
import { VeCardText } from './VeCardText'
import { VeCardActions } from './VeCardActions'

export const VeCard = defineComponent({
  name: 'VeCard',

  props: {
    link: Boolean,
    hover: Boolean,
    image: String,
    prependAvatar: String,
    prependIcon: String,
    appendAvatar: String,
    appendIcon: String,
    title: String,
    subtitle: String,
    divider: Boolean,
    text: String,
    ...makeMaterialProps({
      size: null,
      density: null,
    }),
    ...makeRouterProps(),
    ...makeLoadingProps(),
    ...makeDisabledProps(),
  },

  setup (props, { attrs, slots }) {
    const { materialClasses, materialStyles } = useMaterial(props, 've-card')
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props, 've-card')
    const { disabledClasses } = useDisabled(props, 've-card')

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag
      const hasImage = !!(slots.image || props.image)
      const hasTitle = !!(slots.title || props.title)
      const hasSubtitle = !!(slots.subtitle || props.subtitle)
      const hasHeaderText = hasTitle || hasSubtitle
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon)
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon)
      const hasHeader = hasHeaderText || hasPrepend || hasAppend
      const hasText = !!(slots.text || props.text)
      const isClickable = !props.disabled && (link.isClickable.value || props.link)

      return (
        <Tag
          class={ [
            've-card',
            {
              've-card--hover': props.hover && !props.disabled,
              've-card--link': isClickable,
            },
            materialClasses.value,
            loadingClasses.value,
            disabledClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
          href={ link.href.value }
          onClick={ isClickable && link.navigate }
        >
          { isClickable && <div class="ve-card__overlay" /> }

          { hasImage && (
            <VeCardImage>
              { slots.image
                ? slots.image?.({ src: props.image })
                : (<VeImage src={ props.image } cover alt="" />)
              }
            </VeCardImage>
          ) }

          { slots.media?.() }

          { hasHeader && (
            <VeCardHeader>
              { hasPrepend && (
                <VeCardAvatar>
                  { slots.prepend
                    ? slots.prepend()
                    : (<VeAvatar
                      icon={ props.prependIcon }
                      image={ props.prependAvatar }
                    />) }
                </VeCardAvatar>
              ) }

              { hasHeaderText && (
                <VeCardHeaderText>
                  { hasTitle && (
                    <VeCardTitle>
                      { slots.title ? slots.title() : props.title }
                    </VeCardTitle>
                  ) }

                  { hasSubtitle && (
                    <VeCardSubtitle>
                      { slots.subtitle ? slots.subtitle() : props.subtitle }
                    </VeCardSubtitle>
                  ) }
                </VeCardHeaderText>
              ) }

              { hasAppend && (
                <VeCardAvatar>
                  { slots.append
                    ? slots.append()
                    : (<VeAvatar
                      icon={ props.appendIcon }
                      image={ props.appendAvatar }
                    />) }
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