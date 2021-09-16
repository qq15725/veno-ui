import './styles/ve-image.scss'

// Components
import { VeResponsive } from '../ve-responsive'

// Utilities
import {
  computed,
  h,
  defineComponent,
} from 'vue'

export default defineComponent({
  name: 'VeImage',

  props: {
    aspectRatio: [String, Number],
    alt: String,
    src: String,
    sizes: String,
    srcset: String,
  },

  emits: {
    'load': (value: Event) => true,
  },

  setup (props, { emit, slots }) {
    const __image = computed(() => {
      return h('img', {
        class: ['ve-image__img'],
        src: props.src,
        srcset: props.srcset,
        sizes: props.sizes,
        onLoad,
      })
    })

    function onLoad (e: Event) {
      emit('load', e)
    }

    return () => (
      <VeResponsive
        class="ve-image"
        aspect-ratio={ Number(props.aspectRatio || 0) }
        aria-label={ props.alt }
        role={ props.alt ? 'img' : undefined }
        v-slots={ {
          additional: () => [__image.value],
          default: slots.default,
        } }
      />
    )
  },
})
