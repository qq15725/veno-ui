// Utils
import { computed, ref } from 'vue'
import { propIsDefined as _propIsDefined, getCurrentInstance } from '../../utils'

// Types
import type { Ref } from 'vue'

// Composables
export function useProxiedModel<
  Props extends object & { [key in Prop as `onUpdate:${ Prop }`]: ((val: any) => void) | undefined },
  Prop extends Extract<keyof Props, string>,
  Inner = Props[Prop],
>(
  props: Props,
  prop: Prop,
  defaultValue?: Props[Prop],
  transformIn: (value?: Props[Prop]) => Inner = (v: any) => v,
  transformOut: (value: Inner) => Props[Prop] = (v: any) => v,
) {
  const vm = getCurrentInstance('useProxiedModel')

  const propIsDefined = computed(() => {
    return typeof props[prop] !== 'undefined'
      && vm.vnode
      && _propIsDefined(vm.vnode, prop)
  })

  const internal = ref(
    typeof props[prop] === 'undefined'
      ? defaultValue
      : props[prop],
  ) as Ref<Props[Prop]>

  return computed<Inner>({
    get() {
      if (propIsDefined.value) {
        return transformIn(props[prop])
      } else {
        return transformIn(internal.value)
      }
    },
    set(newValue) {
      internal.value = transformOut(newValue)
      vm.emit(`update:${ prop }`, internal.value)
    },
  })
}
