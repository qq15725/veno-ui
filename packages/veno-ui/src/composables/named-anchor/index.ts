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
  scrollTarget: {
    type: [String, Object] as PropType<string | HTMLElement>
  },
}, 'named-anchor')

export function useNamedAnchor (props: ExtractPropTypes<ReturnType<typeof makeNamedAnchor>>) {
  const active = ref<string>()
  const names = ref(new Set<string>())
  const offset = computed(() => parseInt(props.offset, 10))
  const scrollTarget = computed(() => (
    typeof props.scrollTarget === 'string'
      ? document.querySelector(props.scrollTarget)
      : props.scrollTarget
  ))
  const scrolling = ref(false)

  const { isWebHashHistory } = useRouterHistory()

  let timeout: any = 0
  const activate = (name: string) => {
    const target = document.getElementById(name)
    if (target) {
      clearTimeout(timeout)
      scrolling.value = true
      timeout = setTimeout(() => scrolling.value = false, 800)
      const container = scrollTarget.value ?? window
      const offsetTop = scrollTarget.value?.scrollTop ?? window.scrollY
      container.scrollTo({
        top: target.getBoundingClientRect().top + offsetTop - offset.value,
        behavior: 'smooth'
      })
    }
    active.value = name
  }

  const findActiveHash = () => {
    const offsetTop = scrollTarget.value?.getBoundingClientRect().top || 0

    active.value = [...names.value]
      .reduce((pos, name) => {
        const box = document.getElementById(name)?.getBoundingClientRect()

        if (box) {
          pos.push({
            name,
            top: box.top - offsetTop,
            height: box.height
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
  value: {
    type: String,
    required: true,
  }
}, 'named-anchor-item')

export function useNamedAnchorItem (
  props: ExtractPropTypes<ReturnType<typeof makeNamedAnchorItem>>
) {
  const parent = inject(NamedAnchorKey)

  if (!parent) throw new Error('[VenoUi] Could not find namedAnchor instance')

  const { isWebHashHistory } = useRouterHistory()

  const item = {
    ...parent,
    isWebHashHistory,
    to: computed(() => (
      isWebHashHistory.value
        ? { query: { anchor: props.value }, replace: true }
        : { hash: `#${ props.value }`, replace: true }
    )),
    isActive: computed(() => parent.active.value === props.value)
  }

  parent.register(props.value)

  onBeforeUnmount(() => {
    parent.unregister(props.value)
  })

  return item
}