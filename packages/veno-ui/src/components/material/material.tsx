// Styles
import './styles/material.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'

// Types
import type { MakeSlots } from '../../utils'

export type Material = InstanceType<typeof Material>

export const Material = genericComponent<new () => {
  $slots: MakeSlots<{
    default: []
  }>
}>()({
  name: 'VeMaterial',

  props: {
    textCenter: Boolean,
    ...makeMaterialProps({
      size: null,
      density: null,
    }),
  },

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props)

    return () => (
      <props.tag
        class={ [
          've-material',
          {
            've-material--text-center': props.textCenter,
          },
          materialClasses.value
        ] }
        style={ [
          materialStyles.value
        ] }
        v-slots={ slots }
      />
    )
  }
})