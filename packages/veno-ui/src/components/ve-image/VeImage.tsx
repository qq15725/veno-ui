import './styles/ve-image.scss'

// Utils
import { computed, h, defineComponent, ref, watch, onBeforeMount, nextTick } from 'vue'

// Components
import { VeResponsive } from '../ve-responsive'

export default defineComponent({
  name: 'VeImage',

  props: {
    aspectRatio: [String, Number],
    eager: Boolean,
    alt: String,
    src: String,
    sizes: String,
    srcset: String,
  },

  emits: ['loadstart', 'load', 'error'],

  setup (props, { emit, slots }) {
    const image = ref<HTMLImageElement>()
    const state = ref<'idle' | 'loading' | 'loaded' | 'error'>(props.eager ? 'loading' : 'idle')
    const naturalWidth = ref<number>()
    const naturalHeight = ref<number>()

    const aspectRatio = computed(() => {
      return Number(props.aspectRatio || 0) || naturalWidth.value! / naturalHeight.value! || 0
    })

    watch(() => props.src, () => {
      init(state.value !== 'idle')
    })

    onBeforeMount(() => init())

    function init (isIntersecting?: boolean) {
      if (props.eager && isIntersecting) return
      if (
        false
        && !isIntersecting
        && !props.eager
      ) return

      state.value = 'loading'
      nextTick(() => {
        emit('loadstart', image.value?.currentSrc)

        if (image.value?.complete) {
          if (!image.value.naturalWidth) {
            onError()
          }

          if (state.value === 'error') return

          if (!aspectRatio.value) pollForSize(image.value, null)
          onLoad()
        } else {
          if (!aspectRatio.value) pollForSize(image.value!)
        }
      })
    }

    function onLoad () {
      state.value = 'loaded'
      emit('load', image.value)
    }

    function onError () {
      state.value = 'error'
      emit('error', image.value)
    }

    function pollForSize (img: HTMLImageElement, timeout: number | null = 100) {
      const poll = () => {
        const { naturalHeight: imgHeight, naturalWidth: imgWidth } = img

        if (imgHeight || imgWidth) {
          naturalWidth.value = imgWidth
          naturalHeight.value = imgHeight
        } else if (!img.complete && state.value === 'loading' && timeout != null) {
          setTimeout(poll, timeout)
        } else if (img.currentSrc.endsWith('.svg')
          || img.currentSrc.startsWith('data:image/svg+xml')) {
          naturalWidth.value = 1
          naturalHeight.value = 1
        }
      }

      poll()
    }

    const __image = computed(() => {
      return h('img', {
        class: ['ve-image__img'],
        src: props.src,
        srcset: props.srcset,
        sizes: props.sizes,
        ref: image,
        onLoad,
        onError,
      })
    })

    return () => (
      <VeResponsive
        class="ve-image"
        aspect-ratio={ aspectRatio.value }
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
