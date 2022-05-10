// Utils
import { defineComponent, toRefs } from 'vue'

// Composables
import { provideDefaults } from '../../composables/defaults'

// Types
import type { DefaultsOptions } from '../../composables/defaults'
import type { PropType } from 'vue'

export const DefaultsProvider = defineComponent({
  name: 'VeDefaultsProvider',

  props: {
    defaults: Object as PropType<DefaultsOptions>,
    reset: [Number, String],
    root: Boolean,
    scoped: Boolean,
  },

  setup (props, { slots }) {
    const { defaults, reset, root, scoped } = toRefs(props)

    provideDefaults(defaults, {
      reset,
      root,
      scoped,
    })

    return () => slots.default?.()
  },
})
