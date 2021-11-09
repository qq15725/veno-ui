// Styles
import './styles/ve-list-subheader.scss'

// Composables
import { makeTagProps } from '../../composables/tag'
import { useTextColor } from '../../composables/color'

// Utils
import { toRef } from 'vue'
import { defineComponent } from '../../utils'

export const VeListSubheader = defineComponent({
  name: 'VeListSubheader',

  props: {
    color: String,
    inset: Boolean,

    ...makeTagProps(),
  },

  setup (props, { slots }) {
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
          <div class="ve-list-subheader__text">
            { slots.default() }
          </div>
        ) }
      </props.tag>
    )
  },
})
