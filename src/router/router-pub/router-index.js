/**
 * Program: Publish Router
 * Author: NSP Publish
 * Description: publish router setting file
 */

//publish
import guideRoutes from '@/router/router-pub/router-guide';
import blankRoutes from '@/router/router-pub/router-blank';
import productRoutes from '@/router/router-pub/router-product';
import orderRoutes from '@/router/router-pub/router-order';
import financeRoutes from '@/router/router-pub/router-finance';
import operationRoutes from '@/router/router-pub/router-operation';
import helpRoutes from '@/router/router-pub/router-help';
import adminRoutes from '@/router/router-pub/router-admin';
import callRoutes from '@/router/router-pub/router-call';
import omsRoutes from '@/router/router-pub/router-oms';
import businessRoutes from '@/router/router-pub/router-business';
import comRoutes from '@/router/router-pub/router-com';
import themeRoutes from '@/router/router-pub/router-theme';

export default {
  name: 'publish',
  path: `/publish`,
  children: [
    // publish root
    {
      path: '',
      name: 'pubRoot',
      redirect: '/publish/dev',
    },
    //publish views - guide layout
    {
      path: `worksheet`,
      name: 'worksheet',
      component: () => import('@/components-pub/view/_PubGuide/WorkSheet.vue'),
    },
    {
      path: `responsive`,
      name: 'responsive',
      component: () => import('@/components-pub/view/_PubGuide/ResponsiveWebTest.vue'),
    },
    {
      path: `responsive2`,
      name: 'responsive2',
      component: () => import('@/components-pub/view/_PubGuide/ResponsiveWebTest2.vue'),
    },
    {
      path: `responsive3/:ifId/:description`,
      name: 'responsive3',
      component: () => import('@/components-pub/view/_PubGuide/ResponsiveWebTest3.vue'),
    },
    {
      path: `responsive4/:ifId/:description`,
      name: 'responsive4',
      component: () => import('@/components-pub/view/_PubGuide/ResponsiveWebTest4.vue'),
    },
    {
      path: 'guide',
      name: 'publish/guide',
      component: () => import('@/components-pub/common/layouts/guide/GuideLayout.vue'),
      children: guideRoutes,
    },

    //publish views - blank layout
    {
      path: 'blank',
      name: 'blank',
      component: () => import('@/components-pub/common/layouts/BlankLayout.vue'),
      children: blankRoutes,
    },

    //publish views - main
    // {
    //   path: 'main',
    //   name: 'SampleMain',
    //   component: () => import('@/components-pub/common/layouts/MainLayout.vue'),
    //   children: [
    //     {
    //       path: 'sample/main',
    //       name: 'SampleMain',
    //       component: () => import('@/components-pub/view/_PubSample/SampleMain.vue'),
    //       meta: {
    //         layout: 'main',
    //       },
    //     },
    //     {
    //       path: 'sample/popup',
    //       name: 'SamplePopup',
    //       component: () => import('@/components-pub/view/_PubSample/SamplePopup.vue'),
    //       meta: {
    //         layout: 'main',
    //       },
    //     },
    //   ],
    // },

    //publish views - menu : product
    {
      path: 'product',
      name: 'product',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: productRoutes,
    },

    //publish views - menu : order
    {
      path: 'order',
      name: 'order',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: orderRoutes,
    },

    //publish views - menu : finance
    {
      path: 'finance',
      name: 'finance',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: financeRoutes,
    },

    //publish views - menu : operation
    {
      path: 'operation',
      name: 'operation',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: operationRoutes,
    },

    //publish views - menu : help
    {
      path: 'help',
      name: 'help',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: helpRoutes,
    },

    //publish views - menu : admin
    {
      path: 'admin',
      name: 'admin',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: adminRoutes,
    },
    //publish views - menu : call
    {
      path: 'call',
      name: 'call',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: callRoutes,
    },
    {
      path: 'oms',
      name: 'oms',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: omsRoutes,
    },
    //publish views - menu : ey-business
    {
      path: 'ey-business',
      name: 'ey-business',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: businessRoutes,
    },
    {
      path: 'com',
      name: 'comm',
      component: () => import('@/components-pub/common/layouts/DefaultLayout.vue'),
      children: comRoutes,
    },
    {
      path: 'theme',
      name: 'theme',
      children: themeRoutes,
    },
  ],
};
