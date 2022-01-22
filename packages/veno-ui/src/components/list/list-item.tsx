// Styles
import './styles/list-item.scss'

// Utils
import { computed, getCurrentInstance } from 'vue'
import { defineComponent, propIsDefined } from '../../utils'

// Composables
import { useList } from './composables/list'
import { makePaperProps, usePaper } from '../../composables/paper'
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
    ...makePaperProps({
      variant: 'text',
      size: undefined,
    } as const),
    ...makeDisabledProps(),
    ...makeRouterProps(),
  },

  setup (props, { slots, attrs }) {
    const list = useList()
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
    const { paperClasses, paperStyles } = usePaper(computedProps)
    const { disabledClasses } = useDisabled(props)

    return () => {
      const Tag = link.isLink.value ? 'a' : props.tag
      const hasTitle = (slots.title || props.title)
      const hasSubtitle = (slots.subtitle || props.subtitle)
      const hasHeader = !!(hasTitle || hasSubtitle)
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon)
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon)
      const isClickable = !props.disabled && (link.isClickable.value || props.link)

      list?.updateHasPrepend(hasPrepend)

      return (
        <Tag
          class={ [
            've-list-item',
            {
              've-list-item--active': isActive.value,
              've-list-item--disabled': props.disabled,
              've-list-item--link': isClickable,
              've-list-item--prepend': !hasPrepend && list?.hasPrepend.value,
              [`${ props.activeClass }`]: isActive.value && props.activeClass,
            },
            paperClasses.value,
            disabledClasses.value,
          ] }
          style={ [
            paperStyles.value,
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
            slots.prepend?.() ?? (
              <ListItemAvatar left>
                <Avatar
                  color={ false }
                  variant="text"
                  shape="round"
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
                  { slots.title?.() ?? props.title }
                </ListItemTitle>
              ) }

              { hasSubtitle && (
                <ListItemSubtitle>
                  { slots.subtitle?.() ?? props.subtitle }
                </ListItemSubtitle>
              ) }
            </ListItemHeader>
          ) }

          { slots.default?.() }

          { hasAppend && (
            slots.append?.() ?? (
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