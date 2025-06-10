<template>
  <div
    class="nsp-card-prd"
    :class="{ hori: dataDirection !== null && dataDirection === 'hori' }">
    <div class="in">
      <slot></slot>
      <div class="card-in">
        <slot name="text"></slot>
        <div class="btn-area">
          <slot name="btn"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  dataDirection: {
    type: [String, null],
    default: null,
  },
  href: {
    type: String,
    default: '#',
  },
  title: {
    type: String,
    default: '타이틀입니다.',
  },
  txt1: {
    type: String,
    default: '텍스트1',
  },
});
</script>

<style lang="scss" scoped>
.nsp-card-prd {
  padding: 0;
  .in {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px;
    gap: 8px;
  }
  &.hori {
    .in {
      flex-direction: row;
      gap: 16px;
    }
  }
}
</style>
