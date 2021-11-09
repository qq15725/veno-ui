export type ActiveStrategyFn = (data: {
  id: string
  value: boolean
  active: Set<string>
  children: Map<string, string[]>
  parents: Map<string, string>
  event?: Event
}) => Set<string>