// Styles
import './styles/ve-list.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeSheetProps, useSheet } from '../../composables/sheet'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

export default defineComponent({
  name: 'VeList',

  props: {
    ...makeSheetProps(),
    ...makeDisabledProps(),
  },

  setup (props, { slots }) {
    const { sheetClasses, sheetStyles } = useSheet(props, 've-list')
    const { disabledClasses } = useDisabled(props, 've-list')

    return () => {
      return (
        <props.tag
          class={ [
            've-list',
            sheetClasses.value,
            disabledClasses.value,
          ] }
          style={[
            sheetStyles.value,
          ]}
        >
          { slots.default?.() }
        </props.tag>
      )
    }
  },
})