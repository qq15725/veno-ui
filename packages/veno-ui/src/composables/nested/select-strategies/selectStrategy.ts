export type SelectStrategyFn = (data: {
  id: string
  value: boolean
  selected: Map<string, 'on' | 'off' | 'indeterminate'>
  children: Map<string, string[]>
  parents: Map<string, string>
  event?: Event
}) => Map<string, 'on' | 'off' | 'indeterminate'>

export type SelectStrategyTransformInFn = (
  v: string[] | undefined,
  children: Map<string, string[]>,
  parents: Map<string, string>
) => Map<string, 'on' | 'off' | 'indeterminate'>

export type SelectStrategyTransformOutFn = (
  v: Map<string, 'on' | 'off' | 'indeterminate'>,
  children: Map<string, string[]>,
  parents: Map<string, string>
) => any[]

export type SelectStrategy = {
  select: SelectStrategyFn
  in: SelectStrategyTransformInFn
  out: SelectStrategyTransformOutFn
}
