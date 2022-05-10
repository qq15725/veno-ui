import './styles/image.scss'

// Utils
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onBeforeMount,
  ref,
  vShow,
  watch,
  withDirectives,
} from 'vue'
import type { PropType } from 'vue'
import {
  IN_BROWSER,
  SUPPORTS_INTERSECTION_OBSERVER,
  convertToUnit,
  useRender,
} from '../../utils'

// Components
import { Responsive } from '../responsive'

// Composables
import { MaybeTransition, makeTransitionProps } from '../../composables/transition'

// Types

export const Image = defineComponent({
  name: 'VeImage',

  props: {
    /**
     * @zh 纵横比
     */
    aspectRatio: [String, Number],

    /**
     * @zh alt
     */
    alt: String,

    /**
     * @zh object-fit: cover
     */
    cover: Boolean,

    /**
     * @zh 立即加载
     */
    eager: Boolean,

    /**
     * @zh 渐变
     */
    gradient: String,

    /**
     * @zh 懒加载 src
     */
    lazySrc: String,

    /**
     * @zh IntersectionObserverInit
     */
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

    /**
     * @zh sizes
     */
    sizes: String,

    /**
     * @zh src
     */
    src: String,

    /**
     * @zh srcset
     */
    srcset: String,

    /**
     * @zh 宽度
     */
    width: [String, Number],

    ...makeTransitionProps(),
  },

  emits: {
    loadstart: (src: string | undefined, image: HTMLImageElement | undefined) => true,
    load: (src: string | undefined, image: HTMLImageElement | undefined) => true,
    error: (src: string | undefined, image: HTMLImageElement | undefined) => true,
  },

  setup(props, { emit, slots }) {
    const currentSrc = ref('')
    const image = ref<HTMLImageElement>()
    const state = ref<'idle' | 'loading' | 'loaded' | 'error'>(
      props.eager ? 'loading' : 'idle',
    )
    const naturalWidth = ref<number>()
    const naturalHeight = ref<number>()

    const aspectRatio = computed(() => {
      return Number(props.aspectRatio || 0) || naturalWidth.value! / naturalHeight.value! || 0
    })

    watch(() => props.src, () => {
      init(state.value !== 'idle')
    })

    onBeforeMount(() => init())

    function init(isIntersecting?: boolean) {
      if (props.eager && isIntersecting) return
      if (
        SUPPORTS_INTERSECTION_OBSERVER
        && !isIntersecting
        && !props.eager
      ) return

      state.value = 'loading'

      if (props.lazySrc && IN_BROWSER) {
        const lazyImg = new window.Image()
        lazyImg.src = props.lazySrc
        pollForSize(lazyImg, null)
      }

      if (!props.src) return

      nextTick(() => {
        emit('loadstart', image.value?.currentSrc || props.src, image.value)

        if (image.value?.complete) {
          if (!image.value.naturalWidth) onError()
          if (state.value === 'error') return
          if (!aspectRatio.value) pollForSize(image.value, null)
          onLoad()
        } else {
          if (!aspectRatio.value) pollForSize(image.value!)
          getSrc()
        }
      })
    }

    function onLoad() {
      getSrc()
      state.value = 'loaded'
      emit('load', image.value?.currentSrc || props.src, image.value)
    }

    function onError() {
      state.value = 'error'
      emit('error', image.value?.currentSrc || props.src, image.value)
    }

    function getSrc() {
      const img = image.value
      if (img) currentSrc.value = img.currentSrc || img.src
    }

    function pollForSize(img: HTMLImageElement, timeout: number | null = 100) {
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

    const containClasses = computed(() => ({
      've-image__img--cover': props.cover,
      've-image__img--contain': !props.cover,
    }))

    const __image = computed(() => {
      if (!props.src || state.value === 'idle') return

      const img = h('img', {
        class: ['ve-image__img', containClasses.value],
        src: props.src,
        srcset: props.srcset,
        sizes: props.sizes,
        ref: image,
        onLoad,
        onError,
      })

      const sources = slots.sources?.()

      return (
        <MaybeTransition transition={ props.transition } appear>
          {
            withDirectives(
              sources
                ? <picture className="ve-image__picture">{ sources }{ img }</picture>
                : img,
              [[vShow, state.value === 'loaded']],
            )
          }
        </MaybeTransition>
      )
    })

    const __preloadImage = computed(() => (
      <MaybeTransition transition={ props.transition }>
        { props.lazySrc && state.value !== 'loaded' && (
          <img
            className={['ve-image__img', 've-image__img--preload', containClasses.value]}
            src={ props.lazySrc }
            alt=""
          />
        )}
      </MaybeTransition>
    ))

    const __placeholder = computed(() => {
      if (!slots.placeholder) return

      return (
        <MaybeTransition transition={ props.transition } appear>
          { (state.value === 'loading' || (state.value === 'error' && !slots.error))
            && <div className="ve-image__placeholder">{ slots.placeholder() }</div>
          }
        </MaybeTransition>
      )
    })

    const __error = computed(() => {
      if (!slots.error) return

      return (
        <MaybeTransition transition={ props.transition } appear>
          { state.value === 'error'
            && <div className="ve-image__error">{ slots.error() }</div>
          }
        </MaybeTransition>
      )
    })

    const __gradient = computed(() => {
      if (!props.gradient) return

      return <div className="ve-image__gradient" style={{ backgroundImage: `linear-gradient(${ props.gradient })` }} />
    })

    const isBooted = ref(false)
    {
      const stop = watch(aspectRatio, val => {
        if (val) {
          // Doesn't work with nextTick, idk why
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              isBooted.value = true
            })
          })
          stop()
        }
      })
    }

    useRender(() => (
      <Responsive
        class={[
          've-image',
          { 've-image--booting': !isBooted.value },
        ]}
        style={{
          width: convertToUnit(props.width === 'auto' ? naturalWidth.value : props.width),
        }}
        aspectRatio={ aspectRatio.value }
        aria-label={ props.alt }
        role={ props.alt ? 'img' : undefined }
        v-intersect={[{
          handler: init,
          options: props.options,
        }, null, ['once']]}
        v-slots={ {
          additional: () => [__image.value, __preloadImage.value, __gradient.value, __placeholder.value, __error.value],
          default: slots.default,
        } }
      />
    ))

    return {
      currentSrc,
      image,
      state,
      naturalWidth,
      naturalHeight,
    }
  },
})

export type Image = InstanceType<typeof Image>
