// Styles
import './styles/ve-list-item.scss'

// Utils
import { defineComponent, computed } from 'vue'

// Composables
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeDimensionProps, useDimension } from '../../composables/dimensions'
import { makeRoundedProps, useRounded } from '../../composables/rounded'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeVariantProps, useVariant } from '../../composables/variant'

// Components
import VeListItemHeader from './VeListItemHeader'
import VeListItemTitle from './VeListItemTitle'
import VeListItemSubtitle from './VeListItemSubtitle'

export default defineComponent({
  name: 'VeListItem',

  props: {
    active: Boolean,
    activeColor: String,
    activeClass: String,
    link: Boolean,
    subtitle: String,
    title: String,
    ...makeDisabledProps(),
    ...makeBorderProps(),
    ...makeDimensionProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({ variant: 'text' } as const),
  },

  setup (props, { slots, attrs }) {
    const link = useLink(props, attrs)
    const isActive = computed(() => {
      return props.active || link.isExactActive?.value
    })
    const activeColor = props.activeColor ?? props.color
    const variantProps = computed(() => ({
      color: isActive.value ? activeColor : props.color,
      textColor: props.textColor,
      variant: props.variant,
    }))

    const { themeClasses } = useTheme(props)
    const { disabledClasses } = useDisabled(props, 've-list-item')
    const { borderClasses } = useBorder(props, 've-list-item')
    const { colorClasses, colorStyles, variantClasses } = useVariant(variantProps, 've-list-item')
    const { dimensionStyles } = useDimension(props)
    const { roundedClasses } = useRounded(props, 've-list-item')

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
            disabledClasses.value,
            themeClasses.value,
            borderClasses.value,
            colorClasses.value,
            roundedClasses.value,
            variantClasses.value,
          ] }
          style={ [
            colorStyles.value,
            dimensionStyles.value,
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