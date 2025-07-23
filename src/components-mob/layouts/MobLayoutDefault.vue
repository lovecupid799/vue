<template>
  <div id="mob-wrap">
    <pub-mob-header />
    <div id="mob-container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import pubMobHeader from '@/components-mob/common/PubMobHeader.vue';
</script>

<style lang="scss">
@use "@/assets/scss-mob/css.scss";
</style>

