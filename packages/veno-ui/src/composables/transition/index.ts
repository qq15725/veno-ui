// Utils
import { h, mergeProps, Transition } from 'vue'
import { propsFactory } from '../../utils'

// Types
import type { Component, FunctionalComponent, PropType, TransitionProps } from 'vue'

export const makeTransitionProps = propsFactory({
  transition: {
    type: [Boolean, String, Object] as PropType<string | false | TransitionProps & { component?: Component }>,
    default: 've-fade-transition',
    validator: val => val !== true,
  },
}, 'transition')

interface MaybeTransitionProps extends TransitionProps
{
  transition?: string | boolean | TransitionProps & { component?: any }
}

export const MaybeTransition: FunctionalComponent<MaybeTransitionProps> = (props, { slots }) => {
  const { transition, ...rest } = props

  if (!transition || typeof transition === 'boolean') return slots.default?.()

  const { component = Transition, ...customProps } = typeof transition === 'object'
    ? transition
    : {}

  return h(
    component,
    mergeProps(
      typeof transition === 'string'
        ? { name: transition }
        : customProps as any,
      rest as any
    ),
    slots
  )
}
