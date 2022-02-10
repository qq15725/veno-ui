// Utils
import { IN_BROWSER, propsFactory } from '../../utils'

// Types
import type { ExtractPropTypes } from 'vue'

// Composables
export const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String],
}, 'delay')

export function useDelay (
  props: ExtractPropTypes<ReturnType<typeof makeDelayProps>>,
  cb?: (value: boolean) => void
) {
  const delays: Partial<Record<keyof typeof props, number>> = {}

  const runDelayFactory = (prop: keyof typeof props) => (): Promise<boolean> => {
    // istanbul ignore next
    if (!IN_BROWSER) return Promise.resolve(true)

    const active = prop === 'openDelay'

    delays.closeDelay && window.clearTimeout(delays.closeDelay)
    delete delays.closeDelay

    delays.openDelay && window.clearTimeout(delays.openDelay)
    delete delays.openDelay

    return new Promise(resolve => {
      delays[prop] = window.setTimeout(() => {
        cb?.(active)
        resolve(active)
      }, Number(props[prop] ?? 0))
    })
  }

  return {
    runCloseDelay: runDelayFactory('closeDelay'),
    runOpenDelay: runDelayFactory('openDelay'),
  }
}
