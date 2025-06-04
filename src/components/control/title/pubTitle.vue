<template>
  <div
    class="h-tit-wrap"
    :class="hBullet === false && 'no-bullet'">
    <h-tag
      :class="[`h-tit${hDepth}`, hClass !== null && hClass]"
      v-if="title !== null">
      {{ title }}
    </h-tag>
    <div
      class="h-tit__left"
      :class="{ vert: leftVert === true }"
      v-if="$slots.default && title === null">
      <slot></slot>
    </div>
    <div
      class="h-tit__right"
      :class="{ vert: rightVert === true }"
      v-if="$slots.right">
      <slot name="right"> </slot>
    </div>
    <div
      v-if="$slots.btm"
      class="h-tit__row">
      <slot name="btm"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: [Object, String],
    default: null,
  },
  leftVert: {
    type: Boolean,
    default: false,
  },
  rightVert: {
    type: Boolean,
    default: false,
  },
  hDepth: {
    type: Number,
    default: 1,
  },
  hTag: {
    type: String,
    default: 'h2',
  },
  hClass: {
    type: String,
    default: null,
  },
  hBullet: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.h-tit-wrap {
  flex-wrap: wrap;
  gap: 8px 16px;
  .h-tit__left {
    display: inline-flex;
    align-items: flex-start;
    &.vert {
      flex-direction: column;
    }
  }

  .h-tit__right {
    text-align: right;
  }

  .h-tit__row {
    display: flex;
    justify-content: space-between;
    gap: 0 16px;
    flex-basis: 100%;
  }

  &.no-bullet {
    [class^='h-tit'] {
      &::before {
        display: none;
      }
    }
  }
}
</style>
