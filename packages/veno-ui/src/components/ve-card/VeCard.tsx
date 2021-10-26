// Styles
import './styles/ve-card.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeSheetProps, useSheet } from '../../composables/sheet'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

// Components
import { VeAvatar } from '../ve-avatar'
import { VeDivider } from '../ve-divider'
import VeCardHeader from './VeCardHeader'
import VeCardHeaderText from './VeCardHeaderText'
import VeCardAvatar from './VeCardAvatar'
import VeCardTitle from './VeCardTitle'
import VeCardSubtitle from './VeCardSubtitle'
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
    ...makeSheetProps(),
    ...makeRouterProps(),
    ...makeLoadingProps(),
    ...makeDisabledProps(),
  },

  setup (props, { attrs, slots }) {
    const { sheetClasses, sheetStyles } = useSheet(props, 've-card')
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props, 've-card')
    const { disabledClasses } = useDisabled(props, 've-card')

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
            sheetClasses.value,
            loadingClasses.value,
            disabledClasses.value,
          ] }
          style={ [
            sheetStyles.value,
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
                    : (
                      <VeAvatar
                        image={ props.appendAvatar }
                      />
                    ) }
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