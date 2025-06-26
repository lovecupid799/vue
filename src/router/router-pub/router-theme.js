/**
 * Name : publishing Router - THEME
 * Author : ohy
 * Date : 2025.05.30
 */

const themeRoutes = [
  {
    path: '/theme1',
    component: () => import('@/components-pub/layouts/ThemeLayout.vue'),
    children: [
      {
        path: '/theme1/sampletheme1',
        name: 'sampletheme1',
        component: () => import('@/views/_PubSample/SampleTheme.vue'),
      },
    ],
  },
  {
    path: '/theme2',
    component: () => import('@/components-pub/layouts/ThemeLayout3101.vue'),
    children: [
      {
        path: '/theme2/sampletheme2',
        name: 'sampletheme2',
        component: () => import('@/views/_PubSample/SampleTheme.vue'),
      },
    ],
  },
  {
    path: '/guide/etc',
    name: 'etc',
    component: () => import('@/views/_PubGuide/GuideEtc.vue'),
  },
];

export default themeRoutes;
