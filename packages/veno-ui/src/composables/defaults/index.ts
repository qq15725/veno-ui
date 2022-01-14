import { computed, inject, provide, ref } from 'vue'
import { mergeDeep } from '../../utils'

import type { InjectionKey, Ref } from 'vue'

export interface DefaultsInstance
{
  [key: string]: undefined | Record<string, unknown>

  global?: Record<string, unknown>
}

export type DefaultsOptions = Partial<DefaultsInstance>

export const DefaultsKey: InjectionKey<Ref<DefaultsInstance>> = Symbol.for('veno-ui:defaults')

export function createDefaults (options?: DefaultsInstance): Ref<DefaultsInstance> {
  return ref(options ?? {})
}

export function useDefaults () {
  const provider = inject(DefaultsKey)
  if (!provider) throw new Error('[VenoUi] Could not find defaults instance')
  return provider
}

export function provideDefaults (props?: { defaults?: DefaultsInstance }) {
  const provider = useDefaults()
  const newProvider = computed(() => {
    return mergeDeep(provider.value, props?.defaults) as any as DefaultsInstance
  })
  provide(DefaultsKey, newProvider)
  return newProvider
}
