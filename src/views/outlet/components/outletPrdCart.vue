<template>
  <div
    id="outlet-cart"
    :class="isExpand ? 'is-expand' : 'is-collapse'">
    <div class="outlet-prd-cart">
      <div class="inner">
        <div
          class="prd-cart-toggle"
          v-if="newCartList.length > 1">
          <nsp-btn
            class="btn-ico"
            @click.stop="cartToggle"
            ><span
              class="i-24"
              :class="isExpand ? 'ico-chevron-down' : 'ico-chevron-up'"></span
          ></nsp-btn>
        </div>
        <div class="prd-cart-area">
          <div class="cart-head">
            <div class="h-tit-wrap">
              <h3 class="h-tit">
                Outlet Cart<span class="num">{{ newCartList.length }}</span>
              </h3>
              <span class="small-txt">Select items to add them to your Outlet Cart.</span>
            </div>
          </div>
          <div class="cart-body">
            <ul class="cart-list">
              <li
                class="cart-item"
                v-for="(item, index) in newCartList"
                :key="item.model">
                <div class="in">
                  <div class="im">
                    <img
                      :src="item.imgSrc"
                      alt="" />
                  </div>
                  <div class="info">
                    <p class="p">
                      <span class="model">{{ item.modelCode }}</span>
                      <span class="desc">{{ item.description }}</span>
                    </p>
                  </div>
                  <div class="price-wrap">
                    <span class="price1"
                      ><em>{{ cartUnit }}</em
                      >{{ item.price1 }}</span
                    >
                    <span class="price2"
                      ><em>{{ cartUnit }}</em
                      >{{ item.price2 }}</span
                    >
                  </div>
                  <nsp-counter />
                </div>
                <nsp-btn
                  class="btn-ico del"
                  @click="cartItemDel(index)"
                  ><span class="ico-cancel_black_b i-24"></span
                ></nsp-btn>
              </li>
            </ul>
          </div>
        </div>
        <nsp-btn-area data-placement="btm">
          <nsp-btn class="btn-fill">Place Order </nsp-btn>
        </nsp-btn-area>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  cartList: {
    type: Object,
    default: () => {},
  },
  cartUnit: {
    type: String,
    default: 'USD',
  },
});

const $emit = defineEmits('removeCartItem');

const isExpand = ref(true);
const cartToggle = () => {
  isExpand.value = !isExpand.value;
};

const newCartList = ref([]);
newCartList.value = props.cartList;

const cartItemDel = index => {
  newCartList.value.splice(index, 1);
  $emit('removeCartItem', index, newCartList);
};
</script>
