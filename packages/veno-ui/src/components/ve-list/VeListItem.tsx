// Styles
import './styles/ve-list-item.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeRouterProps, useLink } from '../../composables/router'

// Components
import { VeAvatar } from '../ve-avatar'
import { VeListItemAvatar } from './VeListItemAvatar'
import { VeListItemHeader } from './VeListItemHeader'
import { VeListItemTitle } from './VeListItemTitle'
import { VeListItemSubtitle } from './VeListItemSubtitle'

// Types
export type VeListItem = InstanceType<typeof VeListItem>

export const VeListItem = genericComponent()({
  name: 'VeListItem',

  props: {
    active: Boolean,
    activeColor: {
      type: String,
      default: 'primary',
    },
    activeClass: String,
    link: Boolean,
    subtitle: String,
    title: String,
    prependAvatar: String,
    prependIcon: String,
    appendAvatar: String,
    appendIcon: String,
    ...makeMaterialProps({
      variant: 'text'
    } as const),
    ...makeDisabledProps(),
    ...makeRouterProps(),
  },

  setup (props, { slots, attrs }) {
    const link = useLink(props, attrs)
    const isActive = computed(() => {
      return props.active || link.isExactActive?.value
    })
    const computedProps = computed(() => ({
      ...props,
      color: isActive.value ? props.activeColor ?? props.color : props.color,
    }))
    const { materialClasses, materialStyles } = useMaterial(computedProps, 've-list-item')
    const { disabledClasses } = useDisabled(props, 've-list-item')

    return () => {
      const Tag = link.isLink.value ? 'a' : props.tag
      const hasTitle = (slots.title || props.title)
      const hasSubtitle = (slots.subtitle || props.subtitle)
      const hasHeader = !!(hasTitle || hasSubtitle)
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon)
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon)
      const isClickable = !props.disabled && (link.isClickable.value || props.link)

      return (
        <Tag
          class={ [
            've-list-item',
            {
              've-list-item--active': isActive.value,
              've-list-item--link': isClickable,
              [`${ props.activeClass }`]: isActive.value && props.activeClass,
            },
            materialClasses.value,
            disabledClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
          href={ link.href.value }
          tabindex={ isClickable ? 0 : undefined }
          onClick={ isClickable && link.navigate }
        >
          { isClickable && <div class="ve-list-item__overlay" /> }

          { hasPrepend && (
            slots.prepend
              ? slots.prepend()
              : (
                <VeListItemAvatar left>
                  <VeAvatar
                    color={ false }
                    variant="text"
                    icon={ props.prependIcon }
                    image={ props.prependAvatar }
                  />
                </VeListItemAvatar>
              )
          ) }

          { hasHeader && (
            <VeListItemHeader>
              { hasTitle && (
                <VeListItemTitle>
                  { slots.title
                    ? slots.title()
                    : props.title
                  }
                </VeListItemTitle>
              ) }

              { hasSubtitle && (
                <VeListItemSubtitle>
                  { slots.subtitle
                    ? slots.subtitle()
                    : props.subtitle
                  }
                </VeListItemSubtitle>
              ) }
            </VeListItemHeader>
          ) }

          { slots.default?.() }

          { hasAppend && (
            slots.append
              ? slots.append()
              : (
                <VeListItemAvatar right>
                  <VeAvatar
                    color={ false }
                    variant="text"
                    icon={ props.appendIcon }
                    image={ props.appendAvatar }
                  />
                </VeListItemAvatar>
              )
          ) }
        </Tag>
      )
    }
  },
})