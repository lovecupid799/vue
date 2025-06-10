<template>
  <div
    id="wrap"
    class="main layout-3101 type2"
    data-theme="3101">
    <pub-header />
    <div id="container">
      <router-view />
    </div>
    <pub-footer />
  </div>
</template>

<script setup>
import PubHeader from '@/components-pub/common/PubHeader3101.vue'; // pub-header
</script>

<style lang="scss">
@use "@/assets/scss/theme/_country3101.scss";
</style>
