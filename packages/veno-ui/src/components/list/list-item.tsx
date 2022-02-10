// Styles
import './styles/list-item.scss'

// Utils
import { computed, onMounted } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { useList } from './composables/list'
import { makePaperProps, usePaper, genOverlays } from '../../composables/paper'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeRouterProps, useLink } from '../../composables/router'
import { useNestedItem } from '../../composables/nested'

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
    appendAvatar: String,
    appendIcon: String,
    link: Boolean,
    prependAvatar: String,
    prependIcon: String,
    ripple: {
      type: Boolean,
      default: true,
    },
    subtitle: String,
    text: String,
    title: String,
    value: null,
    ...makePaperProps({
      variant: 'text',
      size: undefined,
    } as const),
    ...makeDisabledProps(),
    ...makeRouterProps(),
  },

  setup (props, { slots, attrs }) {
    const link = useLink(props, attrs)
    const id = computed(() => props.value ?? link.href.value)
    const { activate, isActive: isNestedActive, select, isSelected, root, parent } = useNestedItem(id)
    const list = useList()
    const isActive = computed(() => props.active || link.isExactActive?.value || isNestedActive.value)
    const { paperClasses, paperStyles } = usePaper(computed(() => ({
      ...props,
      color: isActive.value ? props.activeColor ?? props.color : props.color,
    })))
    const { disabledClasses } = useDisabled(props)

    onMounted(() => {
      if (link.isExactActive?.value && parent.value != null) {
        root.open(parent.value, true)
      }
    })

    const slotProps = computed(() => ({
      isActive: isActive.value,
      activate,
      select,
      isSelected: isSelected.value,
    }))

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
          onClick={ isClickable && ((e: MouseEvent) => {
            link.navigate?.(e)
            props.value != null && activate(!isNestedActive.value, e)
          })}
          v-ripple={ isClickable && props.ripple }
        >
          { genOverlays(isClickable, 've-list-item') }

          { hasPrepend && (
            slots.prepend?.(slotProps.value) ?? (
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
                <ListItemTitle>
                  { slots.title?.({ title: props.title }) ?? props.title }
                </ListItemTitle>
              ) }

              { hasSubtitle && (
                <ListItemSubtitle>
                  { slots.subtitle?.({ subtitle: props.subtitle }) ?? props.subtitle }
                </ListItemSubtitle>
              ) }

              { hasText && (
                <div>{ slots.text?.({ text: props.text }) ?? props.text }</div>
              ) }
            </ListItemHeader>
          ) }

          { slots.default?.(slotProps.value) }

          { hasAppend && (
            slots.append?.(slotProps.value) ?? (
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