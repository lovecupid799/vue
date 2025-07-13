<template>
  <div class="radio-item">
    <nsp-radio :label="label" />
  </div>
</template>

<script setup>
const props = defineProps({
  label : {
    type : String,
    default: '',
  }
})
</script>
