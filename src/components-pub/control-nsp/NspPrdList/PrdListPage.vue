<template>
  <!-- content -->
  <nsp-page :crumb="breadcrumb">
    <template #content-head>
      <div class="outlet-deals-top">
        <div class="outlet-deals-select">
          <span class="label">Promotion</span>
          <!-- <nsp-select
            class="nsp-select"
            :options="[{ 항목: 1 }, { 항목: 2 }]"
            first-option="all" /> -->
        </div>
      </div>
    </template>

    <div class="outlet-deals-body">
      <!-- title -->
      <outlet-prd-title
        :outletPrdTheme="outletPrdTheme"
        :outletPrdTitle="outletPrdTitle"></outlet-prd-title>
      <!-- title -->

      <div class="deals-list">
        <!-- search area -->
        <div class="deals-search-area">
          <div class="left">
            <div class="prd-select">
              <span class="label">Product Type</span>
              <nsp-select
                class="nsp-select"
                v-model="searchParams.modelList"
                :options="searchOptions"
                multiple
                clearable
                :confirmBtnShow="false"
                :placeholder="'Select Procuct Type'" />
            </div>
          </div>

          <div class="prd-filterd-option">
            <outlet-option-top
              :default-type="prdCardType"
              @change-type="changeListType" />
          </div>
        </div>

        <!-- //search area -->

        <div class="deals-card-list-wrap">
          <!-- product lists -->
          <outlet-card-list>
            <outlet-card
              v-for="(card, index) in cardLists"
              :card-theme="outletPrdTheme"
              :card-type="prdCardType"
              :card-unit="prdPriceUnit"
              :card-img="card.imgSrc"
              :card-desc="card.description"
              :card-code="card.modelCode"
              :card-sales="card.sales"
              :card-qty="card.qty"
              :card-price1="card.price1"
              :card-price2="card.price2"
              :key="index" />
          </outlet-card-list>
          <!--// product lists -->

          <sdl-pagination
            :current-page="gridPage.pageIndex"
            :total-rows="gridPage.records"
            :per-page="gridPage.pageSize"
            @change="movePage">
          </sdl-pagination>
        </div>
      </div>
    </div>
  </nsp-page>
</template>

<script setup>
import { ref} from 'vue';
import OutletOptionTop from './PrdOptionTop.vue';
import OutletCard from './PrdCard.vue';
import OutletCardList from './PrdCardList.vue';

//Bread Crumb Data
const breadcrumb = ref({
  title: 'Special Deals',
  list: [{ name: 'Outlet' }, { name: 'Special Deals' }],
});

//product theme
const outletPrdTheme = ref(1);

//product title
const outletPrdTitle = ref({
  cate: 'Instant Discount',
  title: 'Big Screen, Bigger Savings -Up to 15% Off TVs!',
  startDate: '08/15/2025',
  endDate: '09/15/2025',
});

const prdCardType = ref('card'); // 카드형
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

//card list
const prdPriceUnit = ref('USD');
const cardLists = ref([
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,

    price1: '3,200.00',
    price2: '1,920.00',
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,

    price1: '3,200.00',
    price2: '1,920.00',
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,

    price1: '3,200.00',
    price2: '1,920.00',
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,

    price1: '3,200.00',
    price2: '1,920.00',
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,

    price1: '3,200.00',
    price2: '1,920.00',
  },
  {
    imgSrc: '/assets/images/sample/prd-card-thumb-no.jpg',
    description: '98" Neo QLED QN93F 4K Vision AI Smart TV (2025)',
    modelCode: 'QN55S95CAFXZA',
    sales: 100,
    qty: 200,

    price1: '3,200.00',
    price2: '1,920.00',
  },
]);
</script>

<style lang="scss">
@use "@/assets/scss/abstracts" as *;
/* ****
 * NAME : NSP-OUTLET PAGE CSS
 * DATE : 2025.06.30
 * AUTHOR : NSP-PUBLISH MEMBER
 **** */



/* **** PRODUCT LIST **** */
/* ** outlet top ** */
.outlet-deals-top {
  width: 1440px;
  padding: 20px 24px;
  margin: 0 auto;
  text-align: right;
  + .content {
    padding-top: 0 !important;
  }
}

.outlet-deals-select {
  @include flex($d:inline-flex, $ai:center, $gap: 16px);
  .label {
    font-size: 13px;
    font-weight: 600;
  }
  .nsp-select {
    width: 388px;
    .q-field__control {
      height: 36px;
    }
    input {
      font-size: 13px;
      font-weight: 600;
    }
  }
}

