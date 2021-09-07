import LayoutsDocs from '../../layouts/Docs.vue'
import viewRoutes from './view-routes'
import Decorate from '../../Decorate.vue'

export default [
  {
    path: '',
    component: LayoutsDocs,
    children: viewRoutes,
  },
  { name: 'Decorate', path: '/decorate', component: Decorate },
  { path: '/', redirect: '/guide' }
]