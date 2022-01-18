// Utils
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeGroupProps, useGroup } from '../../composables/group'

// Symbols
export const ButtonToggleKey = Symbol.for('veno-ui:button-toggle')

import { ButtonGroup } from '../button-group'

export const ButtonToggle = defineComponent({
  name: 'VeButtonToggle',

  props: {
    ...makeGroupProps({
      selectedClass: 've-button--selected'
    } as const),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const { isSelected, next, prev, select, selected } = useGroup(props, ButtonToggleKey)

    useRender(() => {
      return (
        <ButtonGroup class="ve-button-toggle">
          { slots.default?.({
            isSelected,
            next,
            prev,
            select,
            selected,
          }) }
        </ButtonGroup>
      )
    })

    return {
      next,
      prev,
      select,
    }
  }
})