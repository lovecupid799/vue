import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'worksheet',
      component: () => import('@/views/guide/WorkSheet.vue'),
    },
  ],
})

export default router
