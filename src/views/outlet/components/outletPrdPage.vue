<template>
  <!-- content -->
  <nsp-page :crumb="breadcrumb">
    <div class="outlet-deals-body">
      <!-- title -->
      <div class="outlet-deals-title">
        <h3 class="tit">Big Screen, Bigger Savings -Up to 15% Off TVs!</h3>
        <p class="date">08/15/2025 - 09/15/2025</p>
      </div>
      <!-- title -->

      <div class="deals-list">
        <!-- search area -->
        <div class="deals-search-area">
          <div class="left">
            <div class="prd-select">
              <span class="label">Product Group / Product</span>
              <nsp-select
                class="nsp-select"
                v-model="searchParams.modelList"
                :options="searchOptions"
                multiple
                clearable
                :confirmBtnShow="false"
                :placeholder="'Select Product Group / Product'" />
            </div>
          </div>

          <div class="prd-filterd-option">
            <outlet-option-top
              :default-type="prdCardType"
              @change-type="changeListType" />
          </div>
        </div>
        <!-- //search area -->

        <!-- filterd area -->
        <div class="deals-filterd-option">
          <outlet-prd-filter />
        </div>
        <!-- //filterd area -->

        <!-- product list -->
        <div class="deals-card-list-wrap">
          <!-- product lists -->
          <outlet-prd-card-list>
            <outlet-prd-card
              v-for="(card, index) in cardLists"
              :card-index="index"
              :card-theme="outletPrdTheme"
              :card-type="prdCardType"
              :card-unit="prdPriceUnit"
              :card-dc="card.dc"
              :card-img="card.imgSrc"
              :card-desc="card.description"
              :card-code="card.modelCode"
              :card-sales="card.sales"
              :card-qty="card.qty"
              :card-price1="card.price1"
              :card-price2="card.price2"
              :card-bundle="card.bundle"
              :bundle-open="card.bundleOpen"
              :key="index"
              @add-cart="addCart(card, index)"
              @bundle-toggle="bundleToggle" />
          </outlet-prd-card-list>
          <!--// product lists -->
          <sdl-pagination
            :current-page="gridPage.pageIndex"
            :total-rows="gridPage.records"
            :per-page="gridPage.pageSize"
            @change="movePage">
          </sdl-pagination>
        </div>
        <!-- //product list -->
      </div>
    </div>

    <!-- Outlet Cart -->
    <Teleport
      to="#modals-container"
      v-if="cartList.length">
      <outlet-prd-cart
        :cart-list="cartList"
        :cart-unit="cartPriceUnit"
        @removeCartIteml="removeCartItem" />
    </Teleport>
    <!--// Outlet Cart -->
  </nsp-page>
</template>

<script setup>
import { ref } from 'vue';
import OutletOptionTop from './components/OutletOptionTop.vue';
import OutletPrdFilter from './components/OutletPrdFilter.vue';
import OutletPrdCard from './components/OutletPrdCard.vue';
import OutletPrdCardList from './components/OutletPrdCardList.vue';
import OutletPrdCart from './components/OutletPrdCart.vue';

//Bread Crumb Data
const breadcrumb = ref({
  title: 'Special Deals',
  list: [{ name: 'Outlet' }, { name: 'Special Deals' }],
});

//outletPrdTheme
//개발 시 참조 사항 : 1 - Instant Discout, 2 - Scale Discout, 3 - Bundle Discount
const outletPrdTheme = ref(3);

//list type
const prdCardType = ref('card');
const changeListType = type => {
  prdCardType.value = type;
};

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

const searchOptions = ['조회조건111', '조회조건222', '조회조건333', '조회조건444'];

//list data
const prdPriceUnit = ref('USD');
const cardLists = ref([
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025) 98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,
    dc: '',
    price1: '',
    price2: '1,920.00',
    bundleOpen: false,
    bundle: [
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker Music Frame Dolby Atmos Smart Speaker',
        dc: 'free',
        price1: '0',
        price2: '0',
      },
    ],
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,
    dc: '40',
    price1: '3,200.00',
    price2: '1,920.00',
    bundleOpen: false,
    bundle: [
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
    ],
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,
    dc: '20',
    price1: '3,200.00',
    price2: '1,920.00',
    bundleOpen: false,
    bundle: [
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: '11HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        unit: 'usd',
        price1: '399.99',
        price2: '299.99',
      },
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: '22HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: '33HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
    ],
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,
    dc: '30',
    price1: '3,200.00',
    price2: '1,920.00',
    bundleOpen: false,
    bundle: [
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
    ],
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,
    dc: '20',
    price1: '3,200.00',
    price2: '1,920.00',
    bundleOpen: false,
    bundle: [
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
    ],
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,
    dc: '40',
    price1: '3,200.00',
    price2: '1,920.00',
    bundleOpen: false,
    bundle: [
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
      {
        imgSrc: '/assets/images/sample/im-outlet-sample-bundle2.png',
        code: 'HW-LS60D/ZG',
        desc: 'Music Frame Dolby Atmos Smart Speaker',
        dc: '25',
        price1: '399.99',
        price2: '299.99',
      },
    ],
  },
]);

//cart list
const cartPriceUnit = ref('USD');
const cartList = ref([]);

//cart add
const addCart = (card, index) => {
  cartList.value.push(cardLists.value[index]);
};

//bundle toggle
const bundleToggle = (cardIndex, event) => {
  cardLists.value.map((item, i) => {
    if (cardIndex !== i) {
      item.bundleOpen = false;
    } else {
      item.bundleOpen = !item.bundleOpen;
    }
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.bundle-price-area.on .bundle-in')) {
        item.bundleOpen = false;
      }
    });
  });
};
</script>
