// Utils
import { onBeforeUnmount, ref, watch } from 'vue'
import { SUPPORT_INTERSECTION_OBSERVER } from '../../utils'

export function useIntersectionObserver (callback?: IntersectionObserverCallback) {
  const intersectionRef = ref<HTMLElement>()
  const isIntersecting = ref(false)

  if (SUPPORT_INTERSECTION_OBSERVER) {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      callback?.(entries, observer)

      isIntersecting.value = !!entries.find(entry => entry.isIntersecting)
    })

    onBeforeUnmount(() => {
      observer.disconnect()
    })

    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue)
        isIntersecting.value = false
      }

      if (newValue) observer.observe(newValue)
    }, {
      flush: 'post',
    })
  } else {
    isIntersecting.value = true
  }

  return { intersectionRef, isIntersecting }
}
