// Styles
import './styles/ve-avatar.scss'

// Utils
import { ref } from 'vue'
import { genericComponent } from '../../utils'
import { Resize } from '../../directives/resize'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'

// Components
import { VeImage } from '../ve-image'
import { VeIcon } from '../ve-icon'

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
    }),
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

    return () => (
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
        { props.image && <VeImage src={ props.image } /> }

        { props.icon && !props.image && <VeIcon icon={ props.icon } /> }

        <div
          class="ve-avatar__wrap"
          ref={ wrapRef }
          v-resize={ fitSizeTransform }
        >
          { props.text && props.text }

          { slots.default?.() }
        </div>
      </props.tag>
    )
  }
})

export type VeAvatar = InstanceType<typeof VeAvatar>
