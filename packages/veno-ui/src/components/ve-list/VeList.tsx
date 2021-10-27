// Styles
import './styles/ve-list.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

export const VeList = genericComponent()({
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
          style={ [
            materialStyles.value,
          ] }
          v-slots={ slots }
        />
      )
    }
  },
})

export type VeList = InstanceType<typeof VeList>