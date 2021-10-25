// Styles
import './styles/ve-expand-transition.scss'

// Utils
import { createJavascriptTransition } from './utils/create-transition'
import ExpandTransitionGenerator from './utils/expand-transition-generator'

export const VeExpandTransition = createJavascriptTransition(
  've-expand-transition',
  ExpandTransitionGenerator()
)