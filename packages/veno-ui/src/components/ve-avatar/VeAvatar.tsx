// Styles
import './styles/ve-avatar.scss'

// Utils
import { defineComponent, toRef } from 'vue'

// Composables
import { makeRoundedProps, useRounded } from '../../composables/rounded'
import { makeSizeProps, useSize } from '../../composables/size'
import { makeTagProps } from '../../composables/tag'
import { useBackgroundColor } from '../../composables/color'

// Components
import { VeImage } from '../ve-image'

export default defineComponent({
  name: 'VeAvatar',

  props: {
    color: String,
    image: String,
    ...makeRoundedProps(),
    ...makeSizeProps(),
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(toRef(props, 'color'))
    const { roundedClasses } = useRounded(props, 've-avatar')
    const { sizeClasses, sizeStyles } = useSize(props, 've-avatar')

    return () => (
      <props.tag
        class={ [
          've-avatar',
          backgroundColorClasses.value,
          roundedClasses.value,
          sizeClasses.value,
        ] }
        style={ [
          backgroundColorStyles.value,
          sizeStyles.value,
        ] }
      >
        { props.image && <VeImage src={ props.image } alt="" /> }

        { slots.default?.() }
      </props.tag>
    )
  }
})
