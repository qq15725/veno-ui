// Styles
import './styles/row.scss'

// Utils
import { capitalize, computed } from 'vue'
import { defineComponent, propsFactory } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

// Constants
const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'] as const // no xs
const alignments = ['start', 'end', 'center'] as const

// Types
import type { Prop } from 'vue'

function makeProps (prefix: string, def: () => Prop<string, null>) {
  return breakpoints.reduce((props, val) => {
    props[prefix + capitalize(val)] = def()
    return props
  }, {} as Dictionary<Prop<string, null>>)
}

// align
const alignValidator = (str: any) => [...alignments, 'baseline', 'stretch'].includes(str)
const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator,
}))

// justify
const justifyValidator = (str: any) => [...alignments, 'space-between', 'space-around'].includes(str)
const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator,
}))

// alignContent
const alignContentValidator = (str: any) => [...alignments, 'space-between', 'space-around', 'stretch'].includes(str)
const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator,
}))

const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps),
}

const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content',
}

function breakpointClass (type: keyof typeof propMap, prop: string, val: string) {
  let className = classMap[type]
  if (val == null) {
    return undefined
  }
  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '')
    className += `-${ breakpoint }`
  }
  // .align-items-sm-center
  className += `-${ val }`
  return className.toLowerCase()
}

export const makeRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator,
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator,
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator,
  },
  ...alignContentProps,
}, 'row')

export type Row = InstanceType<typeof Row>

export const Row = defineComponent({
  name: 'VeRow',

  props: {
    ...makeTagProps(),
    ...makeRowProps(),
  },

  setup (props, { slots }) {
    const classes = computed(() => {
      const classList: any[] = []

      // Loop through `align`, `justify`, `alignContent` breakpoint props
      let type: keyof typeof propMap
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value: string = (props as any)[prop]
          const className = breakpointClass(type, prop, value)
          if (className) classList!.push(className)
        })
      }

      classList.push({
        've-row--no-gutters': props.noGutters,
        've-row--dense': props.dense,
        [`align-${ props.align }`]: props.align,
        [`justify-${ props.justify }`]: props.justify,
        [`align-content-${ props.alignContent }`]: props.alignContent,
      })

      return classList
    })

    return () => (
      <props.tag
        class={ [
          've-row',
          classes.value
        ] }
      >
        { slots }
      </props.tag>
    )
  }
})