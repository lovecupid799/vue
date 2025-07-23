/**
 * Program: Publish Router
 * Author: Publish
 * Description: publish router setting file
 */

//publish
export default {
  path: '/mob',
  name: 'mob',
  children: [
    {
      path: '/mob/worksheet',
      name: '/mob/worksheet',
      component: () => import('@/views-mob/_PubGuide/WorkSheet.vue'),
    },
    // {
    //   path: '/mob/page',
    //   component: () => import('@/components-mob/layouts/MobLayoutDefault.vue'),
    //   children: [
    //     {
    //       path: 'page1',
    //       name: '/mob/page1',
    //       component: () => import('@/views-mob/_PubSample/GuideLayout1.vue'),
    //     },
    //   ],
    // },
    {
      path: '/mob/page1',
      name: '/mob/page1',
      component: () => import('@/views-mob/_PubSample/GuideLayout1.vue'),
    },
  ],
};
