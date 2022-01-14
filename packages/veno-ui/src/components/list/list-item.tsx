// Styles
import './styles/list-item.scss'

// Utils
import { computed, getCurrentInstance } from 'vue'
import { defineComponent, propIsDefined } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeRouterProps, useLink } from '../../composables/router'

// Components
import { Avatar } from '../avatar'
import { ListItemAvatar } from './list-item-avatar'
import { ListItemHeader } from './list-item-header'
import { ListItemTitle } from './list-item-title'
import { ListItemSubtitle } from './list-item-subtitle'

// Directives
import { Ripple } from '../../directives'

// Types
export type ListItem = InstanceType<typeof ListItem>

export const ListItem = defineComponent({
  name: 'VeListItem',

  directives: { Ripple },

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
    ripple: {
      type: Boolean,
      default: true,
    },
    ...makeMaterialProps({
      variant: 'text',
      size: undefined,
    } as const),
    ...makeDisabledProps(),
    ...makeRouterProps(),
  },

  setup (props, { slots, attrs }) {
    const link = useLink(props, attrs)
    const vm = getCurrentInstance()!
    const isActive = computed(() => {
      if (propIsDefined(vm.vnode, 'active')) return props.active
      return props.active || link.isExactActive?.value
    })
    const computedProps = computed(() => ({
      ...props,
      color: isActive.value ? props.activeColor ?? props.color : props.color,
    }))
    const { materialClasses, materialStyles } = useMaterial(computedProps)
    const { disabledClasses } = useDisabled(props)

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
          v-ripple={ [
            isClickable && props.ripple,
          ] }
        >
          { isClickable && <div class="ve-list-item__overlay" /> }

          { hasPrepend && (
            slots.prepend
              ? slots.prepend()
              : (
                <ListItemAvatar left>
                  <Avatar
                    color={ false }
                    variant="text"
                    density={ props.density }
                    icon={ props.prependIcon }
                    image={ props.prependAvatar }
                  />
                </ListItemAvatar>
              )
          ) }

          { hasHeader && (
            <ListItemHeader>
              { hasTitle && (
                <ListItemTitle>
                  { slots.title
                    ? slots.title()
                    : props.title }
                </ListItemTitle>
              ) }

              { hasSubtitle && (
                <ListItemSubtitle>
                  { slots.subtitle
                    ? slots.subtitle()
                    : props.subtitle }
                </ListItemSubtitle>
              ) }
            </ListItemHeader>
          ) }

          { slots.default?.() }

          { hasAppend && (
            slots.append
              ? slots.append()
              : (
                <ListItemAvatar right>
                  <Avatar
                    color={ false }
                    variant="text"
                    density={ props.density }
                    icon={ props.appendIcon }
                    image={ props.appendAvatar }
                  />
                </ListItemAvatar>
              )
          ) }
        </Tag>
      )
    }
  },
})