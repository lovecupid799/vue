import { createRouter, createWebHistory } from 'vue-router'
import guideRoutes from '@/router/router-guide'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guide',
      component: () => import('@/components/layout/guide/GuideLayout.vue'),
      children: guideRoutes,
    },
    {
    path: '/guide/worksheet',
    name: 'worksheet',
    component: () => import('@/views/guide/WorkSheet.vue'),
  },
  ],
})

export default router
