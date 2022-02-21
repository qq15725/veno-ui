// Styles
import './styles/select.scss'

// Utils
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { genericComponent, getUid, wrapInArray, pick, debounce, keyValues, convertToUnit } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Input } from '../input/input'
import { Menu } from '../menu'
import { List, ListItem, ListItemAvatar } from '../list'
import { Tag } from '../tag'
import { TagGroup } from '../tag-group'
import { Progress } from '../progress'
import { Icon } from '../icon'
import { Checkbox } from '../checkbox'

// Types
import type { PropType } from 'vue'
import type { MakeSlots } from '../../utils'
import type { InputSlots } from '../input/input'
import type { ListItemProps } from '../list/list'
import type { ListChildrenSlots } from '../list/list-children'

export type SelectItemProps = string | Record<string, any>

export type InternalSelectItemProps = ListItemProps & {
  text: string
  value: string | number
  filtered?: boolean
}

export type SelectSlots = InputSlots & ListChildrenSlots<InternalSelectItemProps> & MakeSlots<{
  'tag': [{
    item: InternalSelectItemProps,
    close: () => void,
  }],
  'no-data': [],
}>

function defaultFilter (value: string, query: string, item?: any) {
  if (value == null || query == null) return -1
  return value.toString()
    .toLocaleLowerCase()
    .indexOf(query.toString().toLocaleLowerCase())
}

