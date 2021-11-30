// Styles
import './styles/switch.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { useProxiedModel } from '../../composables/proxied-model'

// Types
export type Switch = InstanceType<typeof Switch>

export const Switch = genericComponent()({
  name: 'Switch',

  props: {
    modelValue: Boolean,
    activeColor: {
      type: String,
      default: 'primary',
    },
    activeClass: String,
    ...makeMaterialProps({
      variant: 'contained',
      rounded: true,
    } as const),
  },

  emit: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props) {
    const isActive = useProxiedModel(props, 'modelValue')
    const activeColor = props.activeColor ?? props.color
    const computedProps = computed(() => ({
      ...props,
      color: isActive.value ? activeColor : props.color,
    }))
    const { materialClasses, materialStyles } = useMaterial(computedProps, 've-switch')

    return () => (
      <props.tag
        role="switch"
        aria-checked={ isActive.value }
        class={ [
          've-switch',
          {
            've-switch--active': isActive.value,
            [`${ props.activeClass }`]: isActive.value && props.activeClass,
          },
          materialClasses.value,
        ] }
        style={ [
          materialStyles.value,
        ] }
        onClick={ () => isActive.value = !isActive.value }
      >
        <div class="ve-switch__track">
          <div class="ve-switch__thumb" />
        </div>
      </props.tag>
    )
  }
})