// Styles
import './styles/card.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

// Components
import { Avatar } from '../avatar'
import { Divider } from '../divider'
import { Image } from '../image'
import { CardImage } from './card-image'
import { CardAvatar } from './card-avatar'
import { CardHeader } from './card-header'
import { CardHeaderText } from './card-header-text'
import { CardTitle } from './card-title'
import { CardSubtitle } from './card-subtitle'
import { CardText } from './card-text'
import { CardActions } from './card-actions'

export const Card = defineComponent({
  name: 'Card',

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
            <CardImage>
              { slots.image
                ? slots.image?.({ src: props.image })
                : (<Image src={ props.image } cover alt="" />)
              }
            </CardImage>
          ) }

          { slots.media?.() }

          { hasHeader && (
            <CardHeader>
              { hasPrepend && (
                <CardAvatar>
                  { slots.prepend
                    ? slots.prepend()
                    : (<Avatar
                      color={ false }
                      variant="text"
                      icon={ props.prependIcon }
                      image={ props.prependAvatar }
                    />) }
                </CardAvatar>
              ) }

              { hasHeaderText && (
                <CardHeaderText>
                  { hasTitle && (
                    <CardTitle>
                      { slots.title ? slots.title() : props.title }
                    </CardTitle>
                  ) }

                  { hasSubtitle && (
                    <CardSubtitle>
                      { slots.subtitle ? slots.subtitle() : props.subtitle }
                    </CardSubtitle>
                  ) }
                </CardHeaderText>
              ) }

              { hasAppend && (
                <CardAvatar>
                  { slots.append
                    ? slots.append()
                    : (<Avatar
                      color={ false }
                      variant="text"
                      icon={ props.appendIcon }
                      image={ props.appendAvatar }
                    />) }
                </CardAvatar>
              ) }
            </CardHeader>
          ) }

          { props.divider && <Divider /> }

          { hasText && (
            <CardText>
              { slots.text ? slots.text() : props.text }
            </CardText>
          ) }

          { slots.default?.() }

          { slots.actions && props.divider && <Divider /> }

          { slots.actions && (
            <CardActions>{ slots.actions() }</CardActions>
          ) }
        </Tag>
      )
    }
  }
})