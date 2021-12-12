// Styles
import './styles/form-item.scss'

// Utils
import { genericComponent, propsFactory, pick, convertToUnit } from '../../utils'

// Components
import { Icon } from '../icon'

// Composables
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

// Types
import type { ExtractPropTypes } from 'vue'
import type { MakeSlots } from '../../utils'

export type FormItemSlots = MakeSlots<{
  prepend: [],
  control: [],
  prependInner: [],
  default: [],
  appendInner: [],
  append: [],
}>

export type FormItem = InstanceType<typeof FormItem>

export function filterFormItemProps (props: ExtractPropTypes<ReturnType<typeof makeFormItemProps>>) {
  return pick(props, Object.keys(FormItem.props) as any)
}

export const makeFormItemProps = propsFactory({
  appendIcon: String,
  prependIcon: String,
  hideDetails: Boolean,
  label: String,
  labelWidth: [String, Number],
  ...makeDisabledProps(),
}, 'form-item')

export const FormItem = genericComponent<new () => {
  $slots: FormItemSlots
}>()({
  name: 'FormItem',

  props: makeFormItemProps(),

  emits: {
    'click:prepend': (e: MouseEvent) => true,
    'click:prepend-inner': (e: MouseEvent) => true,
    'click:control': (e: MouseEvent) => true,
    'click:append-inner': (e: MouseEvent) => true,
    'click:append': (e: MouseEvent) => true,
  },

  setup (props, { slots, emit }) {
    const { disabledClasses } = useDisabled(props, 've-form-item')

    function onClick (e: MouseEvent) {
      if (e.target !== document.activeElement) {
        e.preventDefault()
      }

      emit('click:control', e)
    }

    return () => {
      const hasPrepend = (slots.prepend || props.prependIcon || props.label || props.labelWidth)
      const hasControl = !!slots.control
      const hasPrependInner = !!slots.prependInner
      const hasDefault = !!slots.default
      const hasAppendInner = !!slots.appendInner
      const hasDefaultControl = !hasControl && (hasPrependInner || hasDefault || hasAppendInner)
      const hasAppend = (slots.append || props.appendIcon)
      const hasDetails = !props.hideDetails

      return (
        <div
          class={ [
            've-form-item',
            disabledClasses.value,
            {
              've-form-item--label': !!props.label,
            }
          ] }
        >
          { hasPrepend && (
            <div
              class="ve-form-item__prepend"
              style={ {
                width: convertToUnit(props.labelWidth),
              } }
              onClick={ e => emit('click:prepend', e) }
            >
              { slots.prepend?.() }

              { props.prependIcon && (
                <Icon icon={ props.prependIcon } />
              ) }

              { props.label && props.label }
            </div>
          ) }

          { hasControl && slots.control?.() }

          { hasDefaultControl && (
            <div
              class="ve-form-item__control"
              onClick={ onClick }
            >
              { hasPrependInner && (
                <div
                  class="ve-form-item__prepend-inner"
                  onClick={ e => emit('click:prepend-inner', e) }
                >
                  { slots.prependInner?.() }
                </div>
              ) }

              { hasDefault && slots.default?.() }

              { hasAppendInner && (
                <div
                  class="ve-form-item__append-inner"
                  onClick={ e => emit('click:append-inner', e) }
                >
                  { slots.appendInner?.() }
                </div>
              ) }
            </div>
          ) }

          { hasAppend && (
            <div
              class="ve-form-item__append"
              onClick={ e => emit('click:append', e) }
            >
              { slots?.append?.() }

              { props.appendIcon && (
                <Icon icon={ props.appendIcon } />
              ) }
            </div>
          ) }

          { hasDetails && (
            <div class="ve-form-item__details">
              { slots.details?.() }
            </div>
          ) }
        </div>
      )
    }
  }
})