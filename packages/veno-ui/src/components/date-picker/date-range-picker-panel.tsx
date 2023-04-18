// Styles
import './styles/date-range-picker-panel.scss'

// Utils
import { computed, provide, ref } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { createDate, defaultDateFormat } from '../../composables/date'
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Card } from '../card'
import { DatePickerPanel } from './date-picker-panel'
import { DateRangeKey } from './key'

// Types
import type { PropType } from 'vue'
import type { DateInstance } from '../../composables/date'

export const DateRangePickerPanel = defineComponent({
  name: 'VeDateRangePickerPanel',

  props: {
    /**
     * @zh 时间格式化
     */
    format: {
      type: [Array, Function] as PropType<string[] | ((dates: DateInstance[]) => string[])>,
      default: () => ['YYYY-MM-DD', 'YYYY-MM-DD'],
    },

    /**
     * @zh 时间值
     */
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  emits: {
    'update:modelValue': (_value: string[]) => true,
    'preview': (_value: boolean) => true,
  },

  setup(props, { emit }) {
    const model = useProxiedModel(props, 'modelValue')
    const selected = computed(() => {
      return model.value
        .map(createDate)
        .sort((a, b) => a.valueOf() - b.valueOf())
    })
    const isPreview = ref(false)

    function formatter(dates: DateInstance[]): string[] {
      return typeof props.format === 'function'
        ? props.format(dates)
        : dates.map((date, i) => date.format((props.format as any)[i]))
    }

    function preview(value: boolean) {
      isPreview.value = value
      emit('preview', isPreview.value)
    }

    function select(value: string) {
      const length = model.value.length
      if (length === 1 || (isPreview.value && length > 0)) {
        if (model.value[1] === value) return
        model.value = formatter([model.value[0], value].map(createDate))
      } else {
        if (model.value[0] === value) return
        model.value = formatter([value].map(createDate))
      }
    }

    function inRange(value: number) {
      if (selected.value.length < 2) return false
      return selected.value[0].valueOf() <= value
        && selected.value[1].valueOf() >= value
    }

    provide(DateRangeKey, {
      selected,
      select,
      inRange,
      preview,
      isPreview,
    })

    return () => {
      return (
        <Card class="ve-date-range-picker-panel">
          <DatePickerPanel
            format={ defaultDateFormat }
            modelValue={ createDate().startOf('month').format() }
            max={ createDate().startOf('month').format() }
          />

          <DatePickerPanel
            format={ defaultDateFormat }
            modelValue={ createDate().add(1, 'month').startOf('month').format() }
            min={ createDate().add(1, 'month').startOf('month').format() }
          />
        </Card>
      )
    }
  },
})
