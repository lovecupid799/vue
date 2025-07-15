<template>
  <div
    class="outlet-promo-item"
    ref="promoRef">
    <div class="im">
      <img
        :src="promoImg"
        alt="" />
    </div>
    <div
      class="in"
      :class="[{ 'is-expand': isToggle }, { close: !isOpen }]">
      <div class="title">
        <p class="tit">{{ promoTit }}</p>
        <p class="date">{{ promoDate }}</p>
      </div>
      <div class="promo-info-area">
        <ul class="promo-info-ul">
          <li>
            <div class="tit">Description</div>
            <div class="txt">{{ promoDesc }}</div>
          </li>
          <li>
            <div class="tit">Target Products</div>
            <div class="txt">{{ promoTarget }}</div>
          </li>
        </ul>
        <div
          class="btn-area"
          v-if="isToggle">
          <nsp-btn
            class="btn-txt primary"
            @click="toggle">
            <template v-if="isOpen">View Less<span class="ico-chevron-up_skyblue_b i-16"></span></template>
            <template v-else>View More<span class="ico-chevron-down_skyblue_b i-16"></span></template>
          </nsp-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  promoTit: {
    type: String,
    default: '',
  },
  promoDate: {
    type: String,
    default: '',
  },
  promoDesc: {
    type: String,
    default: '',
  },
  promoImg: {
    type: String,
    default: '',
  },
  promoTarget: {
    type: String,
    default: '',
  },
});

//toggle
const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};

const isToggle = ref(false);
const promoRef = ref(null);
onMounted(() => {
  if (promoRef.value) {
    const height = promoRef.value.clientHeight;
    height > 464 ? (isToggle.value = true) : (isToggle.value = false);
  }
});
</script>
