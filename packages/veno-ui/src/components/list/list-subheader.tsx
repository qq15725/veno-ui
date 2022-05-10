// Styles
import './styles/list-subheader.scss'

// Composables
import { toRef } from 'vue'
import { makeTagProps } from '../../composables/tag'
import { useTextColor } from '../../composables/color'

// Utils
import { defineComponent } from '../../utils'

export const ListSubheader = defineComponent({
  name: 'VeListSubheader',

  props: {
    /**
     * @zh 副标题颜色
     */
    color: String,
    inset: Boolean,

    ...makeTagProps(),
  },

  setup(props, { slots }) {
    const { textColorClasses, textColorStyles } = useTextColor(toRef(props, 'color'))

    return () => (
      <props.tag
        class={ [
          've-list-subheader',
          {
            've-list-subheader--inset': props.inset,
          },
          textColorClasses.value,
        ] }
        style={ { textColorStyles } }
      >
        { slots.default && (
          <div className="ve-list-subheader__text">
            { slots.default() }
          </div>
        ) }
      </props.tag>
    )
  },
})
