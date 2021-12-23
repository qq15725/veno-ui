// Styles
import './styles/button-group.scss'

// Utils
import { defineComponent } from '../../utils'
import { reactive, computed } from 'vue'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { provideDefaults } from '../../composables/defaults'

export const ButtonGroup = defineComponent({
  name: 'VeButtonGroup',

  props: {
    divided: Boolean,
    ...makeMaterialProps(),
  },

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props)

    provideDefaults(reactive({
      defaults: {
        VeButton: {
          height: 'auto',
          color: computed(() => props.color),
          variant: computed(() => props.variant),
        },
      },
    }))

    return () => {
      return (
        <props.tag
          class={ [
            've-button-group',
            {
              've-button-group--divided': props.divided,
            },
            materialClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
          v-slots={ slots }
        />
      )
    }
  }
})