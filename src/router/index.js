import PageHome from '@/pages/PageHome'
import * as VueRouter from 'vue-router'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
    alias: '/home'
  },
  {
    path: '/categories/:id',
    name: 'categories',
    component: () => import('@/pages/PageCategory.vue'),
    props: true
  },
  {
    path: '/forum/:id',
    name: 'forum',
    component: () => import('@/pages/PageForum.vue'),
    props: true
  },
  {
    path: '/thread/:id',
    name: 'thread-show',
    component: () => import('@/pages/PageThreadShow.vue'),
    props: true,
    beforeEnter: (to) => {
      // checking if the thread exists else redirect to not-found page
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      if (!threadExists) {
        return {
          name: 'not-found',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        }
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/PageNotFound.vue'),
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

export default router