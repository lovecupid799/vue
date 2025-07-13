<template>
  <h2 class="guide-tit1">EX PAGE</h2>
  <ul class="expage-list">
    <li class="li" v-for="item in exList" :key="item.tit">
      <router-link :to="{ name: item.link }" v-if="item.link">{{ item.tit }}</router-link>
      <template v-else>{{ item.tit }}</template>
      <ul class="ex-ul" v-if="item.subs">
        <li v-for="sub in item.subs" :key="sub.name">
          <router-link  :to="{ name: sub.link }" v-if="sub.link">{{ sub.name }}</router-link>
          <template v-else>{{ sub.name }}</template>
        </li>
      </ul>
    </li>
  </ul>

</template>
<script setup>
import {ref} from 'vue';
  const exList = ref([
    {tit :'폼요소 v-model 양방향 : 부모 폼 리스트 컴포넌트와 자식 폼요소 컴포넌트의 양방향 데이터 전달',link:'', subs: [
        {name:'input'},
        {name:'radio'},
        {name:'checkbox'},
      ]
    },
    {tit :'부모 컴포넌트와 자식 컴포넌트 양방향', subs : [
      {name:'카트담기 : 부모 컴포넌트의 상품을 카트 컴포넌트에 담고, 카트에 담긴 상품을 삭제 및 카트에 상품이 담긴 여부에 따라 카트가 노출/비노출 되기', link:'outlet'},
      {name:'드롭다운 : 리스트 컴포넌트에서 자식 컴포넌트의 드롭다운 메뉴를 하나만 열리게 하고, 다른 영역을 클릭하면 닫힌다. 드롭다운 자신은 토글 기능이 있다',}]}
  ]);

</script>

<style lang="scss">

</style>
