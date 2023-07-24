import PageHome from '@/components/PageHome'
import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
    alias: '/home'
  },
  {
    path: '/thread/:id',
    name: 'thread-show',
    component: () => import('@/components/PageThreadShow.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/components/PageNotFound.vue'),
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

export default router