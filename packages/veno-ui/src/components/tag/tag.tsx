// Styles
import './styles/tag.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper, genOverlays } from '../../composables/paper'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeGroupItemProps, useGroupItem } from '../../composables/group'
import { makeRouterProps, useLink } from '../../composables/router'

// Keys
import { TagGroupKey } from '../tag-group/tag-group'

// Directives
import { Ripple } from '../../directives/ripple'

// Components
import { Avatar } from '../avatar'
import { Button } from '../button'
import { FadeInExpandTransition } from '../transition'

export const Tag = defineComponent({
  name: 'VeTag',

  directives: { Ripple },

  props: {
    activeClass: String,
    appendAvatar: String,
    appendIcon: String,
    closable: Boolean,
    closeIcon: {
      type: String,
      default: '$close',
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    prependAvatar: String,
    prependIcon: String,
    ripple: {
      type: Boolean,
      default: true,
    },
    text: String,
    link: Boolean,
    ...makeLoadingProps(),
    ...makeTransitionProps({
      transition: { component: FadeInExpandTransition },
    } as const),
    ...makePaperProps({
      tag: 'span',
      shape: 'rounded-sm',
      variant: 'contained-text',
    } as const),
    ...makeGroupItemProps(),
    ...makeRouterProps(),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots, attrs }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const { paperClasses, paperStyles } = usePaper(props)
    const { loadingClasses } = useLoading(props)
    const group = useGroupItem(props, TagGroupKey, false)
    const link = useLink(props, attrs)

    function onCloseClick (e: Event) {
      isActive.value = false
    }

    return () => {
      const Tag = (link.isLink.value) ? 'a' : props.tag
      const hasAppend = !!(slots.append || props.appendIcon || props.appendAvatar)
      const hasClose = !!(props.loading || slots.close || props.closable)
      const hasPrepend = !!(slots.prepend || props.prependIcon || props.prependAvatar)
      const isClickable = !props.disabled && (!!group || link.isClickable.value || props.link)
      const onClickFunc = props.link ? props.link : group?.toggle

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <Tag
              class={ [
                've-tag',
                {
                  've-tag--link': isClickable,
                },
                paperClasses.value,
                loadingClasses.value,
                group?.selectedClass.value,
              ] }
              style={ paperStyles.value }
              href={ link.href.value }
              v-ripple={ [isClickable && props.ripple, null] }
              onClick={ isClickable && onClickFunc }
            >
              { genOverlays(isClickable, 've-tag') }

              { hasPrepend && (
                <div class="ve-tag__prepend">
                  { slots.prepend?.() ?? (
                    <Avatar
                      color="inherit"
                      variant="text"
                      icon={ props.prependIcon }
                      image={ props.prependAvatar }
                      size={ props.size }
                      density={ props.density }
                    />
                  ) }
                </div>
              ) }

              { slots.default?.({
                isSelected: group?.isSelected.value,
                selectedClass: group?.selectedClass.value,
                select: group?.select,
                toggle: group?.toggle,
                value: group?.value.value,
                disabled: props.disabled,
              }) ?? props.text }

              { hasAppend && (
                <div class="ve-tag__append">
                  { slots.append?.() ?? (
                    <Avatar
                      color="inherit"
                      variant="text"
                      icon={ props.appendIcon }
                      image={ props.appendAvatar }
                      size={ props.size }
                      density={ props.density }
                    />
                  ) }
                </div>
              ) }

              { hasClose && (
                <div class="ve-tag__close">
                  { slots.close?.({ props: { onClick: onCloseClick } }) ?? (
                    <Button
                      variant="plain"
                      ripple={ false }
                      size={ props.size }
                      loading={ props.loading }
                      icon={ props.closeIcon }
                      onClick={ onCloseClick }
                    />
                  ) }
                </div>
              ) }
            </Tag>
          ) }
        </MaybeTransition>
      )
    }
  }
})

export type Tag = InstanceType<typeof Tag>