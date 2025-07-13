import { createRouter, createWebHistory } from 'vue-router'
//publish router
import pubRoutes from '@/router/router-pub/router-index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    //publish routes
    pubRoutes,
  ],
})

export default router
