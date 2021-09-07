// Utilities
import { computed } from 'vue'
import { propsFactory } from '../utils'

export interface LoadingProps
{
  loading?: boolean
}

export const makeLoadingProps = propsFactory({
  loading: Boolean,
}, 'loading')

export function useLoading (props: LoadingProps, name: string) {
  return {
    loadingClasses: computed(() => ({
      [`${ name }--loading`]: props.loading,
    })),
  }
}
