// Styles
import './styles/slide-right-fade-in-expand-transition.scss'

// Utils
import { createJavascriptTransition } from './utils/create-transition'
import { fadeInExpandTransitionGenerator } from './utils/expand-transition-generator'

export const SlideRightFadeInExpandTransition = createJavascriptTransition(
  've-slide-right-fade-in-expand-transition',
  fadeInExpandTransitionGenerator()
)