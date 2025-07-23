import MobLayoutDefault from '@/components-mob/layouts/MobLayoutDefault.vue'
import MobPubHeader from '@/components-mob/common/PubMobHeader.vue';

import MobBottomNavi from '@/components-mob/control/bottomNavi/bottomNavi.vue'

export default {
  install(Vue) {
    Vue.component('mob-layout-default', MobLayoutDefault)
    Vue.component('mob-pub-header', MobPubHeader)
    Vue.component('mob-bottom-navi', MobBottomNavi)
  },
}
