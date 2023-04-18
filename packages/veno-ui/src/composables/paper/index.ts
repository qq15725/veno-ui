// Utils
import { computed } from 'vue'
import { getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

// Composables
import { makeTagProps } from '../tag'
import { makeThemeProps, provideTheme } from '../theme'
import { makeVariantProps, useVariant } from '../variant'
import { makePositionProps, usePosition } from '../position'
import { makeDimensionProps, useDimension } from '../dimension'
import { makeSizeProps, useSize } from '../size'
import { makeDensityProps, useDensity } from '../density'
import { makeBorderProps, useBorder } from '../border'
import { makeShapeProps, useShape } from '../shape'
import { makeElevationProps, useElevation } from '../elevation'

// Types
import type { TagProps } from '../tag'
import type { ThemeProps } from '../theme'
import type { VariantProps } from '../variant'
import type { PositionProps } from '../position'
import type { DimensionProps } from '../dimension'
import type { SizeProps } from '../size'
import type { DensityProps } from '../density'
import type { BorderProps } from '../border'
import type { ShapeProps } from '../shape'
import type { ElevationProps } from '../elevation'
import type { MaybeRef } from '@veno-ui/utils'

export interface PaperProps
  extends TagProps,
  ThemeProps,
  VariantProps,
  PositionProps,
  DimensionProps,
  SizeProps,
  DensityProps,
  BorderProps,
  ShapeProps,
  ElevationProps {
  //
}

export { genOverlays } from '../variant'

export const makePaperProps = propsFactory({
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps(),
  ...makePositionProps(),
  ...makeDimensionProps(),
  ...makeSizeProps(),
  ...makeDensityProps(),
  ...makeBorderProps(),
  ...makeShapeProps(),
  ...makeElevationProps(),
}, 'paper')

export function usePaper(
  props: MaybeRef<PaperProps>,
  name = getCurrentInstanceName(),
) {
  const { themeClasses } = provideTheme(props)
  const { colorClasses, variantClasses, colorStyles } = useVariant(props, name)
  const { positionClasses, positionStyles } = usePosition(props, name)
  const { dimensionStyles } = useDimension(props)
  const { sizeClasses, sizeStyles } = useSize(props, name)
  const { densityClasses } = useDensity(props, name)
  const { borderClasses } = useBorder(props, name)
  const { shapeClasses } = useShape(props, name)
  const { elevationClasses } = useElevation(props)

  const paperClasses = computed(() => [
    themeClasses.value,
    colorClasses.value,
    variantClasses.value,
    positionClasses.value,
    sizeClasses.value,
    densityClasses.value,
    borderClasses.value,
    shapeClasses.value,
    elevationClasses.value,
  ])

  const paperStyles = computed(() => [
    colorStyles.value,
    positionStyles.value,
    dimensionStyles.value,
    sizeStyles.value,
  ])

  return {
    paperClasses,
    paperStyles,
  }
}
