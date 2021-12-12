// Utils
import { genericComponent } from '../../utils'

import {
  FormItem,
  filterFormItemProps,
  makeFormItemProps
} from '../form/form-item'

import {
  SelectionControl,
  filterSelectionControlProps,
  makeSelectionControlProps
} from '../selection-control/selection-control'

export const Checkbox = genericComponent()({
  name: 'Checkbox',

  props: {
    ...makeFormItemProps(),
    ...makeSelectionControlProps({
      falseIcon: 'veno-ui:$checkboxOff',
      trueIcon: 'veno-ui:$checkboxOn',
      color: 'primary',
    }),
  },

  setup (props, { slots }) {
    return () => {
      const [formItemProps] = filterFormItemProps(props)
      const [selectionInputProps] = filterSelectionControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          class="ve-checkbox"
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            control: () => (
              <SelectionControl
                { ...selectionInputProps }
                label={ undefined }
                trueIcon={ props.trueIcon }
                falseIcon={ props.falseIcon }
                type="checkbox"
                v-slots={ {
                  label: slots.default,
                } }
              />
            ),
          } }
        />
      )
    }
  }
})