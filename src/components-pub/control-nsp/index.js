import PrdCardList from '../control-nsp/NspPrdList/PrdCardList.vue'
import PrdCard from '../control-nsp/NspPrdList/PrdCard.vue'
import PrdListPage from '../control-nsp/NspPrdList/PrdListPage.vue'
import NspRadio from '../control-nsp/NspRadio/NspRadio.vue'

export default {
  install(Vue) {
    Vue.component('prd-list-page', PrdListPage)
    Vue.component('prd-card-list', PrdCardList)
    Vue.component('prd-card', PrdCard)
    Vue.component('nsp-radio', NspRadio)
  },
}
