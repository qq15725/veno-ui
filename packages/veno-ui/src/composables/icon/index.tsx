// Utils
import { computed, inject, isRef } from 'vue'
import { propsFactory, defineComponent } from '../../utils'

// Types
import type { InjectionKey, JSXComponent, PropType, Ref } from 'vue'

export type IconValue = string | JSXComponent

export interface IconAliases
{
  [name: string]: IconValue

  success: IconValue
  info: IconValue
  warning: IconValue
  error: IconValue
  close: IconValue
  clear: IconValue
  collapse: IconValue
  expand: IconValue
  menu: IconValue
  dropdown: IconValue
  separator: IconValue
  radioOn: IconValue
  radioOff: IconValue
  checkboxOn: IconValue
  checkboxOff: IconValue
  checkboxIndeterminate: IconValue
  sort: IconValue
  filter: IconValue
  prev: IconValue
  prevDouble: IconValue
  next: IconValue
  nextDouble: IconValue
  first: IconValue
  last: IconValue
  nodata: IconValue
  link: IconValue
  calendar: IconValue
}

export interface IconProps
{
  tag: string
  icon: IconValue
  disabled?: Boolean
}

type IconComponent = JSXComponent<IconProps>

export interface IconSet
{
  component: IconComponent
}

export type IconOptions = {
  defaultSet?: string
  aliases?: Partial<IconAliases>
  sets?: Record<string, IconSet>
}

type IconInstance = {
  component: IconComponent
  icon: IconValue
}

export const IconKey: InjectionKey<Required<IconOptions>> = Symbol.for('veno-ui:icon')

export const makeIconProps = propsFactory({
  icon: {
    type: [String, Object, Function] as PropType<IconValue>,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
}, 'icon')

export const ComponentIcon = defineComponent({
  name: 'VeComponentIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      return (
        <props.tag>
          <props.icon
            class="ve-icon__svg"
            role="img"
            aria-hidden="true"
          />
        </props.tag>
      )
    }
  },
})

export const SvgIcon = defineComponent({
  name: 'VeSvgIcon',

  inheritAttrs: false,

  props: {
    viewBox: {
      type: String,
      default: '0 0 24 24'
    },
    ...makeIconProps()
  },

  setup (props, { attrs }) {
    return () => {
      const isString = typeof props.icon === 'string'
      let Svg = isString ? 'svg' : props.icon

      return (
        <props.tag { ...attrs } style={ null }>
          <Svg
            class="ve-icon__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={ props.viewBox }
            role="img"
            aria-hidden="true"
          >
            { isString && <path d={ props.icon as string } /> }
          </Svg>
        </props.tag>
      )
    }
  },
})

export const LigatureIcon = defineComponent({
  name: 'VeLigatureIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      return <props.tag>{ props.icon }</props.tag>
    }
  },
})

export const ClassIcon = defineComponent({
  name: 'VeClassIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      return <props.tag class={ props.icon } />
    }
  }
})

export const defaultSets: Record<string, IconSet> = {
  svg: {
    component: SvgIcon,
  },
  class: {
    component: ClassIcon,
  },
}

// $info mdi:info svg:xxx class:xxx
export const useIcon = (props: Ref<string | undefined> | { icon?: IconValue }) => {
  const icons = inject(IconKey)

  if (!icons) throw new Error('[VenoUi] Missing Icons provide!')

  const iconData: Ref<IconInstance> = computed(() => {
    let iconAlias = isRef(props) ? props.value : props.icon

    if (!iconAlias) throw new Error('Icon value is undefined or null')

    let icon: IconValue | undefined = iconAlias

    if (typeof iconAlias === 'string' && iconAlias.includes('$')) {
      icon = icons.aliases?.[iconAlias.slice(iconAlias.indexOf('$') + 1)]
    }

    if (!icon) throw new Error(`Could not find aliased icon "${ iconAlias }"`)

    if (typeof icon !== 'string') return { component: ComponentIcon, icon }

    const iconSetName = Object.keys(icons.sets).find(
      setName => typeof icon === 'string' && icon.startsWith(`${setName}:`)
    )

    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon
    const iconSet = icons.sets[iconSetName ?? icons.defaultSet]

    return {
      component: iconSet.component,
      icon: iconName,
    }
  })

  return { iconData }
}
