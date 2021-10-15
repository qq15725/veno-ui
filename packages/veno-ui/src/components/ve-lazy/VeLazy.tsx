// Utils
import { defineComponent } from 'vue'

// Composables
import { makeDimensionProps, useDimension } from '../../composables/dimension'
import { makeTagProps } from '../../composables/tag'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { useProxiedModel } from '../../composables/proxied-model'

// Directives
import intersect from '../../directives/intersect'

// Types
import type { PropType } from 'vue'

export default defineComponent({
  name: 'VeLazy',

  directives: { intersect },

  props: {
    modelValue: Boolean,
    options: {
      type: Object as PropType<IntersectionObserverInit>,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: undefined,
        rootMargin: undefined,
        threshold: undefined,
      }),
    },

    ...makeDimensionProps(),
    ...makeTagProps(),
    ...makeTransitionProps({ transition: 'fade-transition' }),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const { dimensionStyles } = useDimension(props)
    const isActive = useProxiedModel(props, 'modelValue')

    function onIntersect (isIntersecting: boolean) {
      if (isActive.value) return

      isActive.value = isIntersecting
    }

    return () => (
      <props.tag
        class="ve-lazy"
        v-intersect={ [
          onIntersect,
          props.options,
          isActive.value ? [] : ['once'],
        ] }
        style={ dimensionStyles.value }
      >
        { isActive.value && (
          <MaybeTransition transition={ props.transition }>
            { slots.default?.() }
          </MaybeTransition>
        ) }
      </props.tag>
    )
  },
})
