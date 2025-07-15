<template>
  <!-- content -->
  <nsp-page :crumb="breadcrumb">
    <div class="section">
      <div class="outlet-promo-top">
        <div class="left">
          <div class="prd-select">
            <span class="label">Product Group / Product</span>
            <nsp-tree-select
              v-model="treeSelect"
              node-key="value"
              label-key="label"
              children-key="children"
              class="w240"
              :placeholder="'Select Product Group / Product'"
              :options="treeSelectOptions" />
          </div>
        </div>
        <div class="right">
          <sdl-datepicker
            minimum-view="month"
            v-model="pickerPeriod"
            :period="pickerPeriod" />
          <nsp-separator vertical />
          <div class="sort-by">
            <div class="label">Sort by :</div>
            <nsp-select
              class="nsp-select borderless"
              :first-option="false"
              :options="['Newest', 'Discount Amt High to Low', 'Top Selling', 'Alphabetical Ascesnding', 'Alphabetical Descending', 'Price High to Low', 'Price Low to High']" />
          </div>
        </div>
      </div>

      <!-- promotion list -->
      <div class="outlet-promo-list">
        <outlet-promo-item
          v-for="item in promoLists"
          :key="item.tit"
          :promo-tit="item.title"
          :promo-date="item.date"
          :promo-img="item.imgSrc"
          :promo-desc="item.description"
          :promo-target="item.target" />
      </div>
      <!-- //promotion list -->
      <sdl-pagination
        :current-page="gridPage.pageIndex"
        :total-rows="gridPage.records"
        :per-page="gridPage.pageSize"
        @change="movePage">
      </sdl-pagination>
    </div>
  </nsp-page>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { DateUtil } from '@/utils';
import OutletPromoItem from './components/OutletPromoItem.vue';

//Bread Crumb Data
const breadcrumb = ref({
  title: 'Special Deals',
  list: [{ name: 'Outlet' }, { name: 'Special Deals' }],
});

//pagination
const gridPage = ref({
  pageIndex: 1,
  pageSize: 20,
  pageUnit: 0,
  records: 100,
  totalPage: 0,
});

function movePage(pageIndex) {
  gridPage.value.pageIndex = pageIndex;
}

//product type -  multi select
const searchParams = ref({
  modelList: [],
});

const treeSelect = ref([]);
const treeSelectOptions = ref([
  {
    value: 'TV',
    label: 'TV',
    children: [
      {
        value: '8K Neo QLED',
        label: '8K Neo QLED',
      },
      {
        value: '4K Neo QLED',
        label: '4K Neo QLED',
      },
      {
        value: 'OLED',
        label: 'OLED',
      },
      {
        value: 'Lifestyle',
        label: 'Lifestyle',
      },
      {
        value: 'UHD',
        label: 'UHD',
      },
    ],
  },
  {
    value: 'Refrigerator',
    label: 'Refrigerator',
    children: [
      { value: 'French Door', label: 'French Door' },
      { value: 'American Style', label: 'American Style' },
      { value: 'Bottom Freezer', label: 'Bottom Freezer' },
      { value: 'Side-by-Side', label: 'Side-by-Side' },
      { value: 'One Door', label: 'One Door' },
      { value: 'Wine Celler', label: 'Wine Celler' },
    ],
  },
]);

//date picker
const pickerPeriod = { startDate: DateUtil.subDate(1, 'M'), endDate: DateUtil.now() };

