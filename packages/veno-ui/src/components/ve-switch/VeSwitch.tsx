// Styles
import './styles/ve-switch.scss'

// Utils
import { computed, defineComponent } from 'vue'

// Composables
import { makeTagProps } from '../../composables/tag'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeVariantProps, useVariant } from '../../composables/variant'
import { makeRoundedProps, useRounded } from '../../composables/rounded'

export default defineComponent({
  name: 'VeSwitch',

  props: {
    modelValue: Boolean,
    activeColor: {
      type: String,
      default: 'primary',
    },
    activeClass: String,
    ...makeTagProps(),
    ...makeRoundedProps({
      rounded: true,
    }),
    ...makeVariantProps({ variant: 'contained' } as const),
  },

  emit: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props) {
    const isActive = useProxiedModel(props, 'modelValue')
    const activeColor = props.activeColor ?? props.color
    const variantProps = computed(() => ({
      color: isActive.value ? activeColor : props.color,
      textColor: props.textColor,
      variant: props.variant,
    }))
    const { colorClasses, colorStyles, variantClasses } = useVariant(variantProps, 've-switch')
    const { roundedClasses } = useRounded(props, 've-switch')

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
          colorClasses.value,
          variantClasses.value,
          roundedClasses.value,
        ] }
        style={ [
          colorStyles.value,
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