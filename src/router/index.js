import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharacterView.vue')
    },
    {
      path: '/episodes',
      name: 'episodes',
      component:() => import('../views/EpisodesView.vue')
    },
    {
      path:'/locations',
      name:'locations',
      component:() => import('../views/LocationsView.vue')
    }
  ]
})

export default router
