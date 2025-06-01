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
  {
    path: '/guide/text',
    name: 'text',
    component: () => import('@/views/guide/GuideText.vue'),
  },
  {
    path: '/guide/form',
    name: 'form',
    component: () => import('@/views/guide/GuideForm.vue'),
  },
  {
    path: '/guide/list',
    name: 'list',
    component: () => import('@/views/guide/GuideList.vue'),
  },
  {
    path: '/guide/button',
    name: 'button',
    component: () => import('@/views/guide/GuideButton.vue'),
  },
  {
    path: '/guide/toggle',
    name: 'toggle',
    component: () => import('@/views/guide/GuideToggle.vue'),
  },
  {
    path: '/guide/tabs',
    name: 'tabs',
    component: () => import('@/views/guide/GuideTabs.vue'),
  },
  {
    path: '/guide/etc',
    name: 'etc',
    component: () => import('@/views/guide/GuideEtc.vue'),
  },
]

export default guideRoutes
