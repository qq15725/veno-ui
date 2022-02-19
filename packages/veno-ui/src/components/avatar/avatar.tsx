// Styles
import './styles/avatar.scss'

// Utils
import { ref, toRef, watch, nextTick } from 'vue'
import { defineComponent } from '../../utils'

// Directives
import { Resize } from '../../directives/resize'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'

// Components
import { Image } from '../image'
import { Icon } from '../icon'

// Constants
const RADIX = 0.8

export const Avatar = defineComponent({
  name: 'VeAvatar',

  directives: { Resize },

  props: {
    /**
     * @zh 图片头像的图片值
     */
    image: String,

    /**
     * @zh 图标头像的图标值
     */
    icon: String,

    /**
     * @zh 文本头像的文本值
     */
    text: String,

    /**
     * @zh 链接头像，可点击
     */
    link: Boolean,

    ...makePaperProps({
      color: 'secondary',
      shape: 'circle',
    } as const),
  },

  setup (props, { slots, attrs }) {
    const { paperClasses, paperStyles } = usePaper(props)

    const rootRef = ref<HTMLElement | null>()
    const contentRef = ref<HTMLElement | null>()

    function onResize () {
      nextTick(() => {
        if (!rootRef.value || !contentRef.value) return
        const ratio = Math.min(
          (rootRef.value.offsetWidth / contentRef.value.offsetWidth) * RADIX,
          (rootRef.value.offsetHeight / contentRef.value.offsetHeight) * RADIX,
          1
        )
        contentRef.value.style.transform = `translateX(-50%) translateY(-50%) scale(${ ratio })`
      })
    }

    watch(toRef(props, 'text'), onResize)

    return () => {
      const hasImage = !!props.image
      const hasIcon = !!props.icon
      const hasText = !!(props.text || slots.default)
      const isClickable = props.link || !!(attrs.onClick || attrs.onClickOnce)

      return (
        <props.tag
          class={ [
            've-avatar',
            {
              've-avatar--left': props.left === true,
              've-avatar--right': props.right === true,
              've-avatar--icon': props.icon,
              've-avatar--link': isClickable,
            },
            paperClasses.value,
          ] }
          style={ paperStyles.value }
          ref={ rootRef }
          v-resize={ onResize }
        >
          { hasImage && (
            <Image
              src={ props.image }
              alt=""
            />
          ) }

          { hasIcon && !hasImage && (
            <Icon
              icon={ props.icon }
              size={ props.size }
            />
          ) }

          { hasText && !hasIcon && !hasImage && (
            <span
              class="ve-avatar__wrapper"
              ref={ contentRef }
            >
              { slots.default?.() ?? props.text }
            </span>
          ) }
        </props.tag>
      )
    }
  }
})

export type Avatar = InstanceType<typeof Avatar>