//list data
const prdPriceUnit = ref('USD');
const promoLists = ref([
  {
    title: 'Big Screen, Bigger Savings-Up to 15% Off TVs! Big Screen, Bigger Savings-Up to 15% Off TVs!',
    date: '08/15/2025 - 09/15/2025',
    imgSrc: '/assets/images/sample/im-outlet-sample-promo.png',
    description: `Discover the ultimate home entertainment experience with Samsung’s latest range of QLED and Crystal UHD TVs. For a limited time, you can save up to 15% on select models and elevate your viewing experience like never before. Whether you're watching your favorite movies, catching up on a TV series, streaming the latest sports, or gaming with friends, Samsung TVs offer cutting-edge technology that brings every scene to life with stunning detail, vibrant color, and immersive sound. Now is the perfect opportunity to upgrade your living room with a TV that not only looks amazing but also performs beyond expectations. Free Shipping : Enjoy fast and secure delivery directly to your home, on us. Flexible Financing Options : Pay over time with convenient monthly installment plans.Extended Warranty Plans Available : Protect your investment with extended coverage for added peace of mind.Eco-Friendly Packaging : Samsung’s TVs come with eco-conscious packaging that can be creatively reused or recycled.Whether you're upgrading from an older TV or choosing your first 4K model, Crystal UHD delivers a solid performance backed by Samsung’s trusted innovation.`,
    target: `GQ65LS03DAUXZG, GQ55LS03DAUXZG, GQ50LS03DAUXZG, HW-LS60D/ZG, HW-S56B/ZG, HW-B760GD/ZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS03DAUXZG, GQ55LS03DAUXZG, GQ50LS03DAUXZG, HW-LS60D/ZG, HW-S56B/ZG, HW-B760GD/ZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG`,
  },
  {
    title: 'Big Screen, Bigger Savings-Up to 15% Off TVs!',
    date: '08/15/2025 - 09/15/2025',
    imgSrc: '/assets/images/sample/im-outlet-sample-promo1.png',
    description: `Discover the ultimate home entertainment experience with Samsung’s latest range of QLED and Crystal UHD TVs. For a limited time, you can save up to 15% on select models and elevate your viewing experience like never before. Whether you're watching your favorite movies, catching up on a TV series, streaming the latest sports, or gaming with friends, Samsung TVs offer cutting-edge technology that brings every scene to life with stunning detail, vibrant color, and immersive sound. Now is the perfect opportunity to upgrade your living room with a TV that not only looks amazing but also performs beyond expectations. Free Shipping : Enjoy fast and secure delivery directly to your home, on us. Flexible Financing Options : Pay over time with convenient monthly installment plans.Extended Warranty Plans Available : Protect your investment with extended coverage for added peace of mind.Eco-Friendly Packaging : Samsung’s TVs come with eco-conscious packaging that can be creatively reused or recycled.Whether you're upgrading from an older TV or choosing your first 4K model, Crystal UHD delivers a solid performance backed by Samsung’s trusted innovation.`,
    target: `GQ65LS03DAUXZG, GQ55LS03DAUXZG, GQ50LS03DAUXZG, HW-LS60D/ZG, HW-S56B/ZG, HW-B760GD/ZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS03DAUXZG, GQ55LS03DAUXZG, GQ50LS03DAUXZG, HW-LS60D/ZG, HW-S56B/ZG, HW-B760GD/ZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG`,
  },
  {
    title: 'Big Screen, Bigger Savings-Up to 15% Off TVs!',
    date: '08/15/2025 - 09/15/2025',
    imgSrc: '/assets/images/sample/im-outlet-sample-promo.png',
    description: `Discover the ultimate home entertainment experience with Samsung’s latest range of QLED and Crystal UHD TVs. For a limited time, you can save up to 15% on select models and elevate your viewing experience like never before. Whether you're watching your favorite movies, catching up on a TV series, streaming the latest sports, or gaming with friends, Samsung TVs offer cutting-edge technology that brings every scene to life with stunning detail, vibrant color, and immersive sound. Now is the perfect opportunity to upgrade your living room with a TV that not only looks amazing but also performs beyond expectations. Free Shipping : Enjoy fast and secure delivery directly to your home, on us. Flexible Financing Options : Pay over time with convenient monthly installment plans.Extended Warranty Plans Available : Protect your investment with extended coverage for added peace of mind.Eco-Friendly Packaging`,
    target: `GQ65LS03DAUXZG, GQ55LS03DAUXZG, GQ50LS03DAUXZG, HW-LS60D/ZG, HW-S56B/ZG, HW-B760GD/ZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS03DAUXZG, GQ55LS03DAUXZG, GQ50LS03DAUXZG, HW-LS60D/ZG, HW-S56B/ZG, HW-B760GD/ZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG, GQ65LS01DAUXZG`,
  },
  {
    title: 'Big Screen, Bigger Savings-Up to 15% Off TVs!',
    date: '08/15/2025 - 09/15/2025',
    imgSrc: '/assets/images/sample/im-outlet-sample-promo1.png',
    description: `Discover the ultimate home entertainment experience with Samsung’s latest range of QLED and Crystal UHD TVs.`,
    target: `GQ65LS03DAUXZG, GQ55LS03DAUXZG, GQ50LS03DAUXZG, HW-LS60D/ZG, HW-S56B/ZG, HW-B760GD/ZG, `,
  },
]);
</script>
