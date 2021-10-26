// Styles
import './styles/ve-sheet.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeSheetProps, useSheet } from '../../composables/sheet'

// Types
import type { MakeSlots } from '../../utils'

export const VeSheet = genericComponent<new <T>() => {
  $slots: MakeSlots<{
    default: []
  }>
}>()({
  name: 'VeSheet',

  props: {
    ...makeSheetProps(),
  },

  setup (props, { slots }) {
    const { sheetClasses, sheetStyles } = useSheet(props, 've-sheet')

    return () => (
      <props.tag
        class={ [
          've-sheet',
          sheetClasses.value
        ] }
        style={ [
          sheetStyles.value
        ] }
        v-slots={ slots }
      />
    )
  }
})

export type VeSheet = InstanceType<typeof VeSheet>
