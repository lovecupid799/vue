<template>
  <div
    class="filter-list-item"
    v-if="chipDel">
    <span>
      <slot></slot>
    </span>
    <nsp-btn
      class="btn-ico"
      @click="onClick">
      <span class="ico-cancel_b i-12"> </span>
    </nsp-btn>
  </div>
</template>

<script setup>
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
  chipDel.value = !chipDel;
};
</script>
