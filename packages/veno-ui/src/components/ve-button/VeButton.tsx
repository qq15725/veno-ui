// Styles
import './styles/ve-button.scss'

// Utils
import { computed, defineComponent } from 'vue'

// Composables
import { makeSheetProps, useSheet } from '../../composables/sheet'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { predefinedSizes } from '../../composables/size'

// Components
import { VeProgress } from '../ve-progress'
import { VeIcon } from '../ve-icon'

export default defineComponent({
  name: 'VeButton',

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
    ...makeSheetProps({
      tag: 'button',
    }),
    ...makeDisabledProps(),
    ...makeLoadingProps(),
    ...makeRouterProps(),
  },

  setup: function (props, { attrs, slots }) {
    const { sheetClasses, sheetStyles } = useSheet(props, 've-button')
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props, 've-button')
    const { disabledClasses } = useDisabled(props, 've-button')

    const progressSize = computed(() => {
      return 18 + 4 * Number([-2, -1, 0, 1, 2][predefinedSizes.findIndex(v => v === props.size)])
    })

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag

      return (
        <Tag
          type={ Tag === 'a' ? undefined : props.type }
          class={ [
            {
              've-button': true,
              've-button--active': link.isExactActive?.value,
              've-button--block': props.block,
              've-button--icon': !!props.icon,
              've-button--stacked': props.stacked,
            },
            sheetClasses.value,
            disabledClasses.value,
            loadingClasses.value,
          ] }
          style={ [
            sheetStyles.value,
          ] }
          disabled={ props.disabled || undefined }
          href={ link.href.value }
          onClick={ props.disabled || link.navigate }
        >
          { props.variant !== 'text' && !props.icon && (
            <div class="ve-button__overlay" />
          ) }

          { props.loading && (
            <VeProgress
              class="ve-button__progress"
              size={ progressSize.value }
              width={ 2 }
              indeterminate
            />
          ) }

          { !props.icon && props.prependIcon && (
            <VeIcon
              class="ve-button__icon"
              icon={ props.prependIcon }
              left={ !props.stacked }
            />
          ) }

          { typeof props.icon === 'boolean'
            ? slots.default ? slots.default() : props.text
            : (
              <VeIcon
                class="ve-button__icon"
                icon={ props.icon }
                size={ props.size }
              />
            ) }

          { !props.icon && props.appendIcon && (
            <VeIcon
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