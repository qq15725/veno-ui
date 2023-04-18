// Styles
import './styles/avatar.scss'

// Utils
import { nextTick, ref, toRef, watch } from 'vue'
import { propsFactory } from '@veno-ui/utils'
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

export const makeAvatarProps = propsFactory({
  /**
   * @zh 是否在左侧
   */
  start: Boolean,

  /**
   * @zh 是否在右侧
   */
  end: Boolean,

  /**
   * @zh 图像
   */
  image: String,

  /**
   * @zh 图标
   */
  icon: [String, Object],

  /**
   * @zh 文本
   */
  text: String,

  /**
   * @zh 可点击
   */
  link: Boolean,

  ...makePaperProps({
    color: 'secondary',
    shape: 'circle',
  } as const),
}, 'avatar')

export const Avatar = defineComponent({
  name: 'VeAvatar',

  directives: { Resize },

  props: makeAvatarProps(),

  setup(props, { slots, attrs }) {
    const { paperClasses, paperStyles } = usePaper(props)

    const rootRef = ref<HTMLElement | null>()
    const contentRef = ref<HTMLElement | null>()

    function onResize() {
      nextTick(() => {
        if (!rootRef.value || !contentRef.value) return
        const ratio = Math.min(
          (rootRef.value.offsetWidth / contentRef.value.offsetWidth) * RADIX,
          (rootRef.value.offsetHeight / contentRef.value.offsetHeight) * RADIX,
          1,
        )
        contentRef.value.style.transform = `translateX(-50%) translateY(-50%) scale(${ ratio })`
      })
    }

    watch(toRef(props, 'text'), onResize)

    return () => {
      const hasImage = !!props.image
      const hasIcon = !!props.icon
      const hasText = !!props.text
      const isClickable = props.link || !!(attrs.onClick || attrs.onClickOnce)

      return (
        <props.tag
          class={ [
            've-avatar',
            {
              've-avatar--start': props.start,
              've-avatar--end': props.end,
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
              { props.text }
            </span>
          ) }

          { slots.default?.() }
        </props.tag>
      )
    }
  },
})

export type Avatar = InstanceType<typeof Avatar>
