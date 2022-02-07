// Utils
import { h } from 'vue'

// Components
import { ClassIcon } from '../composables/icon'

// Types
import type { IconAliases, IconSet } from '../composables/icon'

const aliases: IconAliases = {
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-alert-circle',
  error: 'mdi-close-circle',
  close: 'mdi-close',
  clear: 'mdi-close',
  collapse: 'mdi-chevron-up',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  dropdown: 'mdi-menu-down',
  separator: 'mdi-slash-forward',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  sort: 'mdi-arrow-up',
  filter: 'mdi-filter-variant',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  nodata: 'mdi-database-off-outline',
  link: 'mdi-link',
}

const mdi: IconSet = {
  component: (props: any) => h(ClassIcon, { ...props, class: 'mdi' }),
}

export { aliases, mdi }
