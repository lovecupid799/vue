<template>
  <li class="list-item">
    <div class="list-item__in">
      <slot></slot>
    </div>
    <div v-if="$slots.side">
      <slot name="side"></slot>
    </div>
  </li>
</template>
