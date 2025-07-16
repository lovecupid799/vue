<template>
  <div class="prd-detail-top">
    <!-- 왼쪽 영역 : 이미지 -->
    <div class="prd-detail-thumb">
      <!-- 썸네일 리스트 -->
      <q-carousel
        v-model="slide2"
        v-bind="thumSlideOption"
        class="thumb-slide">
        <q-carousel-slide :name="1">
          <ul class="thumb-ul">
            <li class="item">
              <!-- 개발 : selected class : is-active -->
              <nsp-btn class="is-active"><img src="@/assets/images/sample/thumb-large.jpg" /></nsp-btn>
            </li>
            <li class="item">
              <nsp-btn><img src="@/assets/images/sample/thumb-large.jpg" /></nsp-btn>
            </li>
            <li class="item">
              <nsp-btn><img src="@/assets/images/sample/thumb-large.jpg" /></nsp-btn>
            </li>
            <li class="item">
              <nsp-btn><img src="@/assets/images/sample/thumb-large.jpg" /></nsp-btn>
            </li>
          </ul>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <ul class="thumb-ul">
            <li class="item">
              <img src="@/assets/images/sample/thumb-large.jpg" />
            </li>
            <li class="item">
              <img src="@/assets/images/sample/thumb-large.jpg" />
            </li>
            <li class="item">
              <img src="@/assets/images/sample/thumb-large.jpg" />
            </li>
            <li class="item">
              <img src="@/assets/images/sample/thumb-large.jpg" />
            </li>
          </ul>
        </q-carousel-slide>
      </q-carousel>
      <!-- //썸네일 리스트 -->

      <!-- 썸네일 선택된 이미지 : 있을때 노출
      <div class="thumb-large">
        <img src="@/assets/images/sample/thumb-large.jpg" />
      </div>
      //썸네일 선택된 이미지 : 있을때 노출 -->

      <!-- 썸네일 선택된 이미지 없을 때 노출 -->
      <div class="thumb-large">
        <NoImage :outline="true" />
      </div>
      <!-- //썸네일 선택된 이미지 없을 때 노출 -->
    </div>
    <!-- //왼쪽 영역 : 이미지 -->

    <!-- 오른쪽 영역 : 정보 -->
    <div class="prd-detail-info">
      <!-- prd info title -->
      <div class="prd-detail-info__title">
        <!-- top btn area -->
        <div class="top-badge-area">
          <sdl-badge
            primary
            class="type-rect color7"
            >Buy More, Save More on TVs — Up to 30% Off!
          </sdl-badge>
        </div>
        <!--// top btn area -->

        <!-- prd tit -->
        <div class="prd-title-wrap">
          <div class="prd-title">
            <span>RS27T5561SR/AA</span>
            <div class="prd-title__desc">
              <span class="prd-title__customer-model-code">BRF365200AP/AA</span>
            </div>
          </div>
          <!-- shipping info -->
          <div class="shipping-info">
            <span class="text-badge color7">Limited Stock: 124/200</span>
          </div>
          <!--// shipping info -->
          <div class="prd-title-dec">
            <div class="info">65" Neo QLED QN93F 4K Vision AI Smart TV (2025)</div>
          </div>
        </div>
        <!--// prd tit -->
      </div>
      <!--// prd info title  -->

      <!-- prd info list  -->
      <div class="prd-detail-info__summary">
        <dl class="dl">
          <dt class="dt">Product Dimensions</dt>
          <dd class="dd">35.875" (W) x 73" (H) x 28.75" (D)</dd>
        </dl>
        <dl class="dl">
          <dt class="dt">Product Features</dt>
          <dd class="dd">Wi-Fi Connectivity</dd>
          <dd class="dd">Visionary Mapping™</dd>
          <dd class="dd">Ice your way, cubed or Ice Bites™</dd>
        </dl>
        <dl class="dl">
          <dt class="dt">
            Documents
            <down-load-btn />
          </dt>
        </dl>
      </div>
      <!--// prd info list  -->

      <!--  bottom -->
      <div class="prd-detail-info__bottom">
        <template v-if="detailType === 3">
          <div class="prd-price-area">
            <div class="price-info">
              <sdl-badge
                primary
                class="type-rect color2"
                >40% Off</sdl-badge
              >
              <span class="price1"><em>USD</em> 3,200.00</span>
              <span class="price2"><em>USD</em> 1,920.00</span>
            </div>
          </div>

          <div class="bundle-price-area">
            <!-- 단일 -->
            <bundle-item
              :bundle-type="'single'"
              :bundle-img="bundle1.imgSrc"
              :bundle-code="bundle1.modelCode"
              :bundle-desc="bundle1.description"
              :bundle-dc="bundle1.dc"
              :bundle-unit="bundle1.unit"
              :bundle-price1="bundle1.price1"
              :bundle-price2="bundle1.price2" />
            <!-- //단일 -->
            <!-- 번들 복수항목일 때 -->
            <dl class="bundle-price-ul">
              <dt>
                <span>Available Bundle Items</span>
                <nsp-btn
                  class="btn-ico"
                  @click="bundleToggle">
                  <span
                    class="i-24"
                    :class="bundleToggleValue ? 'ico-chevron-up' : 'ico-chevron-down'"></span>
                </nsp-btn>
              </dt>
              <dd :class="{ show: bundleToggleValue }">
                <bundle-item
                  v-for="bundle in bundleLists"
                  v-model="bundleChecked"
                  :bundle-img="bundle.imgSrc"
                  :bundle-code="bundle.modelCode"
                  :bundle-desc="bundle.description"
                  :bundle-dc="bundle.dc"
                  :bundle-unit="bundle.unit"
                  :bundle-price1="bundle.price1"
                  :bundle-price2="bundle.price2"
                  :key="bundle.modelCode" />
              </dd>
            </dl>
            <!-- //번들 복수항목일 때 -->
          </div>
        </template>
        <div class="counter-area">
          <nsp-counter />
          <div class="price-area">
            <p class="price-badge">
              <span
                class="text-badge color2"
                v-if="detailType === 2"
                >Buy10+</span
              >
              <sdl-badge
                v-if="detailType === 1 || detailType === 2"
                primary
                class="type-rect color2"
                >30% Off</sdl-badge
              >
            </p>
            <span class="price1"><em>USD</em> 3,200.00</span>
            <span class="price2"><em>USD</em> 1,920.00</span>
          </div>
        </div>
        <div class="btn-area">
          <nsp-btn class="btn-fill">Place order</nsp-btn>
        </div>
      </div>
      <!--// bottom -->
    </div>
    <!-- //오른쪽 영역 : 정보 -->
  </div>
