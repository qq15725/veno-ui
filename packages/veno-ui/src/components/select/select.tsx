// Styles
import './styles/select.scss'

// Utils
import { computed, ref, watch } from 'vue'
import { genericComponent, getUid, wrapInArray } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Input } from '../input/input'
import { Icon } from '../icon'
import { Menu } from '../menu'
import { List, ListItem } from '../list'
import { Tag } from '../tag'
import { TagGroup } from '../tag-group'

// Types
import type { PropType } from 'vue'
import type { Anchor } from '../../utils'
import type { InputSlots } from '../input/input'
import type { Origin } from '../../composables/position-strategy'
import type { ListItemProps } from '../list/list'
import type { ListChildrenSlots } from '../list/list-children'

export type SelectItemProps = string | Record<string, any>

export type InternalSelectItemProps = ListItemProps & {
  text: string
  value?: any
}

export type SelectSlots = InputSlots & ListChildrenSlots<InternalSelectItemProps>

export const Select = genericComponent<new () => {
  $slots: SelectSlots
}>()({
  name: 'VeSelect',

  props: {
    anchor: {
      type: String as PropType<Anchor>,
      default: 'bottom',
    },
    id: String,
    items: Array as PropType<SelectItemProps[]>,
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    modelValue: {
      type: [String, Object, Array],
      default: () => ([]),
    },
    multiple: Boolean,
    noDataText: {
      type: String,
      default: '暂无数据',
    },
    returnObject: Boolean,
    readonly: Boolean,
    origin: {
      type: String as PropType<Origin>,
      default: 'auto',
    },
    openOnClear: Boolean,
    tags: Boolean,
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots }) {
    const inputRef = ref()
    const activator = ref()
    const isActiveMenu = ref(false)
    const id = computed(() => props.id || `ve-select-${ getUid() }`)
    const model = useProxiedModel(
      props, 'modelValue', [],
      v => wrapInArray(v),
      (v: any) => props.multiple ? v : v[0]
    )
    const items = computed(() => props.items?.map(normalizeItem) ?? [])
    const active = computed({
      get: () => model.value.map((v: any) => v && typeof v === 'object' ? v![props.itemValue] : v),
      set: val => {
        model.value = props.returnObject ? val.map(v => getItem(v)) : val
        if (props.multiple) return
        isActiveMenu.value = false
      },
    })
    const selections = computed(() => items.value.filter(item => active.value.includes(item.value)))
    const text = computed(() => selections.value.map(item => item.text).join(', '))

    function getItem (v: any) {
      return props.items?.find(i => {
        const i1 = typeof i === 'object' ? i[props.itemValue] : i
        const v1 = typeof v === 'object' ? v[props.itemValue] : v
        return i1 === v1
      })
    }

    function normalizeItem (item: SelectItemProps): InternalSelectItemProps {
      if (typeof item === 'object') {
        const value = item[props.itemValue]
        const text = item[props.itemText] ?? value
        return { text, value }
      }
      return { text: item, value: item }
    }

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
      if (['Enter', ' '].includes(key) && !isActiveMenu.value) {
        isActiveMenu.value = true
      }

      if (key === 'Escape' && isActiveMenu.value) {
        isActiveMenu.value = false
      }
    }

    return () => {
      return (
        <Input
          ref={ inputRef }
          id={ id.value }
          class={ [
            've-select',
            {
              've-select--active-menu': isActiveMenu.value,
            }
          ] }
          readonly
          modelValue={ props.tags ? undefined : text.value }
          type={ props.multiple ? 'textarea' : undefined }
          autoGrow={ props.multiple ? true : undefined }
          rows={ props.multiple ? 1 : undefined }
          onClick:clear={ onClear }
          onClick:control={ () => {
            if (props.readonly) return
            if (isActiveMenu.value) {
              inputRef.value?.blur()
            } else {
              isActiveMenu.value = true
            }
          } }
          onBlur={ () => isActiveMenu.value = false }
          onKeydown={ onKeydown }
          onMousedown={ (e: MouseEvent) => e.preventDefault() }
          v-slots={ {
            prepend: slots.prepend,
            label: slots.label,
            'prepend-inner': slots['prepend-inner'],
            prefix: slots.prefix,
            suffix: slots.suffix,
            clear: slots.clear,
            append: slots.append,
            counter: slots.counter,
            'append-inner': () => (
              <Icon
                class="ve-select__icon"
                icon="$dropdown"
              />
            ),
            default: () => (
              <>
                { activator.value && (
                  <Menu
                    contentClass="ve-select__wrapper"
                    id={ `${ id.value }-menu` }
                    v-model={ isActiveMenu.value }
                    activator={ activator.value }
                    anchor={ props.anchor }
                    origin={ props.origin }
                    minWidth={ undefined }
                    openOnClick={ false }
                  >
                    <List
                      maxHeight={ 250 }
                      density="ultra-high"
                      items={
                        items.value?.length
                          ? items.value
                          : [{ text: props.noDataText, link: false }]
                      }
                      v-model:active={ active.value }
                      activeStrategy={ props.multiple ? 'multiple' : 'single' }
                      v-slots={ {
                        header: slots.header,
                        item: (item: any) => {
                          return slots.item?.(item) ?? (
                            <ListItem
                              onMousedown={ (e: MouseEvent) => e.preventDefault() }
                              link
                              { ...item }
                            />
                          )
                        },
                        title: slots.title,
                        subtitle: slots.subtitle,
                      } }
                    />
                  </Menu>
                ) }

                { props.tags && (
                  <TagGroup class="ve-select__selections">
                    { selections.value.map(item => {
                      return (
                        <Tag>{ item.text }</Tag>
                      )
                    }) }
                  </TagGroup>
                ) }
              </>
            )
          } }
        />
      )
    }
  }
})

export type Select = InstanceType<typeof Select>