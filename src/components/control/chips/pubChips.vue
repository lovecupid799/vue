<template>
  <div class="filter-result-wrap">
    <div
      class="title"
      v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div class="filter-list">
      <div class="list-in">
        <div class="ul-wrap">
          <div class="chip-group">
            <slot></slot>
          </div>
        </div>
      </div>
      <div
        class="btn-area"
        v-if="$slots.btn">
        <slot name="btn"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  scroll: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.filter-result-wrap {
  .filter-list {
    > .list-in {
      flex: 1;
      .chip-group {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 4px 16px;
      }
      &.scroll-x {
        overflow: hidden;
        overflow-x: auto;
        .ul-wrap {
          display: table;
          table-layout: fixed;
          width: 100%;
        }
        ul {
          flex-wrap: nowrap;
        }
      }
    }
  }
}
</style>
