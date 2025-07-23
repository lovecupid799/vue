<template>
  <div id="mob-wrap">
    <mob-pub-header>
      <slot name="header"></slot>
    </mob-pub-header>
    <div id="mob-container">
      <slot></slot>
      <mob-bottom-navi v-if="useNavi" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  useBg: {
    type: String,
    default:'',
  },
  useType: {
    type: String,
    default:'',
  },
  useNavi : {
    type: Boolean,
    default:false,
  }
})
</script>

<style lang="scss">
@use "@/assets/scss-mob/css.scss";
</style>

