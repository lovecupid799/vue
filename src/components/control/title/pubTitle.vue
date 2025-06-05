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
