// Utils
import { ref, computed, onMounted, provide, inject, onBeforeUnmount, InjectionKey } from 'vue'
import { throttle, propsFactory, getUid } from '../../utils'

// Types
import type { PropType, Ref } from 'vue'

export interface NamedAnchorProvider
{
  items: Ref<NamedAnchorItem[]>
  current: Ref<string | null>
  setCurrent: (name: string) => void
  register: (id: string, name: string) => void
  unregister: (id: string) => void
}

export interface NamedAnchorItem
{
  id: string
  name: string
}

export const NamedAnchorKey: InjectionKey<NamedAnchorProvider>
  = Symbol.for('veno-ui:named-anchor')

export interface NamedAnchorProps
{
  offset: string | number
  scrollContainer?: string | HTMLElement
}

export const makeNamedAnchor = propsFactory({
  offset: {
    type: [String, Number],
    default: 12
  },
  scrollContainer: {
    type: [String, Object] as PropType<NamedAnchorProps['scrollContainer']>
  },
}, 'named-anchor')

export function useNamedAnchor (props: NamedAnchorProps) {
  const items = ref<NamedAnchorItem[]>([])
  const current = ref<string | null>(null)
  const scrollContainer = computed(() => {
    return typeof props.scrollContainer === 'string'
      ? document.querySelector(props.scrollContainer)
      : props.scrollContainer
  })

  const provider = {
    items,
    current,
    setCurrent: (name: string) => {
      current.value = name
      document.getElementById(name)?.scrollIntoView()
    },
    register: (id: string, name: string) => {
      items.value.push({ id, name })
    },
    unregister: (id: string) => {
      items.value.splice(items.value.findIndex(v => v.id === id), 1)
    }
  }

  const handleScroll = () => {
    current.value = items.value
      .reduce<{ name: string, top: number, height: number }[]>((pos, item) => {
        const el = document.getElementById(item.name)
        if (!el) return pos
        const { top, height } = el.getBoundingClientRect()
        return [
          ...pos,
          {
            name: item.name,
            top: top - (scrollContainer.value?.getBoundingClientRect?.()?.top ?? 0),
            height
          }
        ]
      }, [])
      .sort((a, b) => {
        if (a.top > b.top) {
          return 1
        } else if (a.top === b.top && a.height < b.height) {
          return -1
        }
        return -1
      })
      .reduce<{ name: string, top: number, height: number } | null>((prev, item) => {
        if (item.top + item.height < 0) {
          return prev
        }
        if (item.top <= props.offset) {
          if (prev === null) {
            return item
          } else if (item.top === prev.top) {
            if (item.name === current.value) {
              return item
            } else {
              return prev
            }
          } else if (item.top > prev.top) {
            return item
          } else {
            return prev
          }
        }
        return prev
      }, null)
      ?.name
      ?? null
  }

  const onScroll = throttle(() => handleScroll(), 128)

  onMounted(() => {
    document.addEventListener('scroll', onScroll, true)
    provider.setCurrent(window.location.hash)
    handleScroll()
  })

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', onScroll, true)
  })

  provide(NamedAnchorKey, provider)

  return provider
}

export interface NamedAnchorItemProps
{
  name: string
}

export const makeNamedAnchorItem = propsFactory({
  name: {
    type: String,
    required: true
  }
}, 'named-anchor-item')

export function useNamedAnchorItem (props: NamedAnchorItemProps) {
  const namedAnchor = inject(NamedAnchorKey)
  if (!namedAnchor) throw new Error('[VenoUi] Could not find namedAnchor instance')
  const id = `named-anchor-${ getUid() }`
  namedAnchor.register?.(id, props.name)
  onBeforeUnmount(() => {
    namedAnchor.unregister(id)
  })
  return {
    ...namedAnchor,
    isActive: computed(() => {
      return namedAnchor.current.value === props.name
    })
  }
}