/* ** outlet title ** */
.outlet-deals-title {
  padding-bottom: 24px;
  .cate {
    margin-bottom: 8px;
    .span {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px; /* 125% */
      opacity: 0.99;
      font-family: "Samsung Sharp Sans";
    }
    &.type1 {
      .span {
        background: linear-gradient(90deg, #20BF6B 0%, #305ABD 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &.type2 {
      .span {
        background: linear-gradient(90deg, #EB3B5A 0%, #532C89 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &.type3 {
      .span {
        background: linear-gradient(90deg, #FA8231 0%, #532C89 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .tit {
    color:var(--Primary-color-Black);
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    font-family: "Samsung Sharp Sans";
  }

  .date {
  color: #1F1F1F;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 12px;
  }
}


/* ** outlet list top ** */
.deals-search-area {
  @include flex($jc: flex-start);
  padding: 20px 0;

  .prd-filterd-option {
    width: auto;
    margin-top: 0;

    .top-option-area {
      padding-top: 0;
      .list-type {
        gap: 16px;
      }
    }

    .list-type {
      .btn-ico {
        width: 24px;
        height: 24px;
        margin-left: 8px;
        border:1px solid red;
      }
    }
  }
}


/* ** outlet list ** */
.outlet-card-list {
  @include flex($jc: flex-start, $ai: normal, $gap: 16px);
  flex-wrap: wrap;
}


/* ** outlet card ** */
.outlet-card {
  border-radius: 8px;
  border: 1px solid #ddd;
  .card-in {
    @include flex($fd: column, $jc: flex-start);
    height: 100%;
    border-radius: 8px;
    border: 4px solid transparent;

  }
  .card-im {
    position: relative;
    z-index: 1;
    height: 196px;
    padding: 8px 8px 12px;
    overflow: hidden;
    cursor:pointer;
    img {
      width: 100%;
      max-height: 100%;
    }
    .im-bundle {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 2;
      .mark-plus {
        top: 50%;
        margin-top: -10px;
      }
      ul {
        @include flex($jc: flex-end, $gap: 4px);
        padding: 0 8px;
      }
      li {
        @include flex($jc: center, $ai:center);
        width: 68px;
        height: 68px;
        border-radius: 8px;
        border: 1px solid var(--Primary-color-Skyblue);
        background: var(--Primary-color-White);
        overflow: hidden;
        img {
          width: 100%;
          max-height: 100%;
        }
        &:last-child {
          border-color: var(--Primary-color-Black);
        }
      }
    }
  }
  .card-body {
    @include flex($fd: column, $jc: flex-start, $gap: 8px);
    padding:4px 12px 16px;
  }

  .card-info {
    margin-bottom: 8px;
    .desc {
      color: var(--Grayscale-6_75);
      font-size: 15px;
      height: 50px;
    }
    .model {
      font-size: 18px;
      font-weight: 600;
      margin-top: 4px;
    }
  }

  .card-price {
    .price-badge {
      margin-bottom: 4px;
      .text-badge {
        margin-right: 4px;
      }
      .badge {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        height: 28px;
        padding: 4px 8px;
      }
    }
    .price1 {
      color: #777;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-decoration-line: line-through;
    }
    .price2 {
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      em {
        font-weight: 600;
        line-height: 24px;
      }
    }
    .limited {
      color: #4B7BEC;
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      margin-top: 8px;
    }
    .price-info{
      @include flex($fd: column, $jc: flex-start, $ai:flex-start);
      .badge {
        margin-bottom: 4px;
      }
    }

    .bundle-price-area {
      position: relative;
      height: 98px;
      z-index: 1;
      padding-left: 10px;
      margin: 8px 0 16px;
      .mark-plus{
        top: 41px;
        left: 0;
      }
      .btn-ico {
        position: absolute;
        top: 41px;
        right: 12px;
        z-index: 3;
      }
      .bundle-price-ul {
        position: absolute;
        z-index: 2;
        width: 224px;
        height: 98px;
        border-radius: 8px;
        border: 1px solid #DDD;
        background-color: white;
        overflow: hidden;
        &.show {
          height: auto;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
        }
      }
      .bundle-price-item {
        @include flex($fd: column, $jc: flex-start, $ai:flex-start);
        height: 98px;
        padding: 8px 12px 8px 16px;

        .model {
          font-size: 15px;
          font-weight: 600;
          line-height: 16px;
          margin-bottom: 4px;
        }
        .price2 {
          line-height: 20px;
        }
        + .bundle-price-item  {
          border-top: 1px solid #ddd;
        }
      }
    }
  }
  .card-btn {
    @include flex($gap: 8px);
    flex-wrap: wrap;
    margin-top: auto;
    .nsp-counter {
      flex: 1 0 100% !important
    }
    > .q-btn {
      width: calc(50% - 4px);
    }
  }

  .mark-plus {
    @include flex($jc:center, $ai:center);
    position: absolute;
    z-index: 3;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #000;
    // @extend .ico-plus_wh_b;
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:hover {
    .card-in {
      border-color: #ddd;
    }
  }
}

.outlet-card-view {
  width: 265.6px;
  height: 498px;
  &.type-bundle {
    height:623px;
  }
}

.outlet-card-img {

}

.outlet-card-list {

}


/* **** OUTLET DETAIL **** */
.outlet-detail-body {
  @include flex($d: flex, $fd:column, $jc: flex-start, $ai: normal);
  gap: 80px;

  .prd-detail-info__title {
    .top-badge-area {
      .badge {
        @include flex($d: inline-flex, $ai: center);
        font-size: 15px;
        font-weight: 700;
        height: 30px;
        padding: 0 12px;
      }
      margin-bottom: 4px;
    }
  }

  .prd-detail-info__bottom {
    .price1 {
      color: #777;
      font-weight: 400;
      text-decoration: line-through;
    }
    .price2 {
      font-weight: 600;
      em {
        font-weight: 600;
      }
    }

    .price-info {
      @include flex($fd:column, $jc: flex-end, $ai: flex-end);
      .badge {
        font-size: 14px;
        line-height: 20px;
        height: 28px;
        padding: 4px 8px;
        margin-bottom: 4px;
      }
      .price1 {
        font-size: 14px;
      }
      .price2 {
        font-size: 20px;
        line-height: 24px;
      }
    }

    .prd-price-area {
      margin-bottom: 16px;
    }

    .bundle-price-area {
      margin-bottom: 32px;
      .bundle-item {
        position: relative;
        z-index: 1;
        @include flex($gap: 8px);
        height: 116px;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--form-border-color);
        cursor: pointer;
        .q-radio {
          .q-radio__label {
            padding: 0;
          }
        }
        .im {
          @include flex($d: inline-flex, $ai:center,);
          width: 74px;
          img {
            width: 100%;
          }
        }
        .text {
          @include flex($fd: column, $jc:center, $ai:flex-start,);
          width: 300px;
          .badge {
            color:#FA8231;
            font-size: 12px;
            padding: 2px 2px 3px 2px;
            border-radius: 0;
            background: var(--Secondary-color-acd_bg) !important;
            + .tit {
              margin-top: 8px;
            }
          }
          .tit {
            font-size: 12px;
            font-weight: 500;
            @include ellipsis;
            width: 100%;
          }
          .txt {
            font-size: 12px;
            color: var(--Grayscale-6_75);
            @include ellipsis;
            width: 100%;
          }
        }
        .price-info {
          flex: 1;
          .price1 {
            font-size: 12px;
            line-height: 16px;
          }
        }
        .ico-chevron-right_b {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
        }
        + .bundle-price-ul {
          margin-top: 16px;
        }
      }

      .bundle-price-ul {
        position: relative;
        z-index: 1;
        height: 152px;
        dt {
          @include flex($jc:space-between);
          font-size: 18px;
          font-weight: 600;
          line-height: 24px;
          margin-bottom: 12px;
        }
        dd {
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 118px;
          margin: 0;
          border-radius: 8px;
          border: 1px solid var(--form-border-color);
          background-color: var(--Primary-color-White);
          overflow: hidden;
          .bundle-item {
            border: 0;
            border-radius: 0;
            &:not(:first-child) {
              border-top: 1px solid var(--form-border-color);
            }
          }
          &.show {
            height: auto;
            max-height: 580px;
            overflow-y: auto;
            @include scrollbar;
          }
        }
      }
    }

    .counter-area {
      height: auto;
      .price-badge {
        @include flex($jc: flex-end, $ai: center, $gap: 4px);
        margin-bottom: 4px;
        .badge {
          font-size: 16px;
          line-height: 20px;
          height: 28px;
          padding: 4px 8px;
        }
      }
      .price1 {
        font-size: 18px;
      }
      .price2 {
        font-size: 32px;
      }
    }
  }


  .prd-detail-cnt {
    .prd-tabs-menu {
      &.is-scroll {
        .prd-detail-tabs {

        }
      }
    }
  }
}




/* **** PROMOTION CONDITION REGISTRATION	**** */
.outlet-promo-image__selection {
  @include flex($gap: 24px);
  padding-left: 12px;
  > li {
    width: 170px;
    .im {
      @include flex($jc:flex-end);
      width: 170px;
      height: 80px;
      margin-top: 8px;
      border-radius: 8px;
      border: 1px solid #BBB;
      background-color:var(--Primary-color-White);
      overflow: hidden;
    }
    img {
      min-width: 100%;
      width: auto;
      height: 100%;
    }
  }
}

.outlet-promo-upload-box {
  padding: 0 12px;
  margin-top: 8px;
}


/* **** POPUP **** */
.pop-outlet-bundle {
  @include flex($gap: 40px);
  .im {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    background-color: #F4F5F8;
    img {
      width: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .text {
    flex: 1;
    .tit {
      color: var(--Primary-color-Black);
      font-size: 22px;
      font-weight: 600;
      line-height: 36px;
    }
    .txt {
      color: #757575;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 8px;
    }
  }
}

.pop-outlet-upload-preview {
  margin-bottom: 24px;
  .preview-tit {
    font-weight: 600;
    margin-bottom: 8px;
  }

  .preview-ul {
    @include flex($gap: 16px );
    flex-wrap: wrap;
    > li {
      width: 240px;
      height: 180px;
      text-align: center;
      background-color: #F5F5F5;
      img {
        width: auto;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
