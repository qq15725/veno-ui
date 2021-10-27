// Styles
import './styles/ve-list.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

export default defineComponent({
  name: 'VeList',

  props: {
    ...makeMaterialProps(),
    ...makeDisabledProps(),
  },

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props, 've-list')
    const { disabledClasses } = useDisabled(props, 've-list')

    return () => {
      return (
        <props.tag
          class={ [
            've-list',
            materialClasses.value,
            disabledClasses.value,
          ] }
          style={[
            materialStyles.value,
          ]}
        >
          { slots.default?.() }
        </props.tag>
      )
    }
  },
})