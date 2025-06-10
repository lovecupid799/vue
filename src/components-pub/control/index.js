import PubHeader from '../common/PubHeader.vue';
import PubFooter from '../common/PubFooter.vue';
import PubTitle from '../control/title/pubTitle.vue';
import PubList from '../control/list/pubList.vue';
import PubListItem from '../control/list/pubListItem.vue';
import PubTabs from '../control/tabs/pubTabs.vue';
import PubChips from '../control/chips/pubChips.vue';
import PubChipsList from '../control/chips/pubChipsList.vue';
import PubToggle from '../control/toggle/pubToggle.vue';
import PubButton from '../control/button/pubButton.vue';
import CntButton from '../control/button/pubButtonWrap.vue';

export default {
  install(Vue) {
    Vue.component('pub-header', PubHeader);
    Vue.component('pub-footer', PubFooter);
    Vue.component('pub-title', PubTitle);
    Vue.component('pub-list', PubList);
    Vue.component('pub-list-item', PubListItem);
    Vue.component('pub-tabs', PubTabs);
    Vue.component('pub-chips', PubChips);
    Vue.component('pub-chips-list', PubChipsList);
    Vue.component('pub-toggle', PubToggle);
    Vue.component('pub-button', PubButton);
    Vue.component('pub-button-wrap', CntButton);
  },
};
