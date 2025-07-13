<template>
  <div class="top-option-area">
    <div class="list-type">
      <template
        v-for="(item, index) in typeLists"
        :key="index">
        <button type="button"
          class="btn-ico"
          :class="{ active: item.isActive }"
          @click.stop="setActivate(item, index)">
          <span
            class="i-24"
            :class="item.className"></span>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  defaultType: { type: String, default: '' },
});

const emits = defineEmits(['changeType']);

const typeLists = ref([
  {
    type: 'card',
    className: 'ico-view-card',
    isActive: true,
  },
  {
    type: 'img',
    className: 'ico-view-img',
  },
  {
    type: 'list',
    className: 'ico-view-list',
  },
]);

const setActivate = (selected, index) => {
  let activeFlag = false;
  typeLists.value.map(item => {
    item.isActive = false;
    if (selected.type === item.type) {
      item.isActive = true;
      activeFlag = true;
    } else {
      if (!activeFlag) {
        console.log(index);
      }
    }
    return item;
  });

  emits('changeType', selected.type);
};

onMounted(() => {
  if (props.defaultType) {
    typeLists.value.map(item => {
      item.isActive = false;
      if (props.defaultType === item.type) {
        item.isActive = true;
      }
      return item;
    });
  }
});
</script>
