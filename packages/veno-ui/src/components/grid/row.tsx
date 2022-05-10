// Styles
import './styles/row.scss'

// Utils
import { capitalize, computed } from 'vue'
import { convertToUnit, defineComponent, propsFactory } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

// Types
import type { Prop } from 'vue'

// Constants
const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'] as const // no xs
const alignments = ['start', 'end', 'center'] as const

function makeProps(prefix: string, def: () => Prop<string, null>) {
  return breakpoints.reduce((props, val) => {
    props[prefix + capitalize(val)] = def()
    return props
  }, {} as Record<string, Prop<string, null>>)
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

function breakpointClass(type: keyof typeof propMap, prop: string, val: string) {
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

const GUTTERS = [
  'xs', 'sm', 'md', 'lg', 'xl', 'xxl',
  'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large',
]

const GUTTERS_ALIASES = {
  'x-small': 'xs',
  'small': 'sm',
  'medium': 'md',
  'large': 'lg',
  'x-large': 'xl',
  'xx-large': 'xxl',
}

export const makeRowProps = propsFactory({
  gutter: {
    type: [Number, String],
    default: 'xl',
  },
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

  setup(props, { slots }) {
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

      // Gutter
      if (GUTTERS.includes(props.gutter as string)) {
        let gutter = props.gutter
        if (props.gutter in GUTTERS_ALIASES) {
          gutter = GUTTERS_ALIASES[gutter as keyof typeof GUTTERS_ALIASES]
        }
        classList.push(`ve-row--gutter-${ gutter }`)
      }

      classList.push({
        [`align-${ props.align }`]: props.align,
        [`justify-${ props.justify }`]: props.justify,
        [`align-content-${ props.alignContent }`]: props.alignContent,
      })

      return classList
    })

    const styles = computed(() => {
      if (GUTTERS.includes(props.gutter as string)) return {}
      return {
        '--ve-row-gutter': convertToUnit(props.gutter),
      }
    })

    return () => (
      <props.tag
        class={ [
          've-row',
          classes.value,
        ] }
        style={ styles.value }
      >
        { slots }
      </props.tag>
    )
  },
})
