// Styles
import './styles/ve-form-item.scss'

// Utils
import { defineComponent } from 'vue'
import { convertToUnit } from '../../utils'

export default defineComponent({
  props: {
    label: String,
    labelWidth: [String, Number],
  },

  setup (props, { slots }) {
    return () => (
      <div
        class={ [
          've-form-item',
        ] }
      >
        { props.label && (
          <label
            class="ve-form-item__label"
            style={ {
              width: convertToUnit(props.labelWidth)
            } }
          >
            { props.label }
          </label>
        ) }

        <div class="ve-form-item__wrapper">{ slots.default?.() }</div>

        <div class="ve-form-item__message" />
      </div>
    )
  }
})