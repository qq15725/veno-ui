// Styles
import './styles/ve-avatar.scss'

// Utils
import { ref, toRef, watch } from 'vue'
import { genericComponent } from '../../utils'
import { Resize } from '../../directives/resize'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'

// Components
import { VeImage } from '../ve-image'
import { VeIcon } from '../ve-icon'

// Types
export type VeAvatar = InstanceType<typeof VeAvatar>

export const VeAvatar = genericComponent()({
  name: 'VeAvatar',

  directives: { Resize },

  props: {
    image: String,
    icon: String,
    text: String,
    ...makeMaterialProps({
      color: 'grey',
      textColor: 'white',
      variant: 'contained',
    } as const),
  },

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props, 've-avatar')
    const wrapRef = ref<HTMLElement | null>()
    const selfRef = ref<HTMLElement | null>()

    const fitSizeTransform = (): void => {
      if (selfRef.value && wrapRef.value) {
        const radix = 0.9
        const ratio = Math.min(
          (selfRef.value!.offsetWidth / wrapRef.value!.offsetWidth) * radix,
          (selfRef.value!.offsetHeight / wrapRef.value!.offsetHeight) * radix,
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
            materialClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
          ref={ selfRef }
        >
          { hasImage && <VeImage src={ props.image } /> }

          { hasIcon && <VeIcon icon={ props.icon } /> }

          { hasText && (
            <div
              class="ve-avatar__wrap"
              ref={ wrapRef }
              v-resize={ fitSizeTransform }
            >
              { props.text && props.text }

              { slots.default?.() }
            </div>
          ) }
        </props.tag>
      )
    }
  }
})