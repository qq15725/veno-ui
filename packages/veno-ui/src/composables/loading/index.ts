// Utils
import { computed } from 'vue'
import { getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

export interface LoadingProps {
  loading?: boolean
}

export const makeLoadingProps = propsFactory({
  loading: Boolean,
}, 'loading')

export function useLoading(
  props: LoadingProps,
  name = getCurrentInstanceName(),
) {
  return {
    loadingClasses: computed(() => ({
      [`${ name }--loading`]: props.loading,
    })),
  }
}
