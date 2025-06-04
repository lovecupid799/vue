<template>
  <tag :class="bullet === null ? 'nsp-list' : bullet === 'dot' ? 'bull-list' : `bull-list bull-${bullet}`">
    <slot></slot>
  </tag>
</template>

<script setup>
const props = defineProps({
  bullet: {
    type: [String, null],
    default: null,
  },
  tag: {
    type: String,
    default: 'ul',
  },
});
</script>
