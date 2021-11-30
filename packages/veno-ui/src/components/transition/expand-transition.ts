// Styles
import './styles/expand-transition.scss'

// Utils
import { createJavascriptTransition } from './utils/create-transition'
import ExpandTransitionGenerator from './utils/expand-transition-generator'

export const ExpandTransition = createJavascriptTransition(
  've-expand-transition',
  ExpandTransitionGenerator()
)