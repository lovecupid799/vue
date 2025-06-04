<template>
  <div class="chips-list-wrap">
    <div
      class="title"
      v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div class="chips-list">
      <div class="list-in" :class="{'scroll-x' : scroll}">
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
.chips-list-wrap {
  .chips-list {
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
        .chip-group {
          flex-wrap: nowrap;
        }
      }
    }
  }
}

.chips-list-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  margin: 0;

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    color: #000;
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;

    .num {
      color: #0b219e;
      font-style: normal;
      font-weight: 700;
    }
  }

  .chips-list {
    position: inherit;
    align-items: flex-start;
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;
  }

  .btn-area {
    position: sticky;
    top: 0;
  }

  &.wh {
    .filter-list {
      border-radius: 8px;
      background: #fff;

      &::after {
        background: linear-gradient(270deg, #fff, transparent);
      }
    }
  }
}

.chips-list {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  min-height: 34px;
  padding: 4px 16px;
  border-radius: 8px;
  background: #f7f7f7;
  > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px 16px;
    flex: 1;
    flex-wrap: wrap;
    min-height: 20px;
  }

  .btn-area {
    display: inline-flex;
    flex-shrink: 0;
    padding-left: 24px;
    .nsp-btn {
      line-height: 19px;
      &.primary {
        color: #0b219e;

        &.btn-txt {
          font-size: 13px;
          line-height: 20px;
          border-color: #0b219e;
        }
      }

      &:disabled {
        &.primary {
          color: #ddd;

          &.btn-txt {
            border-color: #ddd;
          }
        }

        .ico-reset_skyblue_b {
          // @extend .ico-reset_b_disabled;
        }
      }
    }
  }
  &.scroll-x {
    height: 34px;
    padding: 0 16px;
    ul {
      flex-wrap: nowrap;
      height: 34px;
      overflow-x: auto;
      &::after {
        content: '';
        flex-shrink: 0;
        position: sticky;
        top: 0;
        right: 0px;
        width: 60px;
        height: 24px;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(247, 247, 247, 1) 100%);
        z-index: 1;
        pointer-events: none;
      }
    }
    .btn-area {
      margin: auto;
    }
  }
  &:not(.scroll-x) {
    > ul {
      min-height: 24px;
      padding: 2px 0;
    }
  }
}

.filter-list-item {
  display: inline-flex;
  gap: 4px;
  flex: 0 0 auto;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;

  .nsp-btn {
    min-width: 16px;
  }
}
</style>
