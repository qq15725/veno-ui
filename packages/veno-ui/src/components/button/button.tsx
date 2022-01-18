// Styles
import './styles/button.scss'

// Utils
import { computed } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeGroupItemProps, useGroupItem } from '../../composables/group'

// Components
import { Progress } from '../progress'
import { Icon } from '../icon'

// Directives
import { Ripple } from '../../directives/ripple'

// Symbols
import { ButtonToggleKey } from '../button-toggle/button-toggle'

// Types
export type Button = InstanceType<typeof Button>

export const Button = defineComponent({
  name: 'VeButton',

  directives: { Ripple },

  props: {
    type: {
      type: String,
      default: 'button',
    },
    icon: [Boolean, String],
    prependIcon: String,
    appendIcon: String,
    stacked: Boolean,
    block: Boolean,
    text: String,
    ripple: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    ...makeDisabledProps(),
    ...makeLoadingProps(),
    ...makeRouterProps(),
    ...makeGroupItemProps(),
    ...makePaperProps({
      tag: 'button',
    }),
  },

  emits: {
    click: (e: Event) => true
  },

  setup: function (props, { attrs, slots, emit }) {
    const { paperClasses, paperStyles } = usePaper(props)
    const isDisabled = computed(() => {
      return group?.disabled.value || props.disabled || props.loading
    })
    const { loadingClasses } = useLoading(props)
    const { disabledClasses } = useDisabled(computed(() => ({
      disabled: group?.disabled.value || props.disabled
    })))
    const group = useGroupItem(props, ButtonToggleKey, false)
    const link = useLink(props, attrs)
    const handleClick = (e: Event) => {
      if (isDisabled.value) {
        e.preventDefault()
        return
      }
      link.navigate ? link.navigate() : group?.toggle
      emit('click', e)
    }

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag
      const hasLoding = props.loading
      const hasPrependIcon = !hasLoding && !props.icon && props.prependIcon
      const hasDefault = !hasLoding || !props.icon
      const hasAppendIcon = !hasLoding && !props.icon && props.appendIcon
      return (
        <Tag
          role={ link.isLink.value ? undefined : 'button' }
          aria-disabled={ props.disabled || undefined }
          type={ link.isLink.value ? undefined : props.type }
          class={ [
            've-button',
            group?.selectedClass.value,
            paperClasses.value,
            disabledClasses.value,
            loadingClasses.value,
            {
              've-button--active': link.isExactActive?.value,
              've-button--block': props.block,
              've-button--stacked': props.stacked,
              've-button--icon': !!props.icon,
            },
          ] }
          style={ [
            paperStyles.value,
          ] }
          disabled={ props.disabled || undefined }
          href={ link.href.value }
          onClick={ handleClick }
          v-ripple={ [
            !isDisabled.value && props.ripple,
            null,
            props.icon ? ['center'] : null,
          ] }
        >
          { props.overlay && <div class="ve-button__overlay" /> }

          { hasLoding && (
            <Progress
              class="ve-button__icon"
              color="currentColor"
              indeterminate
              variant="circular"
              stroke-width={ 2 }
              left={ !props.stacked && props.icon === false }
            />
          ) }

          { hasPrependIcon && (
            <Icon
              class="ve-button__icon"
              icon={ props.prependIcon }
              left={ !props.stacked }
            />
          ) }

          { hasDefault && (
            typeof props.icon === 'boolean'
              ? props.text ?? slots.default?.()
              : <Icon
                class="ve-button__icon"
                icon={ props.icon }
                size={ props.size }
              />
          ) }

          { hasAppendIcon && (
            <Icon
              class="ve-button__icon"
              icon={ props.appendIcon }
              right={ !props.stacked }
            />
          ) }
        </Tag>
      )
    }
  }
})