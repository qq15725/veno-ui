// Styles
import './styles/expand-transition.scss'

// Utils
import { createJavascriptTransition } from './utils/create-transition'
import { expandTransitionGenerator } from './utils/expand-transition-generator'

export const ExpandTransition = createJavascriptTransition(
  've-expand-transition',
  expandTransitionGenerator(),
)

export const ExpandXTransition = createJavascriptTransition(
  've-expand-x-transition',
  expandTransitionGenerator('', true),
)
