<template>
  <div
    class="cnt-btn-area"
    :class="[dataPlacement !== null && (dataPlacement === 'top' ? 'top' : 'btm'), { center: dataAlign === 'center' }, dataType === null ? 'type-cnt' : `cnt-btm  type-${dataType}`]">
    <div
      class="left"
      v-if="!!$slots.left">
      <slot name="left"></slot>
    </div>

    <div
      class="right"
      v-if="dataAlign === null">
      <slot></slot>
    </div>
    <template v-if="dataAlign === 'center'">
      <slot></slot>
    </template>
  </div>
</template>
<script>
export default {
  name: 'NspBtnArea',
  props: {
    dataPlacement: {
      type: [String, null],
      default: null,
    },
    dataAlign: {
      type: [String, null],
      default: null,
    },
    dataType: {
      type: [String, null],
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.cnt-btn-area {
  &.center {
    justify-content: center;
    gap: 20px;
  }
  &.btm {
    margin-top: 24px;
  }
  &.type-cnt {
    gap: 8px;
  }
  &.type-page {
    &.top {
      margin-bottom: 32px;
    }
    &.btm {
      margin-top: 32px;
    }
  }
}
</style>
