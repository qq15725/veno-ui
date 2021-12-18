// Styles
import './styles/radio-group.scss'

// Utils
import { computed, defineComponent } from 'vue'
import { filterInputAttrs, getUid, useRender } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { SelectionControlGroup } from '../selection-control'
import { makeSelectionControlProps, filterSelectionControlProps } from '../selection-control/selection-control'

export const RadioGroup = defineComponent({
  name: 'VeRadioGroup',

  inheritAttrs: false,

  props: {
    height: {
      type: [Number, String],
      default: 'auto',
    },
    ...makeFormControlProps(),
    ...makeSelectionControlProps({
      type: 'radio',
      trueIcon: 'veno-ui:$radioOn',
      falseIcon: 'veno-ui:$radioOff',
    }),
  },

  setup (props, { attrs, slots }) {
    const uid = getUid()
    const id = computed(() => props.id || `radio-group-${ uid }`)

    useRender(() => {
      const [formControlAttrs, restAttrs] = filterInputAttrs(attrs)
      const [formControlProps] = filterFormControlProps(props)
      const [selectionControlProps] = filterSelectionControlProps(props)

      return (
        <FormControl
          { ...formControlProps }
          class="ve-radio-group"
          { ...formControlAttrs }
          v-slots={ {
            prepend: slots.prepend,
            label: slots.label,
            default: ({ isDisabled, isReadonly }) => (
              <SelectionControlGroup
                { ...selectionControlProps }
                id={ id.value }
                disabled={ isDisabled.value }
                readonly={ isReadonly.value }
                { ...restAttrs }
                v-slots={ slots }
              />
            ),
            append: slots.append,
            details: slots.details,
          } }
        />
      )
    })

    return {}
  },
})
