// Styles
import './styles/ve-avatar.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeSheetProps, useSheet } from '../../composables/sheet'

// Components
import { VeImage } from '../ve-image'
import { VeIcon } from '../ve-icon'

export default defineComponent({
  name: 'VeAvatar',

  props: {
    image: String,
    icon: String,
    ...makeSheetProps(),
  },

  setup (props, { slots }) {
    const { sheetClasses, sheetStyles } = useSheet(props, 've-avatar')

    return () => (
      <props.tag
        class={ [
          've-avatar',
          sheetClasses.value,
        ] }
        style={ [
          sheetStyles.value,
        ] }
      >
        { props.image && <VeImage src={ props.image } /> }

        { props.icon && !props.image && <VeIcon icon={ props.icon } /> }

        { slots.default?.() }
      </props.tag>
    )
  }
})
