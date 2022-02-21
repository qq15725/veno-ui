// Styles
import './styles/date-picker.scss'

// Utils
import { computed, ref, watch } from 'vue'
import { genericComponent, getUid, wrapInArray, keyValues } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Input } from '../input/input'
import { Menu } from '../menu'
import { DatePickerPanel } from './date-picker-panel'
import { DateRangePickerPanel } from './date-range-picker-panel'

// Types
import type { InputSlots } from '../input/input'

export type DatePickerSlots = InputSlots

export const DatePicker = genericComponent<new () => {
  $slots: DatePickerSlots
}>()({
  name: 'VeDatePicker',

  props: {
    /**
     * @zh 输入框后追加的图标
     */
    appendInnerIcon: {
      type: String,
      default: '$calendar',
    },

    /**
     * @zh 时间格式化
     */
    format: [Array, String, Function],

    /**
     * @zh 输入框ID
     */
    id: String,

    /**
     * @zh 绑定值
     */
    modelValue: {
      type: [String, Array],
      default: () => [],
    },

    /**
     * @zh 点击清除后是否展开菜单面板
     */
    openOnClear: Boolean,

    /**
     * @zh 面板的属性
     */
    panelProps: Object,

    /**
     * @zh 只读
     */
    readonly: Boolean,

    /**
     * @zh 开启范围时间选择
     */
    range: Boolean,
  },

  emits: {
    'update:modelValue': (val: any) => true,
    'change': (val: any) => true,
  },

  setup (props, { slots, emit }) {
    const activator = ref()
    const inputRef = ref()
    const isActiveMenu = ref(false)
    const id = computed(() => props.id || `ve-date-picker-${ getUid() }`)
    const model = useProxiedModel(
      props, 'modelValue', [],
      v => wrapInArray(v),
      (v: any) => props.range ? v : v[0]
    )
    const panelProps = computed(() => {
      const panelProps = { ...props.panelProps }
      if (props.format) {
        panelProps.format = props.format
      }
      return panelProps
    })

    watch(() => inputRef.value, val => {
      activator.value = val.$el.querySelector('.ve-input-control')
    })

    function onClear (e: MouseEvent) {
      model.value = []
      if (props.openOnClear) {
        isActiveMenu.value = true
      }
    }

    function onKeydown ({ key }: KeyboardEvent) {
      if ([keyValues.enter, keyValues.space].includes(key) && !isActiveMenu.value) {
        isActiveMenu.value = true
      }

      if (key === keyValues.esc && isActiveMenu.value) {
        isActiveMenu.value = false
      }
    }

    function blur () {
      inputRef.value?.blur()
    }

    function onChange () {
      emit('change', props.range ? model.value : model.value[0])
    }

    return () => {
      return (
        <Input
          appendInnerIcon={ props.appendInnerIcon }
          class={ [
            've-date-picker',
            {
              've-date-picker--active-menu': isActiveMenu.value,
            }
          ] }
          id={ id.value }
          modelValue={ model.value.join(' ~ ') }
          onClick:clear={ onClear }
          onClick:control={ () => {
            if (props.readonly) return
            if (isActiveMenu.value) {
              blur()
            } else {
              isActiveMenu.value = true
            }
          } }
          onBlur={ () => isActiveMenu.value = false }
          onKeydown={ onKeydown }
          onMousedown={ (e: MouseEvent) => e.preventDefault() }
          ref={ inputRef }
          readonly
        >
          { {
            ...slots,
            default: () => (
              <>
                { activator.value && (
                  <Menu
                    contentClass="ve-date-picker-menu-wrapper"
                    id={ `${ id.value }-menu` }
                    v-model={ isActiveMenu.value }
                    activator={ activator.value }
                    openOnClick={ false }
                  >
                    { !props.range && (
                      <DatePickerPanel
                        { ...panelProps.value }
                        modelValue={ model.value[0] as any }
                        onUpdate:modelValue={ val => {
                          model.value = [val]
                          blur()
                          onChange()
                        } }
                      />
                    ) }

                    { props.range && (
                      <DateRangePickerPanel
                        { ...panelProps.value }
                        v-model={ model.value }
                        onPreview={ v => {
                          if (!v) {
                            blur()
                            onChange()
                          }
                        } }
                      />
                    ) }
                  </Menu>
                ) }
              </>
            )
          } }
        </Input>
      )
    }
  }
})

export type DatePicker = InstanceType<typeof DatePicker>