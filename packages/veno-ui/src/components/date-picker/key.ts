import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { DateInstance } from '../../composables'

export interface DateRangeInstance {
  selected: ComputedRef<DateInstance[]>
  select: (value: string) => void
  inRange: (value: number) => boolean
  preview: (value: boolean) => void
  isPreview: Ref<boolean>
}

export const DateRangeKey: InjectionKey<DateRangeInstance> = Symbol.for('veno-ui:date-range')
