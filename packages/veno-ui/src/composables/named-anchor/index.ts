// Utils
import { ref, computed, nextTick, onMounted, provide, inject, onBeforeUnmount, InjectionKey } from 'vue'
import { propsFactory, throttle } from '../../utils'

// Composables
import { useRoute, useRouterHistory } from '../router'

// Types
import type { ExtractPropTypes, Ref, PropType } from 'vue'

export interface NamedAnchorProvider
{
  names: Ref<Set<string>>
  active: Ref<string | undefined>
  activate: (name: string) => void
  register: (name: string) => void
  unregister: (name: string) => void
}

export const NamedAnchorKey: InjectionKey<NamedAnchorProvider> = Symbol.for('veno-ui:named-anchor')

export const makeNamedAnchor = propsFactory({
  offset: {
    type: [String, Number],
    default: 12,
  },
  scroller: {
    type: [String, Object] as PropType<string | HTMLElement>
  },
}, 'named-anchor')

export function useNamedAnchor (props: ExtractPropTypes<ReturnType<typeof makeNamedAnchor>>) {
  const active = ref<string>()
  const names = ref(new Set<string>())
  const scroller = computed(() => (
    typeof props.scroller === 'string'
      ? document.querySelector(props.scroller)
      : props.scroller
  ))
  const scrolling = ref(false)

  const { isWebHashHistory } = useRouterHistory()

  let timeout: any = 0
  const activate = (name: string) => {
    scrolling.value = true
    clearTimeout(timeout)
    timeout = setTimeout(() => scrolling.value = false, 800)
    document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' })
    active.value = name
  }

  const findActiveHash = () => {
    const offsetTop = scroller.value?.getBoundingClientRect().top || 0

    active.value = [...names.value]
      .reduce((pos, name) => {
        const rect = document.getElementById(name)?.getBoundingClientRect()

        if (rect) {
          pos.push({
            name,
            top: rect.top - offsetTop,
            height: rect.height
          })
        }

        return pos
      }, [] as { name: string, top: number, height: number }[])
      .sort((a, b) => a.top - b.top)
      .reduce((prev, item) => {
        if (item.top + item.height < 0) {
          return prev
        }
        if (item.top <= props.offset) {
          if (prev === null) {
            return item
          } else if (item.top === prev.top) {
            if (item.name === active.value) {
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
      }, null as { name: string, top: number, height: number } | null)
      ?.name
  }

  const onScroll = throttle(() => {
    if (scrolling.value || !names.value.size) return

    findActiveHash()
  }, 17)

  onMounted(() => {
    document.addEventListener('scroll', onScroll, true)

    nextTick(() => {
      if (isWebHashHistory.value) {
        const route = useRoute()
        if (route.value?.query?.anchor) {
          activate(route.value.query.anchor as string)
        }
      } else {
        if (window.location.hash) {
          activate(decodeURIComponent(window.location.hash.substring(1)))
        }
      }
    })
  })

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', onScroll, true)
  })

  const namedAnchor = {
    names,
    active,
    activate,
    register: (name: string) => {
      names.value.add(name)
    },
    unregister: (name: string) => {
      names.value.delete(name)
    }
  }

  provide(NamedAnchorKey, namedAnchor)

  return namedAnchor
}

export const makeNamedAnchorItem = propsFactory({
  name: {
    type: String,
    required: true,
  }
}, 'named-anchor-item')

export function useNamedAnchorItem (
  props: ExtractPropTypes<ReturnType<typeof makeNamedAnchorItem>>
) {
  const parent = inject(NamedAnchorKey)

  if (!parent) throw new Error('[VenoUi] Could not find namedAnchor instance')

  const name = computed(() => props.name)

  const { isWebHashHistory } = useRouterHistory()

  const item = {
    ...parent,
    isWebHashHistory,
    to: computed(() => (
      isWebHashHistory.value
        ? { query: { anchor: name.value }, replace: true }
        : { hash: `#${ name.value }`, replace: true }
    )),
    isActive: computed(() => parent.active.value === name.value)
  }

  parent.register(name.value)

  onBeforeUnmount(() => {
    parent.unregister(name.value)
  })

  return item
}