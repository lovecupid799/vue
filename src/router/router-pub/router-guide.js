/**
 * Name : publishing Router - Guide
 * Author : ohy
 * Date : 2025.05.28
 */

const guideRoutes = [
  {
    path: '/guide/rule',
    name: 'rule',
    component: () => import('@/views/_PubGuide/GuideRule.vue'),
  },
  {
    path: '/guide/text',
    name: 'text',
    component: () => import('@/views/_PubGuide/GuideText.vue'),
  },
  {
    path: '/guide/form',
    name: 'form',
    component: () => import('@/views/_PubGuide/GuideForm.vue'),
  },
  {
    path: '/guide/list',
    name: 'list',
    component: () => import('@/views/_PubGuide/GuideList.vue'),
  },
  {
    path: '/guide/button',
    name: 'button',
    component: () => import('@/views/_PubGuide/GuideButton.vue'),
  },
  {
    path: '/guide/toggle',
    name: 'toggle',
    component: () => import('@/views/_PubGuide/GuideToggle.vue'),
  },
  {
    path: '/guide/tabs',
    name: 'tabs',
    component: () => import('@/views/_PubGuide/GuideTabs.vue'),
  },
  // {
  //   path: '/guide/etc',
  //   name: 'etc',
  //   component: () => import('@/views/_PubGuide/GuideEtc.vue'),
  // },
]

export default guideRoutes
