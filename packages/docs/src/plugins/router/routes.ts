import viewRoutes from './view-routes'
import Docs from '../../Docs.vue'
import Playground from '../../Playground.vue'

export default [
  {
    path: '',
    component: Docs,
    children: viewRoutes,
  },
  { name: 'Playground', path: '/playground', component: Playground },
  { path: '/', redirect: '/guide' }
]