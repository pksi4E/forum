import PageHome from '@/components/PageHome'
import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
  },
  {
    path: '/thread/:id',
    name: 'thread-show',
    component: () => import('@/components/PageThreadShow.vue'),
    props: true,
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

export default router