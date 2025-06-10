import { createRouter, createWebHistory } from 'vue-router'
//publish router
import pubRoutes from '@/router/router-pub/router-index';

import guideRoutes from '@/router/router-guide'
import themeRoutes from '@/router/router-pub/router-theme';

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
     {
      path: 'theme',
      name: 'theme',
      children: themeRoutes,
    },
    //publish routes
    pubRoutes,
  ],
})

export default router