</template>

<script setup>
import NoImage from '@/components-pub/common/control/noImage/NoImage.vue';
import DownLoadBtn from './DownLoadBtn.vue';
import BundleItem from './OutletBundleItem.vue';

const props = defineProps({
  detailType: { type: [String, Number], default: '' },
});

const slide2 = ref(1);

const thumSlideOption = ref({
  vertical: true,
  transitionPrev: 'slide-down',
  transitionNext: 'slide-up',
  swipeable: true,
  animated: true,
  controlColor: 'white',
  navigationIcon: 'radio_button_unchecked',
  navigation: false,
  padding: true,
  arrows: true,
});

//bundle toggle
const bundleToggleValue = ref(false);
const bundleToggle = () => {
  bundleToggleValue.value = !bundleToggleValue.value;
};

const bundle1 = ref({ imgSrc: '/assets/images/sample/im-outlet-sample-bundle1.png', dc: '30', unit: 'USD', price1: '399.99', price2: '299.99', modelCode: 'RS27T5561SR/AA', description: 'Music Frame Dolby Atmos Smart Speaker' });

const bundleLists = ref([
  { imgSrc: '/assets/images/sample/im-outlet-sample-bundle1.png', dc: '25', unit: 'USD', price1: '399.99', price2: '299.99', modelCode: 'RS27T5561SR/AA', description: 'Music Frame Dolby Atmos Smart Speaker' },
  { imgSrc: '/assets/images/sample/im-outlet-sample-bundle1.png', dc: '25', unit: 'USD', price1: '399.99', price2: '299.99', modelCode: 'RS27T5561SR/BB', description: 'Music Frame Dolby Atmos Smart Speaker' },
  { imgSrc: '/assets/images/sample/im-outlet-sample-bundle1.png', dc: '25', unit: 'USD', price1: '399.99', price2: '299.99', modelCode: 'RS27T4461SR/CC', description: 'Music Frame Dolby Atmos Smart Speaker' },
]);
const bundleChecked = ref('');
</script>
