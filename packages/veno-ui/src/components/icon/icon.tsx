// Styles
import './styles/icon.scss'

// Utils
import { defineComponent, computed, toRef } from 'vue'
import { convertToUnit, flattenFragments } from '../../utils'

// Composables
import { makeSizeProps, useSize } from '../../composables/size'
import { makeIconProps, useIcon } from '../../composables/icon'
import { useTextColor } from '../../composables/color'

export const Icon = defineComponent({
  name: 'VeIcon',

  props: {
    /**
     * @zh 图标颜色
     */
    color: String,

    /**
     * @zh 是否为左侧图标
     */
    left: Boolean,

    /**
     * @zh 是否为右侧图标
     */
    right: Boolean,

    ...makeSizeProps(),
    ...makeIconProps(),
  },

  setup (props, { slots }) {
    const { iconData } = useIcon(computed(() => {
      if (!slots.default) return props
      const slot = slots.default?.()
      if (!slot) return props
      const nodes = flattenFragments(slot)
      if (typeof nodes?.[0]?.children === 'string') {
        return {
          tag: props.tag,
          icon: nodes[0].children as string,
        }
      }
      return {
        tag: props.tag,
        icon: () => slot,
      }
    }))
    const { sizeClasses } = useSize(props)
    const { textColorClasses, textColorStyles } = useTextColor(toRef(props, 'color'))

    return () => {
      if (!iconData.value) return

      return (
        <iconData.value.component
          tag={ props.tag }
          icon={ iconData.value.icon }
          class={ [
            've-icon',
            'notranslate',
            sizeClasses.value,
            textColorClasses.value,
            {
              've-icon--left': props.left,
              've-icon--right': props.right,
            },
          ] }
          style={ [
            !sizeClasses.value ? ({
              fontSize: convertToUnit(props.size),
              width: convertToUnit(props.size),
              height: convertToUnit(props.size),
            }) : undefined,
            textColorStyles.value,
          ] }
          aria-hidden="true"
        />
      )
    }
  },
})

export type Icon = InstanceType<typeof Icon>
