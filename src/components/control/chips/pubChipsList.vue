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
@import '@/assets/scss/abstracts/_mixin.scss';
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

.filter-result-wrap {
  @include flex($d: flex, $jc: flex-start, $ai: flex-start, $gap: 16px);
  width: 100%;
  margin: 0;

  .title {
    @include flex($d: flex, $jc: flex-start, $ai: center, $gap: 8px);
    flex-shrink: 0;
    color: var(--Primary-color-Black);
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;

    .num {
      color: var(--Primary-color-Skyblue);
      font-style: normal;
      font-weight: 700;
    }
  }

  .filter-list {
    position: inherit;
    align-items: flex-start;
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;
    @include scrollbar;
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

.filter-list {
  position: relative;
  @include flex($d: flex, $jc: flex-start, $ai: center);
  flex: 1;
  min-height: 34px;
  padding: 4px 16px;
  border-radius: 8px;
  background: #f7f7f7;
  > ul {
    @include flex($d: flex, $jc: flex-start, $ai: center, $gap: 4px 16px);
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
      @include scrollbar-x;
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
