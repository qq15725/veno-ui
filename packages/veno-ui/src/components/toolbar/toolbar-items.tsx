// Utils
import { toRef } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeVariantProps } from '../../composables/variant'
import { provideDefaults } from '../../composables/defaults'

// Types
export type ToolbarItems = InstanceType<typeof ToolbarItems>

export const ToolbarItems = defineComponent({
  name: 'VeToolbarItems',

  props: {
    ...makeVariantProps({
      variant: 'contained-text',
    } as const),
  },

  setup(props, { slots }) {
    provideDefaults({
      VeButton: {
        color: toRef(props, 'color'),
        textColor: toRef(props, 'textColor'),
        variant: toRef(props, 'variant'),
      },
    })

    return () => slots.default?.()
  },
})
