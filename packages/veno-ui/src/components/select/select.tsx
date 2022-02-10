// Styles
import './styles/select.scss'

// Utils
import { computed, ref } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Input, makeInputProps, filterInputProps } from '../input/input'
import { Icon } from '../icon'
import { Menu } from '../menu'
import { List, ListItem } from '../list'

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
  value: any
}

export type SelectSlots = InputSlots & ListChildrenSlots<InternalSelectItemProps>

function parseItems (items: SelectItemProps[] | undefined, itemText: string, itemValue: string): InternalSelectItemProps[] | undefined {
  if (!items) return undefined
  return items.map(item => {
    if (typeof item === 'string') {
      return { $type: 'item', text: item, value: item }
    }
    const value = item[itemValue]
    const text = item[itemText] ?? value
    return { ...item, $type: 'item', text, value }
  })
}

export const Select = genericComponent<new () => {
  $slots: SelectSlots
}>()({
  name: 'VeSelect',

  inheritAttrs: false,

  props: {
    anchor: {
      type: String as PropType<Anchor>,
      default: 'bottom',
    },
    origin: {
      type: String as PropType<Origin>,
      default: 'auto',
    },
    items: Array as PropType<SelectItemProps[]>,
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    returnObject: Boolean,
    ...makeInputProps(),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { attrs, slots }) {
    const isActive = ref(false)
    const id = computed(() => props.id || `ve-select-${ getUid() }`)

    const selected = useProxiedModel(
      props, 'modelValue', props.modelValue,
      v => props.returnObject && typeof v === 'object' ? v[props.itemValue] : v,
      v => props.returnObject ? props.items?.find(i => typeof i === 'string' ? i === v : i[props.itemValue] === v) : v
    )
    const items = computed(() => parseItems(props.items, props.itemText, props.itemValue))
    const currentItem = computed(() => items.value?.find(v => v.value === selected.value))

    return () => {
      const [inputProps] = filterInputProps(props)

      return (
        <Menu
          class="ve-select-overlay"
          id={ id.value }
          v-model={ isActive.value }
          anchor={ props.anchor }
          origin={ props.origin }
          min-width={ undefined }
          v-slots={ {
            activator: ({ props: activatorProps }) => (
              <Input
                { ...inputProps }
                id={ id.value }
                class={ [
                  've-select',
                  {
                    've-select--active': isActive.value,
                  }
                ] }
                readonly
                model-value={ currentItem.value?.text }
                onClick:control={ e => {
                  if (props.readonly || props.disabled) return
                  activatorProps?.onClick(e)
                } }
                { ...attrs }
                v-slots={ {
                  prepend: slots.prepend,
                  label: slots.label,
                  prependInner: slots.prependInner,
                  prefix: slots.prefix,
                  suffix: slots.suffix,
                  clear: slots.clear,
                  append: slots.append,
                  counter: slots.counter,
                  appendInner: () => (
                    <Icon
                      class="ve-select__icon"
                      icon="$dropdown"
                    />
                  ),
                } }
              />
            ),
            default: () => (
              <List
                max-height={ 250 }
                elevation={ 8 }
                density="ultra-high"
                border
                shape="rounded"
                items={ items.value }
                v-slots={ {
                  header: slots.header,
                  item: (item: any) => {
                    return slots.item?.(item) ?? (
                      <ListItem
                        { ...item }
                        active={ item.value === selected.value }
                        onClick={ () => {
                          selected.value = item.value
                          isActive.value = false
                        } }
                      />
                    )
                  },
                  title: slots.title,
                  subtitle: slots.subtitle,
                } }
              />
            )
          } }
        />
      )
    }
  }
})

export type Select = InstanceType<typeof Select>