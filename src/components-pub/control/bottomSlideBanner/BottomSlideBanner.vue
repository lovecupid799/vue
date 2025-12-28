<template>
  <div id="bottom-slide-banner">
    <TransitionGroup name="bottom-slide">
      <div class="in" v-if="banShow">
        <slot></slot>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
  defineProps({
    banShow : {
      type: Boolean,
      default:false,
    }
  });
</script>

<style lang="scss">
#bottom-slide-banner {
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100;
  width: 1440px;
  transform: translateX(-50%);
  .in {
    position: absolute;
    left: 0;
    bottom: 50px;
    width: 200px;
    height: 150px;
    border:3px solid red;
    background-color: #fff;
  }
}

.bottom-slide-enter-active ,
.bottom-slide-leave-active {
  transition: transform 0.5s ease-out;
}

.bottom-slide-enter-from,
.bottom-slide-leave-to {
  transform: translateY(140%);
}
</style>
