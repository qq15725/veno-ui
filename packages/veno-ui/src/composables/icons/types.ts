// Types
import type { JSXComponent } from 'vue'

export type IconValue = string | JSXComponent

export interface IconsAliases {
  checkboxIndeterminate: IconValue
  checkboxOn: IconValue
  checkboxOff: IconValue
  close: IconValue
  clear: IconValue
  collapse: IconValue
  calendar: IconValue
  dropdown: IconValue
  error: IconValue
  expand: IconValue
  filter: IconValue
  first: IconValue
  info: IconValue
  last: IconValue
  link: IconValue
  menu: IconValue
  next: IconValue
  nextDouble: IconValue
  nodata: IconValue
  prev: IconValue
  prevDouble: IconValue
  radioOn: IconValue
  radioOff: IconValue
  separator: IconValue
  sort: IconValue
  success: IconValue
  toggler: IconValue
  warning: IconValue

  [name: string]: IconValue
}

export type IconSetComponent = JSXComponent<{
  icon: IconValue
  tag: string
}>

export interface IconsOptions {
  /**
   * @zh 所有图标的别名
   */
  aliases?: Partial<IconsAliases>

  /**
   * @zh 默认图标集合名
   */
  defaultSet?: string

  /**
   * @zh 所有图标集合
   */
  sets?: Record<string, IconSetComponent>
}
