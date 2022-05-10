// Utils
import { computed } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

export interface LoadingProps
{
  loading?: boolean
}

export const makeLoadingProps = propsFactory({
  loading: Boolean,
}, 'loading')

export function useLoading (
  props: LoadingProps,
  name = getCurrentInstanceName()
) {
  return {
    loadingClasses: computed(() => ({
      [`${ name }--loading`]: props.loading,
    })),
  }
}
