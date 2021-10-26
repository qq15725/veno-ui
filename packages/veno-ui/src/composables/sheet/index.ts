// Utils
import { computed } from 'vue'
import { propsFactory } from '../../utils'

// Composables
import { makeTagProps } from '../tag'
import { makeThemeProps, useTheme } from '../theme'
import { makeVariantProps, useVariant } from '../variant'
import { makePositionProps, usePosition } from '../position'
import { makeDimensionProps, useDimension } from '../dimension'
import { makeSizeProps, useSize } from '../size'
import { makeBorderProps, useBorder } from '../border'
import { makeRoundedProps, useRounded } from '../rounded'
import { makeElevationProps, useElevation } from '../elevation'

// Types
import type { TagProps } from '../tag'
import type { ThemeProps } from '../theme'
import type { VariantProps } from '../variant'
import type { PositionProps } from '../position'
import type { DimensionProps } from '../dimension'
import type { SizeProps } from '../size'
import type { BorderProps } from '../border'
import type { RoundedProps } from '../rounded'
import type { ElevationProps } from '../elevation'
import type { MaybeRef } from '../../utils'

export interface SheetProps
  extends TagProps,
    ThemeProps,
    VariantProps,
    PositionProps,
    DimensionProps,
    SizeProps,
    BorderProps,
    RoundedProps,
    ElevationProps
{
  //
}

export const makeSheetProps = propsFactory({
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps(),
  ...makePositionProps(),
  ...makeDimensionProps(),
  ...makeSizeProps(),
  ...makeBorderProps(),
  ...makeRoundedProps(),
  ...makeElevationProps(),
}, 'sheet')

export function useSheet (props: MaybeRef<SheetProps>, name: string) {
  const { themeClasses } = useTheme(props)
  const { colorClasses, variantClasses, colorStyles } = useVariant(props, name)
  const { positionClasses, positionStyles } = usePosition(props, name)
  const { dimensionStyles } = useDimension(props)
  const { sizeClasses, sizeStyles } = useSize(props, name)
  const { borderClasses } = useBorder(props, name)
  const { roundedClasses } = useRounded(props, name)
  const { elevationClasses } = useElevation(props)

  const sheetClasses = computed(() => ([
    themeClasses.value,
    colorClasses.value,
    variantClasses.value,
    positionClasses.value,
    sizeClasses.value,
    borderClasses.value,
    roundedClasses.value,
    elevationClasses.value,
  ]))

  const sheetStyles = computed(() => ([
    colorStyles.value,
    positionStyles.value,
    dimensionStyles.value,
    sizeStyles.value,
  ]))

  return {
    sheetClasses,
    sheetStyles,
  }
}
