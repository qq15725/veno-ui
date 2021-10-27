// Styles
import './styles/ve-avatar.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'

// Components
import { VeImage } from '../ve-image'
import { VeIcon } from '../ve-icon'

export const VeAvatar = genericComponent()({
  name: 'VeAvatar',

  props: {
    image: String,
    icon: String,
    ...makeMaterialProps(),
  },

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props, 've-avatar')

    return () => (
      <props.tag
        class={ [
          've-avatar',
          materialClasses.value,
        ] }
        style={ [
          materialStyles.value,
        ] }
      >
        { props.image && <VeImage src={ props.image } /> }

        { props.icon && !props.image && <VeIcon icon={ props.icon } /> }

        { slots.default?.() }
      </props.tag>
    )
  }
})

export type VeAvatar = InstanceType<typeof VeAvatar>
