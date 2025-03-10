import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GameView from '@/views/GameView.vue'
import CategoryView from '@/views/CategoryView.vue'
import HelpView from '@/views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView,
    },
  ],
})

export default router
