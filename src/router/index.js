import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarView from "@/views/CarView.vue";
import HistoryView from "@/views/HistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/car',
      name: 'Car',
      component: CarView
    },
    {
      path: '/history',
      name: 'History',
      component: HistoryView
    },
  ]
})

export default router
