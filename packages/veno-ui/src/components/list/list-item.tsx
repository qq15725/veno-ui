// Styles
import './styles/list-item.scss'

// Utils
import { computed, getCurrentInstance } from 'vue'
import { genericComponent, propIsDefined } from '../../utils'

// Composables
import { useList } from './composables/list'
import { makePaperProps, usePaper, genOverlays } from '../../composables/paper'
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
import type { MakeSlots } from '../../utils'

type ListItemSlot = {
  isActive: boolean
  activate: (value: boolean) => void
  isSelected: boolean
  select: (value: boolean) => void
}

export type ListItemTitleSlot = {
  title?: string
}

export type ListItemSubtitleSlot = {
  subtitle?: string
}

export const ListItem = genericComponent<new () => {
  $slots: MakeSlots<{
    prepend: [ListItemSlot]
    append: [ListItemSlot]
    default: [ListItemSlot]
    title: [ListItemTitleSlot]
    subtitle: [ListItemSubtitleSlot]
  }>
}>()({
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
    title: String,
    subtitle: String,
    text: String,
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
      const hasText = (slots.text || props.text)
      const hasHeader = !!(hasText || hasTitle || hasSubtitle)
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon)
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon)
      const isClickable = !props.disabled && (link.isClickable.value || props.link)

      list?.updateHasPrepend(hasPrepend)

      return (
        <Tag
          class={ [
            've-list-item',
            {
              've-list-item--active': isActive.value,
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
          { genOverlays(isClickable, 've-list-item') }

          { hasPrepend && (
            slots.prepend?.() ?? (
              <ListItemAvatar left>
                <Avatar
                  color="inherit"
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
                <ListItemTitle>{ slots.title?.() ?? props.title }</ListItemTitle>
              ) }

              { hasSubtitle && (
                <ListItemSubtitle>{ slots.subtitle?.() ?? props.subtitle }</ListItemSubtitle>
              ) }

              { hasText && (
                <div>{ slots.text?.() ?? props.text }</div>
              ) }
            </ListItemHeader>
          ) }

          { slots.default?.() }

          { hasAppend && (
            slots.append?.() ?? (
              <ListItemAvatar right>
                <Avatar
                  color="inherit"
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

export type ListItem = InstanceType<typeof ListItem>