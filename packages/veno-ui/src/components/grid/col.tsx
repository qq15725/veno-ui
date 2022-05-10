// Styles
import './styles/col.scss'

// Utils
import { capitalize, computed } from 'vue'
import { defineComponent, propsFactory } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag' // no xs

// Types
import type { Prop } from 'vue'

// Constants
const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'] as const

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false,
    }
    return props
  }, {} as Record<string, Prop<boolean | string | number, false>>)
})()

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[`offset${ capitalize(val) }`] = {
      type: [String, Number],
      default: null,
    }
    return props
  }, {} as Record<string, Prop<string | number, null>>)
})()

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[`order${ capitalize(val) }`] = {
      type: [String, Number],
      default: null,
    }
    return props
  }, {} as Record<string, Prop<string | number, null>>)
})()

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps),
}

function breakpointClass(type: keyof typeof propMap, prop: string, val: boolean | string | number) {
  let className: string = type
  if (val == null || val === false) {
    return undefined
  }
  if (prop) {
    const breakpoint = prop.replace(type, '')
    className += `-${ breakpoint }`
  }
  if (type === 'col') {
    className = `ve-${ className }`
  }
  // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.
  if (type === 'col' && (val === '' || val === true)) {
    // .v-col-md
    return className.toLowerCase()
  }
  // .order-md-6
  className += `-${ val }`
  return className.toLowerCase()
}

export const makeColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false,
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null,
  },
  ...offsetProps,
  order: {
    type: [String, Number],
    default: null,
  },
  ...orderProps,
  alignSelf: {
    type: String,
    default: null,
    validator: (str: any) => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str),
  },
}, 'col')

export type Col = InstanceType<typeof Col>

export const Col = defineComponent({
  name: 'VeCol',

  props: {
    ...makeTagProps(),
    ...makeColProps(),
  },

  setup(props, { slots }) {
    const classes = computed(() => {
      const classList: any[] = []

      // Loop through `col`, `offset`, `order` breakpoint props
      let type: keyof typeof propMap
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value: string | number | boolean = (props as any)[prop]
          const className = breakpointClass(type, prop, value)
          if (className) classList!.push(className)
        })
      }

      const hasColClasses = classList.some(className => className.startsWith('ve-col-'))

      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        've-col': !hasColClasses || !props.cols,
        [`ve-col-${ props.cols }`]: props.cols,
        [`offset-${ props.offset }`]: props.offset,
        [`order-${ props.order }`]: props.order,
        [`align-self-${ props.alignSelf }`]: props.alignSelf,
      })

      return classList
    })

    return () => (
      <props.tag class={ classes.value }>{ slots }</props.tag>
    )
  },
})
