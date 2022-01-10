export interface Prop
{
  name: string
  source: string
  type: string | string[]
  default: any
}

export interface Event
{
  name: string
}

export interface Component
{
  name: string
  props: Prop[]
  slots: any[]
  events: Event[]
  functions: any[]
}