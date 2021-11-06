// Styles
import './styles/ve-material.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'

// Types
import type { MakeSlots } from '../../utils'

export const VeMaterial = genericComponent<new <T>() => {
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
    const { materialClasses, materialStyles } = useMaterial(props, 've-material')

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

export type VeMaterial = InstanceType<typeof VeMaterial>
