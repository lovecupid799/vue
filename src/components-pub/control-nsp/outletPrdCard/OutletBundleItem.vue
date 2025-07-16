<template>
  <div class="bundle-item">
    <nsp-radio
      :model-value="modelValue"
      :val="bundleCode"
      v-if="bundleType !== 'single'"
      @update:model-value="$emit('update:modelValue', $event)" />
    <div class="im">
      <img :src="bundleImg" />
    </div>
    <div class="text">
      <sdl-badge
        primary
        class="type-rect"
        >BUNDLE</sdl-badge
      >
      <p class="tit">{{ bundleCode }}</p>
      <p class="txt">{{ bundleDesc }}</p>
    </div>
    <div class="price-info">
      <sdl-badge
        primary
        class="type-rect color2"
        >{{ bundleDc }}% Off</sdl-badge
      >
      <span class="price1"
        ><em>{{ bundleUnit }}</em> {{ bundlePrice1 }}</span
      >
      <span class="price2"
        ><em>{{ bundleUnit }}</em> {{ bundlePrice2 }}</span
      >
    </div>
    <span class="ico-chevron-right_b i-12"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: undefined,
  },
  bundleType: { type: String, default: '' },
  bundleImg: { type: String, default: '' },
  bundleCode: { type: String, default: '' },
  bundleDesc: { type: String, default: '' },
  bundleDc: { type: [String, Number], default: '' },
  bundleUnit: { type: [String], default: '' },
  bundlePrice1: { type: [String, Number], default: '' },
  bundlePrice2: { type: [String, Number], default: '' },
});
</script>
