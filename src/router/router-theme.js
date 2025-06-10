/**
 * Name : publishing Router - THEME
 * Author : ohy
 * Date : 2025.05.30
 */

const themeRoutes = [
  {
    path: '/publish/theme/AD-U-0064M02',
    name: 'AD-U-0064M02',
    component: () => import('@/components-pub/common/layouts/ThemeLayout.vue'),
    children: [
      {
        path: '/publish/theme/AD-U-0064M02',
        name: 'AD-U-0064M02',
        component: () => import('@/components-pub/view/com/AD-U-0064M01.vue'),
      },
    ],
  },
  {
    path: '/publish/theme/AD-U-0064M03',
    name: 'AD-U-0064M03',
    component: () => import('@/components-pub/common/layouts/ThemeLayout3101.vue'),
    children: [
      {
        path: '/publish/theme/AD-U-0064M03',
        name: 'AD-U-0064M03',
        component: () => import('@/components-pub/view/com/AD-U-0064M01.vue'),
      },
    ],
  },
];

export default themeRoutes;
