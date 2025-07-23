import { createRouter, createWebHistory } from 'vue-router'
//publish router
import pubRoutes from '@/router/router-pub/router-index';
import pubMobRoutes from '@/router/router-mob/router-mob-index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    //publish routes
    pubRoutes,
    pubMobRoutes,
  ],
})

export default router
