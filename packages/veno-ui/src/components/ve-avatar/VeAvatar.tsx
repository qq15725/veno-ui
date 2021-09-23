// Styles
import './styles/ve-avatar.scss'

// Composables

// Utilities
import { defineComponent } from 'vue'

import { VeImage } from '../ve-image'

export default defineComponent({
  name: 'VeAvatar',

  props: {
    src: String,
  },

  setup (props, { slots }) {
    return () => (
      <div
        class="ve-avatar"
      >
        <VeImage
          src={ props.src }
          aspect-ratio={ 1 }
        />
      </div>
    )
  },
})
