import { createVenoUi } from 'veno-ui/src/entry'
import { docsSvg } from '../../iconsets/docs-svg'

export default createVenoUi({
  icons: {
    defaultSet: 'docs-svg',
    sets: {
      'docs-svg': docsSvg,
    }
  },
})