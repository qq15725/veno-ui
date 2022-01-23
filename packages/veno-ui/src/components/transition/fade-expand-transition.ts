// Styles
import './styles/fade-expand-transition.scss'

// Utils
import { createJavascriptTransition } from './utils/create-transition'
import ExpandTransitionGenerator from './utils/expand-transition-generator'

export const FadeExpandTransition = createJavascriptTransition(
  've-fade-expand-transition',
  ExpandTransitionGenerator()
)