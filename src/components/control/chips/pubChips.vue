<template>
  <div
    class="chips"
    v-if="chipDel">
    <span>
      <slot></slot>
    </span>
    <button
      type="button"
      class="btn-ico"
      @click="onClick">
      <span>x</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  chip: {
    type: Boolean,
    default: true,
  },
});

const chipDel = ref();
chipDel.value = props.chip;

const emits = defineEmits('click');

const onClick = () => {
  chipDel.value = !chipDel.value;
  emits('click');
};
</script>
