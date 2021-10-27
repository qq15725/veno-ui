// Styles
import './styles/ve-list-item.scss'

// Utils
import { defineComponent, computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeRouterProps, useLink } from '../../composables/router'

// Components
import VeListItemHeader from './VeListItemHeader'
import VeListItemTitle from './VeListItemTitle'
import VeListItemSubtitle from './VeListItemSubtitle'

export const VeListItem = genericComponent()({
  name: 'VeListItem',

  props: {
    active: Boolean,
    activeColor: String,
    activeClass: String,
    link: Boolean,
    subtitle: String,
    title: String,
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
    const activeColor = props.activeColor ?? props.color
    const computedProps = computed(() => ({
      color: isActive.value ? activeColor : props.color,
      ...props,
    }))
    const { materialClasses, materialStyles } = useMaterial(computedProps, 've-list-item')
    const { disabledClasses } = useDisabled(props, 've-list-item')

    return () => {
      const Tag = (link.isLink.value) ? 'a' : props.tag
      const hasTitle = (slots.title || props.title)
      const hasSubtitle = (slots.subtitle || props.subtitle)
      const hasHeader = !!(hasTitle || hasSubtitle)
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
        </Tag>
      )
    }
  },
})

export type VeListItem = InstanceType<typeof VeListItem>