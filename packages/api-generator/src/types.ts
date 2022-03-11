export interface Options
{
  fileGlobs: string
}

export interface Component
{
  name: string
  props: Prop[]
  slots: any[]
  events: Event[]
  functions: any[]
}

export interface Event
{
  name: string
}

export interface Prop
{
  name: string
  source: string
  type: string | string[]
  default: any
  descriptions: PropDescription[]
}

export interface PropDescription
{
  language: 'zh'
  name: string
  description: string
  source: string
}