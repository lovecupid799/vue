<template>
  <h2 class="guide-tit1">FORM</h2>
  <h3 class="guide-tit2">input</h3>
  <h4 class="guide-tit3">타입 - 기본</h4>
   <div class="guide-exBox">
    <div class="in">

    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>

  <h3 class="guide-tit2">라디오</h3>
  <h4 class="guide-tit3">타입 - 기본</h4>
  <div class="guide-exBox">
    <div class="in">
      <pub-radio-list v-for="(radio, index) in radioList" :key="index">
        <pub-radio-item :label ="radio.label" />
      </pub-radio-list>
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>

  <h4 class="guide-tit3">라디오 그룹</h4>
   <div class="guide-exBox">
    <div class="in">

    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const radioList = ref([
  {
    label: 'radio1',
  },
  {
    label: 'radio2',
  },
  {
    label: 'radio3',
  },
])
</script>
