import './styles/ve-list-item.scss'

import { defineComponent } from 'vue'

import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeListItem',

  props: {
    ...makeVariantProps({ variant: 'text' } as const),
  },

  setup (props, { slots }) {
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-list-item')

    return () => {
      return (
        <div
          class={ [
            've-list-item',
            colorClasses.value,
            variantClasses.value,
          ] }
          style={ [
            colorStyles.value,
          ] }
        >
          { slots.default?.() }
        </div>
      )
    }
  },
})