import { createRouter, createWebHashHistory } from 'vue-router'
import PasteleroView from '../views/PasteleroView.vue'
import ClienteView from '../views/ClienteView.vue'

const routes = [
 
 {
   path:'/pastelero',
   name: 'pastelero',
   component: PasteleroView
 },
 {
  path:'/cliente',
  name:'cliente',
  component: ClienteView
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
