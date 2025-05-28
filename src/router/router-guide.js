/**
 * Name : publishing Router - Guide
 * Author : ohy 
 * Date : 2025.05.28
 */

const guideRoutes = [
  {
    path: '/',
    name: 'rule',
    component: () => import('@/views/guide/GuideRule.vue'),
  },
]

export default guideRoutes