export const Select = genericComponent<new () => {
  $slots: SelectSlots
}>()({
  name: 'VeSelect',

  props: {
    /**
     * @zh 追加的内联图标
     */
    appendInnerIcon: {
      type: String,
      default: '$dropdown',
    },

    /**
     * @zh 可过滤的
     */
    filterable: Boolean,

    /**
     * @zh ID
     */
    id: String,

    /**
     * @zh 可选项
     */
    items: Array as PropType<SelectItemProps[]>,

    /**
     * @zh 可选项文本字段
     */
    itemText: {
      type: String,
      default: 'text',
    },

    /**
     * @zh 可选项值字段
     */
    itemValue: {
      type: String,
      default: 'value',
    },

    /**
     * @zh 加载中
     */
    loading: Boolean,

    /**
     * @zh 当前值
     */
    modelValue: {
      type: null,
      default: () => [],
    },

    /**
     * @zh 是否多选
     */
    multiple: Boolean,

    /**
     * @zh 无数据时显示的文本
     */
    noDataText: {
      type: String,
      default: '暂无数据',
    },

    /**
     * @zh 是否在清除时打开可选菜单
     */
    openOnClear: Boolean,

    /**
     * @zh 输入框占位符
     */
    placeholder: String,

    /**
     * @zh 查询字符串
     */
    query: String,

    /**
     * @zh 标签
     */
    tags: Boolean,

    /**
     * @zh 只读
     */
    readonly: Boolean,

    /**
     * @zh 返回对象值
     */
    returnObject: Boolean,
  },

  emits: {
    'click:clear': (e: MouseEvent) => true,
    'update:modelValue': (val: any) => true,
    'update:query': (val: string) => true,
  },

  setup (props, { emit, slots }) {
    const activator = ref()
    const inputRef = ref()
    const tagInputRef = ref()
    const tagInputWidth = ref()
    const mirrorRef = ref()
    const isActiveMenu = ref(false)
    const id = computed(() => props.id || `ve-select-${ getUid() }`)
    const items = computed(() => props.items?.map(normalizeItem) ?? [])
    const model = useProxiedModel(
      props, 'modelValue', [],
      v => wrapInArray(v),
      (v: any) => props.multiple ? v : v[0]
    )
    const query = ref(props.query)
    const active = computed({
      get: () => model.value.map(
        (v: any) => v && typeof v === 'object'
          ? v![props.itemValue]
          : v
      ),
      set: val => {
        model.value = props.returnObject
          ? val.map(getItem).filter(v => v !== undefined)
          : val
        if (!props.multiple) inputRef.value.blur()
      },
    })
    const selections = computed(() => {
      return active.value.map(v => {
        return items.value.find(i => i.value === v)!
      }).filter(v => v !== undefined)
    })
    const onUpdateQuery = debounce((v: string) => {
      if (props.loading) return
      emit('update:query', v)
    }, 300)
    const inputValue = computed({
      get: () => {
        if (props.filterable && isActiveMenu.value) {
          return query.value
        }
        if (props.tags) {
          return undefined
        }
        return selections.value.map(item => item.text).join(', ')
      },
      set: val => {
        query.value = val
        onUpdateQuery(val)
      },
    })
    const placeholder = computed(() => {
      return props.tags && active.value.length > 0
        ? undefined
        : props.placeholder
    })
    const filteredItems = computed(() => items.value.filter(v => !v.filtered))

    function getItem (v: any) {
      return props.items?.find(i => {
        const i1 = typeof i === 'object' ? i[props.itemValue] : i
        const v1 = typeof v === 'object' ? v[props.itemValue] : v
        return i1 === v1
      })
    }

    function normalizeItem (item: SelectItemProps): InternalSelectItemProps {
      let v: InternalSelectItemProps
      if (typeof item === 'object') {
        const value = item[props.itemValue]
        const text = item[props.itemText] ?? value
        v = { text, value }
      } else {
        v = { text: item, value: item }
      }
      if (props.filterable && query.value) {
        v.filtered = defaultFilter(v.text, query.value) === -1
      }
      return v
    }

    watch(() => inputRef.value, val => {
      activator.value = val.$el.querySelector('.ve-input-control')
    })

    watch(() => props.query, val => {
      query.value = val
    })

    function onBlur () {
      isActiveMenu.value = false
    }

    function onClear (e: MouseEvent) {
      model.value = []
      if (props.openOnClear) {
        isActiveMenu.value = true
      } else {
        inputRef.value.blur()
      }
      emit('click:clear', e)
    }

    function onControl () {
      if (props.readonly) return
      if (isActiveMenu.value) {
        inputRef.value?.blur()
      } else {
        isActiveMenu.value = true
      }
    }

    const onKeydownToggle = debounce(() => {
      const value = filteredItems.value[0].value
      if (props.multiple) {
        active.value = active.value.indexOf(value) > -1
          ? active.value.filter(v => v !== value)
          : active.value.concat([value])
      } else {
        active.value = [value]
      }
    }, 60)

    const onKeydownDelete = debounce(() => {
      active.value = active.value.filter((_, i) => i !== active.value.length - 1)
    }, 60)

    function onKeydown ({ key }: KeyboardEvent) {
      if ([keyValues.enter, keyValues.space].includes(key)) {
        if (isActiveMenu.value) {
          if (props.filterable
            && filteredItems.value.length > 0) {
            onKeydownToggle()
          }
        } else {
          isActiveMenu.value = true
        }
      }

      if (key === keyValues.backspace
        && isActiveMenu.value
        && props.multiple
        && props.filterable
        && props.tags
        && !query.value
        && active.value.length > 0) {
        onKeydownDelete()
      }

      if (key === keyValues.esc && isActiveMenu.value) {
        isActiveMenu.value = false
      }
    }

    function resizeTagInput () {
      tagInputWidth.value = Math.max(0, mirrorRef.value.scrollWidth) + 1
    }

    let observer: ResizeObserver | undefined
    watch(mirrorRef, val => {
      if (val) {
        observer = new ResizeObserver(resizeTagInput)
        observer.observe(mirrorRef.value!)
      } else {
        observer?.disconnect()
      }
    })
    onBeforeUnmount(() => {
      observer?.disconnect()
    })

    return () => {
      const inputProps = props.multiple && !props.tags ? {
        autoResize: true,
        rows: 1,
        type: 'textarea'
      } : {}
      const [listSlots, inputSlots] = pick(slots, [
        'item', 'header', 'title', 'subtitle'
      ])

      return (
        <Input
          { ...inputProps }
          class={ [
            've-select',
            {
              've-select--active-menu': isActiveMenu.value,
            }
          ] }
          id={ id.value }
          inputAttach={ tagInputRef.value }
          v-model={ inputValue.value }
          onBlur={ onBlur }
          onClick:clear={ onClear }
          onClick:control={ onControl }
          onInput={ ((e: InputEvent) => {
            if (mirrorRef.value) {
              mirrorRef.value.textContent = (e.target as any).value
              resizeTagInput()
            }
          }) as any }
          onKeydown={ onKeydown }
          onMousedown={ (e: MouseEvent) => e.preventDefault() }
          placeholder={ placeholder.value }
          readonly={ !props.filterable }
          ref={ inputRef }
        >
          { {
            ...inputSlots,
            'append-inner': () => (
              <>
                { !props.loading && (
                  <Icon
                    icon={ props.appendInnerIcon }
                  />
                ) }

                { props.loading && (
                  <Progress
                    size="14"
                    variant="circular"
                    stroke-width="2"
                    indeterminate
                  />
                ) }
              </>
            ),
            default: () => (
              <>
                { activator.value && (
                  <Menu
                    contentClass="ve-select-menu-wrapper"
                    id={ `${ id.value }-menu` }
                    v-model={ isActiveMenu.value }
                    activator={ activator.value }
                    minWidth={ undefined }
                    openOnClick={ false }
                  >
                    <List
                      maxHeight={ 250 }
                      items={ items.value }
                      v-model:active={ active.value }
                      activeStrategy={ props.multiple ? 'multiple' : 'single' }
                    >
                      { {
                        ...listSlots,
                        item: (item: any) => slots.item?.(item) ?? (
                          <ListItem
                            v-show={ !item.filtered }
                            onMousedown={ (e: MouseEvent) => e.preventDefault() }
                            link
                            { ...item }
                          >
                            { {
                              prepend: props.multiple ? () => (
                                <ListItemAvatar left>
                                  <Checkbox model-value={ active.value.includes(item.value) } />
                                </ListItemAvatar>
                              ) : undefined
                            } }
                          </ListItem>
                        ),
                        append: () => (
                          <>
                            { filteredItems.value.length === 0 && (slots['no-data']?.() ?? (
                              <ListItem text={ props.noDataText } />
                            )) }
                          </>
                        )
                      } }
                    </List>
                  </Menu>
                ) }

                { props.tags && (
                  <TagGroup
                    class="ve-select__selections"
                    size="x-small"
                  >
                    { selections.value.map(item => {
                      function close () {
                        active.value = active.value.filter(v => v !== item.value)
                      }

                      return slots.tag?.({ item, close }) ?? (
                        <Tag
                          tag="div"
                          key={ item.value }
                          closable
                          text={ item.text }
                          onClick:close={ (e: MouseEvent) => {
                            e.stopPropagation()
                            close()
                          } }
                        />
                      )
                    }) }

                    <div
                      class="ve-select__tag-input"
                      style={ {
                        width: convertToUnit(selections.value.length > 0 ? tagInputWidth.value : '100%')
                      } }
                      ref={ tagInputRef }
                    >
                      <span
                        class="ve-select__tag-input-mirror"
                        ref={ mirrorRef }
                        aria-hidden="true"
                      >{ query.value }</span>
                    </div>
                  </TagGroup>
                ) }
              </>
            )
          } }
        </Input>
      )
    }
  }
})

export type Select = InstanceType<typeof Select>