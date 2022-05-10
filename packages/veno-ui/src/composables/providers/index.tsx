// Utils
import { inject, shallowRef } from 'vue'

// Types
import type { App, Component, InjectionKey, ShallowRef } from 'vue'

export interface ProvidersInstance {
  providers: ShallowRef<Record<string, Component>>
  get: (key: string) => Component
  set: (key: string, value: Component) => void
  createRootProvider: () => Component
}

export const ProvidersKey: InjectionKey<ProvidersInstance> = Symbol.for('veno-ui:providers')

export function createProviders(app: App, options?: Record<string, Component>): ProvidersInstance {
  const providers = shallowRef({ ...options })

  Object.values(providers.value).forEach((provider: any) => {
    provider.register?.(app)
  })

  function createRootProvider() {
    return Object.values(providers.value).reduce<Component>((Prev: any, Cur: any) => {
      return (props, { slots }) => <Prev registered><Cur registered>{ slots.default?.() }</Cur></Prev>
    }, (props, { slots }) => slots.default?.())
  }

  function get(key: string) {
    return providers.value[key]
  }

  function set(key: string, value: Component) {
    providers.value[key] = value
  }

  return {
    providers,
    get,
    set,
    createRootProvider,
  }
}

export function useProviders() {
  const providers = inject(ProvidersKey)
  if (!providers) throw new Error('Could not find Veno UI providers injection')
  return providers
}
