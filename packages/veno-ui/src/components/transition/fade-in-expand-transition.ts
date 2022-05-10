// Styles
import './styles/fade-in-expand-transition.scss'

// Utils
import { createJavascriptTransition } from './utils/create-transition'
import { fadeInExpandTransitionGenerator } from './utils/expand-transition-generator'

export const FadeInExpandTransition = createJavascriptTransition(
  've-fade-in-expand-transition',
  fadeInExpandTransitionGenerator()
)