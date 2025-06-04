<template>
  <h2 class="guide-tit1">ETC</h2>
  <h3 class="guide-tit2">Badge</h3>
  <h4 class="guide-tit3">타입 - 기본</h4>
   <div class="guide-exBox">
    <div class="in">
      
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>

  <h4 class="guide-tit3">타입 - 블릿</h4>
   <div class="guide-exBox">
    <div class="in">
      
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>

  <h3 class="guide-tit2">CHIPS</h3>
  <h4 class="guide-tit3">타입 - 기본</h4>
   <div class="guide-exBox">
    <div class="in">
      <pub-chips-list>
        <pub-chips
          v-for="(item, index) in filterList1"
          :key="index">
          {{ item.name }}
        </pub-chips>
      </pub-chips-list>
      <br />
      <pub-chips-list>
        <pub-chips
          v-for="(item, index) in filterList1b"
          :chip="item.delete"
          :key="index">
          {{ item.name }}
        </pub-chips>
        <template #btn>
          <button
            type="button"
            class="btn-txt underline primary sm"
            @click="onResetAllFilterMake">
            reset
          </button>
        </template>
      </pub-chips-list>
      <br />
      <pub-chips-list>
        <template #title>Selected Total <span class="num">0</span> </template>
        <pub-chips
          v-for="(item, index) in filterList1a"
          :key="index">
          {{ item.name }}
        </pub-chips>
        <template #btn>
          <button type="button" class="btn-txt underline primary sm" @click="onResetAllFilter">reset</button>
        </template>
      </pub-chips-list>
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';
  //filter
const filterList1 = ref([
  { id: 1, name: '필터명1' },
  { id: 2, name: '필터명2' },
  { id: 3, name: '필터명3' },
  { id: 4, name: '필터명4' },
  { id: 5, name: '필터명5' },
  { id: 6, name: '필터명6' },
  { id: 7, name: '필터명7' },
  { id: 8, name: '필터명8' },
  { id: 9, name: '필터명9' },
  { id: 10, name: '필터명10' },
  { id: 11, name: '필터명11' },
  { id: 12, name: '필터명12' },
  { id: 13, name: '필터명13' },
  { id: 14, name: '필터명14' },
  { id: 15, name: '필터명15' },
  { id: 16, name: '필터명16' },
]);

const filterList1a = ref([
  { id: 1, name: '필터명1', delete: true },
  { id: 2, name: '필터명2', delete: true },
  { id: 3, name: '필터명3', delete: true },
  { id: 4, name: '필터명4', delete: true },
  { id: 5, name: '필터명5', delete: true },
  { id: 6, name: '필터명6', delete: true },
  { id: 7, name: '필터명7', delete: true },
  { id: 8, name: '필터명8', delete: true },
  { id: 9, name: '필터명9', delete: true },
  { id: 10, name: '필터명10', delete: true },
  { id: 11, name: '필터명11', delete: true },
  { id: 12, name: '필터명12', delete: true },
  { id: 13, name: '필터명13', delete: true },
  { id: 14, name: '필터명14', delete: true },
  { id: 15, name: '필터명15', delete: true },
  { id: 16, name: '필터명16', delete: true },
]);

const filterList1b = ref([
  { id: 1, name: '필터명1', delete: true },
  { id: 2, name: '필터명2', delete: true },
  { id: 3, name: '필터명3', delete: true },
  { id: 4, name: '필터명4', delete: true },
  { id: 5, name: '필터명5', delete: true },
  { id: 6, name: '필터명6', delete: true },
  { id: 7, name: '필터명7', delete: true },
  { id: 8, name: '필터명8', delete: true },
  { id: 9, name: '필터명9', delete: true },
  { id: 10, name: '필터명10', delete: true },
  { id: 11, name: '필터명11', delete: true },
  { id: 12, name: '필터명12', delete: true },
  { id: 13, name: '필터명13', delete: true },
  { id: 14, name: '필터명14', delete: true },
  { id: 15, name: '필터명15', delete: true },
  { id: 16, name: '필터명16', delete: true },
]);

const onResetAllFilter = () => {
  filterList1a.value = filterList1a.value.filter(item => (item.delete = false));
};

const onResetAllFilterMake = () => {
  filterList1b.value = filterList1b.value.filter(item => (item.delete = false));
};

watch(filterList1b.value, (newValue, oldValue) => {
  console.log('change!!! : ' + newValue.length + ' ' + oldValue.length);
});
</script>

<style lang="scss">
.bull-list {
  &.bull-number {
    counter-reset: list-number 0;
    > li {
      display: flex;
      gap: 4px;
      padding-left: 0;
      counter-increment: list-number;
      &::before {
        position: relative;
        content: counter(list-number, decimal-leading-zero) '.';
        width: 20px;
        background: none;
      }
    }
  }
}
</style>
