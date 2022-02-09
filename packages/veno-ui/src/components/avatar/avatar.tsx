// Styles
import './styles/avatar.scss'

// Utils
import { ref, toRef, watch } from 'vue'
import { defineComponent } from '../../utils'
import { Resize } from '../../directives/resize'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'

// Components
import { Image } from '../image'
import { Icon } from '../icon'

// Types
export type Avatar = InstanceType<typeof Avatar>

export const Avatar = defineComponent({
  name: 'VeAvatar',

  directives: { Resize },

  props: {
    image: String,
    icon: String,
    text: String,
    ...makePaperProps({
      color: 'secondary',
      shape: 'circle',
    } as const),
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)
    const wrapRef = ref<HTMLElement | null>()
    const avatarRef = ref<HTMLElement | null>()

    const fitSizeTransform = (): void => {
      if (avatarRef.value && wrapRef.value) {
        const radix = 0.9
        const ratio = Math.min(
          (avatarRef.value!.offsetWidth / wrapRef.value!.offsetWidth) * radix,
          (avatarRef.value!.offsetHeight / wrapRef.value!.offsetHeight) * radix,
          1
        )
        wrapRef.value.style.transform = `translateX(-50%) translateY(-50%) scale(${ ratio })`
      }
    }

    watch(toRef(props, 'text'), fitSizeTransform)

    return () => {
      const hasImage = !!props.image
      const hasIcon = !!props.icon && !hasImage
      const hasText = !!(props.text || slots.default)

      return (
        <props.tag
          class={ [
            've-avatar',
            paperClasses.value,
          ] }
          style={ paperStyles.value }
          ref={ avatarRef }
        >
          { hasImage && <Image src={ props.image } /> }

          { hasIcon && <Icon icon={ props.icon } /> }

          { hasText && (
            <div
              class="ve-avatar__wrapper"
              ref={ wrapRef }
              v-resize={ fitSizeTransform }
            >
              { slots.default?.() ?? props.text }
            </div>
          ) }
        </props.tag>
      )
    }
  }
})