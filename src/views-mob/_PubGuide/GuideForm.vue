<template>
  <h2 class="guide-tit1">FORM</h2>
  <h3 class="guide-tit2">input</h3>
  <h4 class="guide-tit3">타입 - 기본</h4>
   <div class="guide-exBox">
    <div class="in">

    </div>
    <div class="code">
      <pre>{{ `` }}</pre>
    </div>
  </div>

  <h3 class="guide-tit2">checkbox</h3>
  <h4 class="guide-tit3">타입 - 기본</h4>
   <div class="guide-exBox">
    <div class="in">
      <pub-checkbox :value="'checkbox1-1'" v-model="sampleValue.checkbox1">checkbox1-1</pub-checkbox>
      <pub-checkbox :value="'checkbox1-1'" v-model="sampleValue.checkbox1">checkbox1-2</pub-checkbox>
      {{ sampleValue.checkbox1 }}
    </div>
    <div class="code">
      <pre>{{ `` }}</pre>
    </div>
  </div>

  <h3 class="guide-tit2">라디오</h3>
  <h4 class="guide-tit3">타입 - 기본</h4>
  <div class="guide-exBox">
    <div class="in">
      <pub-radio :value="'radio1-1'" v-model="sampleValue.radio1">radio1-1</pub-radio>
      <pub-radio :value="'radio1-2'" v-model="sampleValue.radio1">radio1-2</pub-radio>
      {{ sampleValue.radio1 }}
    </div>
    <div class="code">
      <pre>{{ `` }}</pre>
    </div>
  </div>

  <h4 class="guide-tit3">라디오 그룹</h4>
   <div class="guide-exBox">
    <div class="in">
<pub-radio-list v-for="(radio, index) in radioList" :key="index">
        <pub-radio-item :label ="radio.label" />
      </pub-radio-list>
    </div>
    <div class="code">
      <pre>{{ `` }}</pre>
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

const sampleValue = ref({
  radio1 : '',
  checkbox1: [],
})
</script>
