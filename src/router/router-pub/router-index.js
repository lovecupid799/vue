/**
 * Program: Publish Router
 * Author: Publish
 * Description: publish router setting file
 */

//publish
import guideRoutes from '@/router/router-pub/router-guide';
import themeRoutes from '@/router/router-pub/router-theme';

export default {
  path: '/',
  name: 'publish',
  children: [
    {
      path: 'guide',
      name: 'guide',
      component: () => import('@/components-pub/layouts/guide/GuideLayout.vue'),
      children: guideRoutes,
    },
    {
      path: 'theme',
      name: 'theme',
      children: themeRoutes,
    },
    {
      path: '/theme1',
      component: () => import('@/components-pub/layouts/ThemeLayout.vue'),
      children: [
        {
          path: '/theme1',
          name: 'theme1',
          component: () => import('@/views/_PubGuide/SampleTheme.vue'),
        },
      ],
    },
  ],
};
