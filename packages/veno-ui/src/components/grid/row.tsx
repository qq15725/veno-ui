// Styles
import './styles/row.scss'

// Utils
import { capitalize, computed, h } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

// Constants
const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'] as const // no xs
const alignments = ['start', 'end', 'center'] as const

// Types
import type { Prop } from 'vue'

function makeRowProps (prefix: string, def: () => Prop<string, null>) {
  return breakpoints.reduce((props, val) => {
    props[prefix + capitalize(val)] = def()
    return props
  }, {} as Dictionary<Prop<string, null>>)
}

// align
const alignValidator = (str: any) => [...alignments, 'baseline', 'stretch'].includes(str)
const alignProps = makeRowProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator,
}))

// justify
const justifyValidator = (str: any) => [...alignments, 'space-between', 'space-around'].includes(str)
const justifyProps = makeRowProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator,
}))

// alignContent
const alignContentValidator = (str: any) => [...alignments, 'space-between', 'space-around', 'stretch'].includes(str)
const alignContentProps = makeRowProps('alignContent', () => ({
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

export type Row = InstanceType<typeof Row>

export const Row = genericComponent()({
  name: 'Row',

  props: {
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
    ...makeTagProps(),
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

    return () => h(props.tag, {
      class: ['ve-row', classes.value],
    }, slots.default?.())
  },
})