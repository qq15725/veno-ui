// Styles
import './styles/button.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

// Components
import { Progress } from '../progress'
import { Icon } from '../icon'

export type Button = InstanceType<typeof Button>

export const Button = genericComponent()({
  name: 'Button',

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
    ...makeMaterialProps({
      tag: 'button',
    }),
    ...makeDisabledProps(),
    ...makeLoadingProps(),
    ...makeRouterProps(),
  },

  setup: function (props, { attrs, slots }) {
    const { materialClasses, materialStyles } = useMaterial(props, 've-button')
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props, 've-button')
    const { disabledClasses } = useDisabled(props, 've-button')

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag

      return (
        <Tag
          role="button"
          type={ Tag === 'a' ? undefined : props.type }
          class={ [
            {
              've-button': true,
              've-button--active': link.isExactActive?.value,
              've-button--block': props.block,
              've-button--icon': !!props.icon,
              've-button--stacked': props.stacked,
            },
            materialClasses.value,
            disabledClasses.value,
            loadingClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
          disabled={ props.disabled || undefined }
          href={ link.href.value }
          onClick={ props.disabled || link.navigate }
        >
          <div class="ve-button__overlay" />

          { props.loading && (
            <Progress
              class="ve-button__icon"
              indeterminate
              width={ 2 }
            />
          ) }

          { !props.loading && !props.icon && props.prependIcon && (
            <Icon
              class="ve-button__icon"
              icon={ props.prependIcon }
              left={ !props.stacked }
            />
          ) }

          { typeof props.icon === 'boolean'
            ? slots.default ? slots.default() : props.text
            : (
              <Icon
                class="ve-button__icon"
                icon={ props.icon }
                size={ props.size }
              />
            ) }

          { !props.icon && props.appendIcon && (
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