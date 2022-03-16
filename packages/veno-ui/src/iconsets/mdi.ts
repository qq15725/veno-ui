// Utils
import { h } from 'vue'

// Components
import { IconClass } from '../components/icon/icon-class'

// Types
import type { IconsAliases, IconSetComponent } from '../composables/icons'

export const mdi: IconSetComponent = (props: any) => h(IconClass, { ...props, class: 'mdi' })

export const aliases: IconsAliases = {
  checkboxIndeterminate: 'mdi-minus-box',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  close: 'mdi-close',
  clear: 'mdi-close',
  collapse: 'mdi-chevron-up',
  calendar: 'mdi-calendar-blank-outline',
  dropdown: 'mdi-chevron-down',
  error: 'mdi-close-circle',
  expand: 'mdi-chevron-down',
  filter: 'mdi-filter-variant',
  first: 'mdi-page-first',
  info: 'mdi-information',
  last: 'mdi-page-last',
  link: 'mdi-link',
  menu: 'mdi-menu',
  next: 'mdi-chevron-right',
  nextDouble: 'mdi-chevron-double-right',
  nodata: 'mdi-database-off-outline',
  prev: 'mdi-chevron-left',
  prevDouble: 'mdi-chevron-double-left',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  separator: 'mdi-slash-forward',
  sort: 'mdi-arrow-up',
  success: 'mdi-check-circle',
  toggler: 'mdi-chevron-right',
  warning: 'mdi-alert-circle',
}