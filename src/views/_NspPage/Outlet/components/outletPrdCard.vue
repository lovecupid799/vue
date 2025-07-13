<template>
  <div
    class="outlet-card"
    :class="[{ 'type-bundle': cardTheme === 3 }, { 'outlet-card-view': cardType === 'card' }, { 'outlet-card-img': cardType === 'img' }, { 'outlet-card-list': cardType === 'list' }]">
    <div class="card-in">
      <div
        class="card-im"
        v-if="cardType !== 'list'">
        <img
          :src="cardImg"
          alt="" />
        <div
          class="im-bundle"
          v-if="cardTheme === 3 && cardBundle.length > 0">
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
          <template v-if="cardTheme === 3">
            <div class="prd-price-area">
              <div class="price-info">
                <template v-if="cardDc.length > 0 || cardPrice1.length > 0">
                  <sdl-badge
                    primary
                    class="type-rect color2"
                    >{{ cardDc }}% Off</sdl-badge
                  >
                  <span class="price1"
                    ><em>{{ cardUnit }}</em> {{ cardPrice1 }}</span
                  >
                </template>
                <span class="price2"
                  ><em>{{ cardUnit }}</em> {{ cardPrice2 }}</span
                >
              </div>
            </div>
          </template>
        </div>

        <!-- bundle drop -->
        <div
          class="bundle-price-area"
          :class="[{ on: bundleOpen }, { center: cardBundle.length > 2 && bundleOpen }]"
          v-if="cardTheme === 3">
          <div class="bundle-in">
            <sdl-badge
              primary
              class="type-rect badge-bundle-add">
              BUNDLE+3
            </sdl-badge>
            <ul
              class="bundle-price-ul"
              :class="{ single: cardBundle.length === 1 }">
              <li
                class="bundle-price-item"
                v-for="(bundle, index) in cardBundle"
                :key="index">
                <div class="bundle-im">
                  <img
                    :src="bundle.imgSrc"
                    alt="" />
                </div>
                <div class="price-info">
                  <p class="model">{{ bundle.code }}</p>
                  <p class="desc">{{ bundle.desc }}</p>
                  <sdl-badge
                    primary
                    class="type-rect color2"
                    >{{ bundle.dc }}<template v-if="bundle.dc !== 'free'">% Off</template>
                  </sdl-badge>
                  <span class="price1"
                    ><em>{{ cardUnit }}</em> {{ bundle.price1 }}</span
                  >
                  <span class="price2"
                    ><em>{{ cardUnit }}</em> {{ bundle.price2 }}</span
                  >
                </div>
              </li>
            </ul>
            <nsp-btn
              class="btn-ico btn-bundle-toggle"
              v-if="cardTheme === 3 && cardBundle.length > 1"
              @click="onBundleToggle($event)">
              <span :class="bundleOpen ? 'ico-chevron-up' : 'ico-chevron-down'"></span>
            </nsp-btn>
          </div>
        </div>
        <!-- //bundle drop -->

        <div class="card-btm">
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
          <div class="card-btn">
            <nsp-counter />
            <nsp-btn
              class="btn-outline sm"
              @click="$emit('addCart')"
              >Outlet Cart</nsp-btn
            >
            <nsp-btn class="btn-fill sm">Place Order</nsp-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import BundleItem from './OutletBundleItem.vue';

const props = defineProps({
  cardIndex: {
    type: Number,
    default: null,
  },
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
  cardDc: {
    type: [String, Number],
    default: null,
  },
  cardPrice1: { type: [String, Number], default: '' },
  cardPrice2: { type: [String, Number], default: '' },
  cardBundle: {
    type: Object,
    default: () => {},
  },
  bundleOpen: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['bundleToggle']);

//bundle toggle
const bundleToggleValue = ref();
bundleToggleValue.value = props.bundleOpen;

const onBundleToggle = event => {
  emits('bundleToggle', props.cardIndex, event);
};

const bundleLeave = () => {
  bundleToggleValue.value = false;
};
</script>
