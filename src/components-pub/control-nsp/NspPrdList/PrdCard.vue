<template>
  <div
    class="outlet-card"
    :class="[{ 'type-bundle': cardTheme === 3 }, { 'outlet-card-view': cardType === 'card' }, { 'outlet-card-img': cardType === 'img' }, { 'outlet-card-list': cardType === 'list' }]">
    <div class="card-in">
      <div class="card-im">
        <img
          :src="cardImg"
          alt="" />
        <div
          class="im-bundle"
          v-if="cardTheme === 3 && cardBundle.length > 0">
          <span class="mark-plus"></span>
          <ul>
            <li
              v-for="(bundle, index) in cardBundle"
              :key="index">
              <img
                :src="bundle.imgSrc"
                alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <div class="card-info">
          <p class="desc">{{ cardDesc }}</p>
          <p class="model">
            {{ cardCode }}
          </p>
        </div>
        <div class="card-price">
          <template v-if="cardTheme === 3">
            <div class="prd-price-area">
              <div class="price-info">
                <sdl-badge
                  primary
                  class="type-rect color2"
                  >40% Off</sdl-badge
                >
                <span class="price1"
                  ><em>{{ cardUnit }}</em> 3,200.00</span
                >
                <span class="price2"
                  ><em>{{ cardUnit }}</em> 1,920.00</span
                >
              </div>
            </div>

            <div class="bundle-price-area">
              <span class="mark-plus"></span>
              <nsp-btn
                class="btn-ico"
                v-if="cardTheme === 3 && cardBundle.length > 1"
                @click="bundleToggle">
                <span
                  class="i-16"
                  :class="bundleToggleValue ? 'ico-chevron-up' : 'ico-chevron-down'"></span>
              </nsp-btn>
              <ul
                class="bundle-price-ul"
                :class="{ show: bundleToggleValue }">
                <li
                  class="bundle-price-item"
                  v-for="(bundle, index) in cardBundle"
                  :key="index">
                  <div class="price-info">
                    <p class="model">{{ bundle.code }}</p>
                    <sdl-badge
                      primary
                      class="type-rect color2"
                      >{{ bundle.dc }}% Off</sdl-badge
                    >
                    <span class="price1"
                      ><em>{{ cardUnit }}</em> {{ bundle.price1 }}</span
                    >
                    <span class="price2"
                      ><em>{{ cardUnit }}</em> {{ bundle.price2 }}</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </template>
          <div class="price-total">
            <p class="price-badge">
              <span
                class="text-badge color2"
                v-if="cardTheme === 2"
                >Buy10+</span
              >
              <sdl-badge
                v-if="cardTheme === 1 || cardTheme === 2"
                primary
                class="type-rect color2"
                >30% Off</sdl-badge
              >
            </p>
            <p class="price1">
              <em>{{ cardUnit }}</em> 3,200.00
            </p>
            <p class="price2">
              <em>{{ cardUnit }}</em> 1,920.00
            </p>
            <p class="limited">Limited Stock: {{ cardSales }}/{{ cardQty }}</p>
          </div>
        </div>
        <div class="card-btn">
          <nsp-counter />
          <nsp-btn class="btn-outline sm">Outlet Cart</nsp-btn>
          <nsp-btn class="btn-fill sm">Place Order</nsp-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,  } from 'vue';
// import BundleItem from './OutletBundleItem.vue';

const props = defineProps({
  cardTheme: {
    type: Number,
    default: null,
  },
  cardType: {
    type: String,
    default: 'card',
  },
  cardImg: { type: String, default: '' },
  cardCode: {
    type: String,
    default: '',
  },
  cardDesc: {
    type: String,
    default: null,
  },
  cardSales: {
    type: Number,
    default: null,
  },
  cardQty: {
    type: Number,
    default: null,
  },
  cardUnit: {
    type: String,
    default: null,
  },
  cardPrice1: { type: [String, Number], default: '' },
  cardPrice2: { type: [String, Number], default: '' },
  cardBundle: {
    type: Object,
    default: () => {},
  },
});

//bundle toggle
const bundleToggleValue = ref(false);
const bundleToggle = () => {
  bundleToggleValue.value = !bundleToggleValue.value;
};
</script>
