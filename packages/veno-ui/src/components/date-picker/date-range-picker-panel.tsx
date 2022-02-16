// Styles
import './styles/date-range-picker-panel.scss'

// Utils
import { computed, provide } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { createDate } from '../../composables/date'
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Card } from '../card'
import { DatePickerPanel } from './date-picker-panel'

// Types
import type { InjectionKey, PropType } from 'vue'

interface DateRangeInstance
{
  inRange: (value: number) => boolean
}

export const DateRangeKey: InjectionKey<DateRangeInstance> = Symbol.for('veno-ui:date-range')

export const DateRangePickerPanel = defineComponent({
  name: 'VeDateRangePickerPanel',

  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  emits: {
    'update:modelValue': (value: string[]) => true,
  },

  setup (props) {
    const model = useProxiedModel(
      props, 'modelValue', []
    )

    const sorted = computed(() => {
      return model.value.map(createDate).sort((a, b) => a.valueOf() - b.valueOf())
    })

    function inRange (value: number) {
      if (!sorted.value[0] || !sorted.value[1]) return false
      return sorted.value[0].valueOf() <= value
        && sorted.value[1].valueOf() >= value
    }

    provide(DateRangeKey, {
      inRange,
    })

    return () => {
      return (
        <Card class="ve-date-range-picker-panel">
          <DatePickerPanel v-model={ model.value[0] } />
          <DatePickerPanel v-model={ model.value[1] } />
        </Card>
      )
    }
  }
})