// Utils
import { shallowRef, inject } from 'vue'

// Types
import type { ShallowRef, InjectionKey, Component } from 'vue'

export interface ProvidersInstance
{
  providers: ShallowRef<Record<string, Component>>
  get: (key: string) => Component
  set: (key: string, value: Component) => void
  createRootProvider: () => Component
}

export const ProvidersKey: InjectionKey<ProvidersInstance> = Symbol.for('veno-ui:providers')

export function createProviders (options?: Record<string, Component>): ProvidersInstance {
  const providers = shallowRef({ ...options })

  function createRootProvider () {
    const components = Object.values(providers.value)
    return components.reduce<Component>((Prev: any, Cur: any) => {
      return (props, { slots }) => <Prev><Cur>{ slots.default?.() }</Cur></Prev>
    }, (props, { slots }) => slots.default?.())
  }

  function get (key: string) {
    return providers.value[key]
  }

  function set (key: string, value: Component) {
    providers.value[key] = value
  }

  return {
    providers,
    get,
    set,
    createRootProvider,
  }
}

export function useProviders () {
  const providers = inject(ProvidersKey)
  if (!providers) throw new Error('Could not find Veno UI providers injection')
  return providers
}
