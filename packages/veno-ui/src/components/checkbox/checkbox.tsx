// Utils
import { computed } from 'vue'
import { defineComponent } from '../../utils'

// Components
import { SelectionControl } from '../selection-control'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { filterSelectionControlProps, makeSelectionControlProps } from '../selection-control/selection-control'

export const Checkbox = defineComponent({
  name: 'VeCheckbox',

  props: {
    /**
     * @zh 不确定的
     */
    indeterminate: Boolean,

    /**
     * @zh 不确定的图标
     */
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate',
    },

    ...makeSelectionControlProps({
      type: 'checkbox',
      falseIcon: '$checkboxOff',
      trueIcon: '$checkboxOn',
      color: 'primary',
    }),
  },

  emits: {
    'update:modelValue': (_val: any) => true,
    'update:indeterminate': (_val: boolean) => true,
  },

  setup(props, { emit, slots }) {
    const indeterminate = useProxiedModel(props, 'indeterminate')
    const falseIcon = computed(() => {
      return indeterminate.value
        ? props.indeterminateIcon
        : props.falseIcon
    })
    const trueIcon = computed(() => {
      return indeterminate.value
        ? props.indeterminateIcon
        : props.trueIcon
    })

    function onChange(val: any) {
      if (indeterminate.value) {
        indeterminate.value = false
      } else {
        emit('update:modelValue', val)
      }
    }

    return () => {
      const [controlProps] = filterSelectionControlProps(props)

      return (
        <SelectionControl
          { ...controlProps }
          class="ve-checkbox"
          onUpdate:modelValue={ onChange }
          falseIcon={ falseIcon.value }
          trueIcon={ trueIcon.value }
          aria-checked={ indeterminate.value ? 'mixed' : undefined }
        >
          { slots }
        </SelectionControl>
      )
    }
  },
})
