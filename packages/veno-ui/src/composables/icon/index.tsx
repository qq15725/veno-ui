// Utilities
import { defineComponent, computed, inject, isRef } from 'vue'
import { propsFactory } from '../../utils'

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
  menu: IconValue
  dropdown: IconValue
  separator: IconValue
  radioOn: IconValue
  radioOff: IconValue
  checkboxOn: IconValue
  checkboxOff: IconValue
  checkboxIndeterminate: IconValue
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
  aliases?: Partial<IconAliases>
}

export type IconOptions = {
  defaultSet: string
  sets: Record<string, IconSet>
}

type IconInstance = {
  component: IconComponent
  icon: IconValue
}

export const IconSymbol: InjectionKey<IconOptions> = Symbol.for('veno-ui:icon')

export const makeIconProps = propsFactory({
  icon: {
    type: [String, Object] as PropType<IconValue>,
    required: true,
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: true,
  },
}, 'icon')

export const ComponentIcon = defineComponent({
  name: 'ComponentIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      const icon = props.icon as any

      return (
        <props.tag>
          <icon />
        </props.tag>
      )
    }
  },
})

export const SvgIcon = defineComponent({
  name: 'SvgIcon',

  inheritAttrs: false,

  props: makeIconProps(),

  setup (props, { attrs }) {
    return () => {
      return (
        <props.tag { ...attrs } style={ null }>
          <svg
            class="ve-icon__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path d={ props.icon as string } />
          </svg>
        </props.tag>
      )
    }
  },
})

export const LigatureIcon = defineComponent({
  name: 'LigatureIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      return <props.tag>{ props.icon }</props.tag>
    }
  },
})

export const ClassIcon = defineComponent({
  name: 'ClassIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      return <props.tag class={ props.icon } />
    }
  },
})

export const defaultSets: Record<string, IconSet> = {
  svg: {
    component: SvgIcon,
  },
  class: {
    component: ClassIcon,
  },
}

// Composables
export const useIcon = (props: Ref<string | undefined> | { icon?: IconValue }) => {
  const icons = inject(IconSymbol)

  if (!icons) throw new Error('Missing VenoUi Icons provide!')

  const iconData: Ref<IconInstance> = computed(() => {
    let iconAlias = isRef(props) ? props.value : props.icon

    if (!iconAlias) throw new Error('Icon value is undefined or null')

    let icon: IconValue | undefined = iconAlias

    if (typeof icon !== 'string') {
      return {
        component: ComponentIcon,
        icon,
      }
    }

    const iconSetName = Object.keys(icons.sets).find(
      setName => typeof icon === 'string' && icon.startsWith(`${ setName }:`)
    )

    const iconSet = icons.sets[iconSetName ?? icons.defaultSet]

    if (typeof iconAlias === 'string') {
      if (iconSetName) {
        icon = iconAlias = iconAlias.slice(iconSetName.length + 1)
      }

      if (iconAlias.includes('$')) {
        icon = iconSet.aliases?.[iconAlias.slice(iconAlias.indexOf('$') + 1)]
      }
    }

    if (!icon) throw new Error(`Could not find aliased icon "${ iconAlias }"`)

    return {
      component: iconSet.component,
      icon,
    }
  })

  return { iconData }
}
