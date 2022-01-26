// Utils
import { computed, ref } from 'vue'
import { getCurrentInstance, propIsDefined as _propIsDefined } from '../../utils'

// Types
import type { Ref } from 'vue'

// Composables
export function useProxiedModel<
  Props extends object & { [key in Prop as `onUpdate:${Prop}`]: ((val: any) => void) | undefined },
  Prop extends Extract<keyof Props, string>,
  Inner = Props[Prop]
> (
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

  const internal = ref(transformIn(
    typeof props[prop] === 'undefined'
      ? defaultValue
      : props[prop]
  )) as Ref<Inner>

  return computed<Inner>({
    get () {
      if (propIsDefined.value) {
        return transformIn(props[prop])
      } else {
        return internal.value
      }
    },
    set (newValue) {
      internal.value = newValue
      vm.emit(`update:${ prop }`, transformOut(newValue))
    }
  })
}
