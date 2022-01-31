// Styles
import './styles/card.scss'

// Utils
import { defineComponent, propsFactory, pick } from '../../utils'

// Composables
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makePaperProps, usePaper, genOverlays } from '../../composables/paper'

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

// Directives
import { Ripple } from '../../directives'

export function filterCardProps (props: Record<string, any>) {
  return pick(props, Object.keys(Card.props) as any)
}

export const makeCardProps = propsFactory({
  link: Boolean,
  hover: Boolean,
  image: String,
  prependAvatar: String,
  prependIcon: String,
  appendAvatar: String,
  appendIcon: String,
  title: String,
  subtitle: String,
  divided: Boolean,
  text: String,
  ripple: {
    type: Boolean,
    default: true,
  },
  ...makeRouterProps(),
  ...makeLoadingProps(),
  ...makeDisabledProps(),
  ...makePaperProps({
    shape: 'rounded',
  } as const),
}, 'card')

export const Card = defineComponent({
  name: 'VeCard',

  directives: { Ripple },

  props: makeCardProps(),

  setup (props, { attrs, slots }) {
    const { paperClasses, paperStyles } = usePaper(props)
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props)
    const { disabledClasses } = useDisabled(props)

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag
      const hasImage = !!(slots.image || props.image)
      const hasTitle = !!(slots.title || props.title)
      const hasSubtitle = !!(slots.subtitle || props.subtitle)
      const hasHeaderText = !!slots.headerText || hasTitle || hasSubtitle
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon)
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon)
      const hasHeader = !!slots.header || hasHeaderText || hasPrepend || hasAppend
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
            paperClasses.value,
            loadingClasses.value,
            disabledClasses.value,
          ] }
          style={ paperStyles.value }
          href={ link.href.value }
          onClick={ isClickable && link.navigate }
          v-ripple={ [
            isClickable && props.ripple,
          ] }
        >
          { genOverlays(isClickable, 've-card') }

          { hasImage && (
            <CardImage>
              { slots.image?.({ src: props.image }) ?? (
                <Image src={ props.image } cover />
              ) }
            </CardImage>
          ) }

          { slots.media?.() }

          { hasHeader && (
            <CardHeader>
              { slots.header?.() ?? (
                <>
                  { hasPrepend && (
                    <CardAvatar>
                      { slots.prepend?.() ?? (
                        <Avatar
                          density={ props.density }
                          icon={ props.prependIcon }
                          image={ props.prependAvatar }
                        />
                      ) }
                    </CardAvatar>
                  ) }

                  { hasHeaderText && (
                    <CardHeaderText>
                      { slots.headerText?.() ?? (
                        <>
                          { hasTitle && (
                            <CardTitle>{ slots.title?.() ?? props.title }</CardTitle>
                          ) }

                          { hasSubtitle && (
                            <CardSubtitle>{ slots.subtitle?.() ?? props.subtitle }</CardSubtitle>
                          ) }
                        </>
                      ) }
                    </CardHeaderText>
                  ) }

                  { hasAppend && (
                    <CardAvatar>
                      { slots.append?.() ?? (
                        <Avatar
                          density={ props.density }
                          icon={ props.appendIcon }
                          image={ props.appendAvatar }
                        />
                      ) }
                    </CardAvatar>
                  ) }
                </>
              ) }
            </CardHeader>
          ) }

          { props.divided && <Divider /> }

          { hasText && <CardText>{ slots.text?.() ?? props.text }</CardText> }

          { slots.default?.() }

          { slots.actions && props.divided && <Divider /> }

          { slots.actions && <CardActions>{ slots.actions() }</CardActions> }
        </Tag>
      )
    }
  },
})