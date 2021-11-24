export type OpenStrategyFn = (data: {
  id: string
  value: boolean
  opened: Set<string>
  children: Map<string, string[]>
  parents: Map<string, string>
  event?: Event
}) => Set<string>