// Styles
import './styles/input-wrapper.scss'

// Utils
import { genericComponent, propsFactory } from '../../utils'

// Components
import { Icon } from '../icon'

// Composables
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

export const makeInputWrapperProps = propsFactory({
  appendIcon: String,
  prependIcon: String,
  ...makeDisabledProps(),
}, 'input-wrapper')

// Types
import type { MakeSlots } from '../../utils'

export type InputWrapperSlots = MakeSlots<{
  default: [],
  prepend: [],
  append: [],
}>

export type InputWrapper = InstanceType<typeof InputWrapper>

export const InputWrapper = genericComponent<new () => {
  $slots: InputWrapperSlots
}>()({
  name: 'InputWrapper',

  props: makeInputWrapperProps(),

  emits: {
    'click:prepend': (e: MouseEvent) => true,
    'click:append': (e: MouseEvent) => true,
  },

  setup (props, { slots, emit }) {
    const { disabledClasses } = useDisabled(props, 've-input-wrapper')
    const hasPrepend = (slots.prepend || props.prependIcon)
    const hasAppend = (slots.append || props.appendIcon)

    return () => {
      return (
        <div
          class={ [
            've-input-wrapper',
            disabledClasses.value,
          ] }
        >
          { hasPrepend && (
            <div
              class="ve-input-wrapper__prepend"
              onClick={ e => emit('click:prepend', e) }
            >
              { slots?.prepend?.() }

              { props.prependIcon && (
                <Icon icon={ props.prependIcon } />
              ) }
            </div>
          ) }

          { slots.default?.() }

          { hasAppend && (
            <div
              class="ve-input-wrapper__append"
              onClick={ e => emit('click:append', e) }
            >
              { slots?.append?.() }

              { props.appendIcon && (
                <Icon icon={ props.appendIcon } />
              ) }
            </div>
          ) }
        </div>
      )
    }
  }
})