import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cafes',
      name: 'cafes',
      component: () => import('../views/CafesView.vue'),
    },
    {
      path: '/avaliar',
      name: 'avaliar',
      component: () => import('../views/AvaliarView.vue'),
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('../views/RankingView.vue'),
    },
  ],
})

export default router
