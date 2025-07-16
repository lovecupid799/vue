<template>
  <div class="prd-detail-cnt">
    <div
      class="prd-tabs-menu"
      :class="{ 'is-scroll': _isVisible === true }">
      <div class="prd-detail-tabs">
        <div class="tabs-in">
          <div class="left-area">
            <div class="prd-dec">
              Counter depth refrigerators are space-efficient, provide more maneuverability in a narrow kitchen, and will blend seamlessly into your kitchen design. Counter depth refrigerators are space-efficient, provide more
              maneuverability in a narrow kitchen, and will blend seamlessly into your kitchen design.
            </div>
            <!-- shipping info -->
            <div class="shipping-info">
              <sdl-badge
                primary
                class="type-rect color7"
                >Buy More, Save More on TVs — Up to 30% Off!
              </sdl-badge>
            </div>
            <!--// shipping info -->

            <!-- prd tit -->
            <div class="prd-title-wrap">
              <div class="prd-title">RS27T5561SR/AA</div>
              <span class="sub-text">BRF365200AP</span>
            </div>
            <!--// prd tit -->
          </div>
          <div class="right-area">
            <!-- price -->
            <div class="price-area">
              <span class="price-normal"><em>USD</em> 92,599.44</span>
              <span class="price"><em>USD</em> 92,599.44</span>
            </div>
            <!-- price -->
            <div class="counter-area">
              <nsp-counter />
            </div>
            <div class="btn-area">
              <nsp-btn
                class="btn-fill"
                :disable="false"
                >Place order
              </nsp-btn>
            </div>
          </div>
        </div>
        <sdl-tab
          class="tab-line"
          :list="PrdInfoTabs"
          @tab-click="tabClick">
        </sdl-tab>
      </div>
    </div>

    <div class="prd-detail-in">
      <!-- anchor : Features -->
      <div
        class="prd-detail-sect"
        id="anchor1">
        <div class="sec-title">
          <span>Features</span>
        </div>
        <ul class="in-features-list">
          <li>
            <div class="tit">High Pressure Washing Power, Efficient Cleaning</div>
            <div class="txt">With customizable door panels, choose from 11 colors and two finishes to create a fridge that fits your style.</div>
          </li>
          <li>
            <div class="tit">ENERGY STARÂ® 2017 Emerging Technology Award</div>
            <div class="txt">A refrigerator that blends beautifully into the kitchen.</div>
          </li>
          <li>
            <div class="tit">Enjoy a Quiet Home</div>
            <div class="txt">Get ice in two ways: cubed or Ice Bites™.</div>
          </li>
          <li>
            <div class="tit">The Power Of SmartThings</div>
            <div class="txt">Provides quick and easy access to refreshingly cold water in two ways.</div>
          </li>
          <li>
            <div class="tit">Auto Reorder Your Detergent</div>
            <div class="txt">Adjustable shelves let you store tall items with ease.</div>
          </li>
          <li>
            <div class="tit">Certified Efficiency</div>
            <div class="txt">Customize your lower-right storage space to be a refrigerator or freezer with five adjustable temperature settings.</div>
          </li>
          <li>
            <div class="tit">All Shine</div>
            <div class="txt">With customizable door panels, choose from 11 colors and two finishes to create a fridge that fits your style.</div>
          </li>
          <li>
            <div class="tit">Digital Leak Sensor</div>
            <div class="txt">From helpful notifications to Triple Cooling, there's more to love in the new Bespoke 4-Door Flex™ Refrigerator.</div>
          </li>
          <li>
            <div class="tit">Smart Control</div>
            <div class="txt">Yes</div>
          </li>
          <li>
            <div class="tit">3rd Rack</div>
            <div class="txt">Retains cold air in the fridge, even while your fridge door is open.</div>
          </li>
          <li>
            <div class="tit">Chef Collection</div>
            <div class="txt">Provides easy access controls compliant with the standards of the Americans with Disabilities Act (ADA).</div>
          </li>
          <li>
            <div class="tit">Zone Booster™</div>
            <div class="txt">10-year warranty on the compressor.</div>
          </li>
          <li>
            <div class="tit">Express 60</div>
            <div class="txt">Bespoke 4-Door Flex™ Refrigerators have unique height and depth dimensions. Measure your installation clearances and view specifications to ensure it will fit your space.</div>
          </li>
          <li>
            <div class="tit">FlexTray™</div>
            <div class="txt">Counter depth refrigerators are space-efficient, provide more maneuverability in a narrow kitchen, and will blend seamlessly into your kitchen design.</div>
          </li>
          <li>
            <div class="tit">AutoRelease™ Door Drying</div>
            <div class="txt">With Wi-Fi-enabled capabilities, SmartThings will alert you when the door is left open, if there is an unexpected change in temperature, or when it's time to change the water filter.</div>
          </li>
        </ul>
      </div>
      <!--// anchor : Features -->

      <!-- anchor : Specifications -->
      <div
        class="prd-detail-sect"
        id="anchor2">
        <div class="sec-title">
          <span>Specifications</span>
        </div>

        <div class="in-spec">
          <h4 class="h-tit3">Key Features</h4>
          <!-- table -->
          <table class="table-hori type1">
            <colgroup>
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">Bespoke</th>
                <td>Yes</td>
                <th scope="row">Metal Cooling</th>
                <td>Yes</td>
                <th scope="row">Cool Select Pantry with Temperature Control</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Additional Filtered Ice Maker in the Freezer</th>
                <td>Yes</td>
                <th scope="row">Surround Air Flow</th>
                <td>Yes</td>
                <th scope="row">Ice / Water Dispenser</th>
                <td>Water Only</td>
              </tr>
              <tr>
                <th scope="row">Cooling System</th>
                <td>Chef Triple Cooling System</td>
                <th scope="row">Internal Filtered Water and Ice Dispenser</th>
                <td>Yes</td>
                <th scope="row">Auto Pull Outâ„¢ Upper Freezer Drawer</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">10 Years</th>
                <td>Value: 10 Years on Parts (5 Years on Labor) on Digital Inverter Compressor</td>
                <th scope="row">Fridge-Side Convertible Compartment Capacity</th>
                <td>Yes</td>
                <th scope="row">Product Dimensions without Hinges and Door</th>
                <td>36 W x 79 7/16" H x 22 1/4" D"</td>
              </tr>
            </tbody>
          </table>
          <!-- //table -->
        </div>

        <div class="in-spec">
          <h4 class="h-tit3">Standard Features</h4>
          <!-- table -->
          <table class="table-hori type1">
            <colgroup>
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
              <col style="width: 16%" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">Bespoke</th>
                <td>Yes</td>
                <th scope="row">Metal Cooling</th>
                <td>Yes</td>
                <th scope="row">Cool Select Pantry with Temperature Control</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Additional Filtered Ice Maker in the Freezer</th>
                <td>Yes</td>
                <th scope="row">Surround Air Flow</th>
                <td>Yes</td>
                <th scope="row">Ice / Water Dispenser</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Cooling System</th>
                <td>Chef Triple Cooling System</td>
                <th scope="row">Internal Filtered Water and Ice Dispenser</th>
                <td>Yes</td>
                <th scope="row">Auto Pull Outâ„¢ Upper Freezer Drawer</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">10 Years</th>
                <td>Value: 10 Years on Parts (5 Years on Labor) on Digital Inverter Compressor</td>
                <th scope="row">Fridge-Side Convertible Compartment Capacity</th>
                <td>Yes</td>
                <th scope="row">Product Dimensions without Hinges and Door</th>
                <td>36 W x 79 7/16" H x 22 1/4" D"</td>
              </tr>
            </tbody>
          </table>
          <!-- //table -->
        </div>
      </div>
      <!--// anchor : Specifications -->

      <!-- anchor : Documents -->
      <div
        class="prd-detail-sect"
        id="anchor3">
        <div class="sec-title">
          <span>Documents</span>
        </div>
        <div class="in-docum c-box gray">
          <ul class="in-docum-list">
            <li>
              <span class="tit">Spec Sheet</span>
              <div class="item">
                <span class="file-name">Spec_Sheet_1011파일명이 길 경우 처리.pdf</span>
                <nsp-btn class="btn-txt">Download<span class="ico-download_aqua_b i-12"></span></nsp-btn>
              </div>
            </li>
            <li>
              <span class="tit">Installation Instructions</span>
              <div class="item">
                <span class="file-name">Instructions_1011.pdf</span>
                <nsp-btn class="btn-txt">Download<span class="ico-download_aqua_b i-12"></span></nsp-btn>
              </div>
            </li>
            <li>
              <span class="tit">Owner' Manual</span>
              <div class="item">
                <span class="file-name">Manual_1011.pdf</span>
                <nsp-btn class="btn-txt">Download<span class="ico-download_aqua_b i-12"></span></nsp-btn>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--// anchor : Documents -->

      <!-- anchor : Related -->
      <div
        class="prd-detail-sect"
        id="anchor4">
        <div class="sec-title">
          <span>Related Product</span>
        </div>

        <!-- 썸네일 리스트 -->
        <q-carousel
          v-model="slide1"
          v-bind="relatSlideOption"
          class="prd-detail-related-slide">
          <q-carousel-slide :name="1">
            <ul class="thumb-ul">
              <li
                class="item"
                v-for="(good, index) in goodsSamples"
                :key="index">
                <div
                  class="nsp-card-prd"
                  :class="[{ on: good.isActive === true }]"
                  @mouseover="good.isActive = true"
                  @mouseleave="good.isActive = false">
                  <template v-if="good.img !== null">
                    <a
                      href="#"
                      class="thum">
                      <img :src="`/assets/images/sample/${good.img}`" />
                    </a>
                  </template>
                  <template v-else>
                    <a
                      href="#"
                      class="thum no">
                      <img src="/assets/images/sample/coming-soon-ha.png" />
                    </a>
                  </template>
                  <div class="card-in">
                    <div class="title-wrap">
                      <div class="title">
                        <a href="#">{{ good.text }}</a>
                      </div>
                      <div class="text">
                        <p class="txt1">{{ good.code1 }}</p>
                        <!-- <p class="txt2">{{ good.code2 }}</p> -->
                      </div>
                    </div>
                    <div class="counter-area">
                      <nsp-counter />
                      <div class="price-area">
                        <span class="price"><em>£</em> 92,599.44</span>
                        <span class="price-sm">(RRP EUR 1,700.00)</span>
                      </div>
                    </div>
                    <div class="btn-area">
                      <nsp-btn
                        class="btn-fill"
                        :disable="false"
                        >Add to Cart
                      </nsp-btn>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </q-carousel-slide>
          <q-carousel-slide :name="2">
            <ul class="thumb-ul">
              <li
                class="item"
                v-for="(good, index) in goodsSamples"
                :key="index">
                <div
                  class="nsp-card-prd"
                  :class="[{ on: good.isActive === true }]"
                  @mouseover="good.isActive = true"
                  @mouseleave="good.isActive = false">
                  <template v-if="good.img !== null">
                    <a
                      href="#"
                      class="thum">
                      <img :src="`/assets/images/sample/${good.img}`" />
                    </a>
                  </template>
                  <template v-else>
                    <a
                      href="#"
                      class="thum no">
                      <img src="/assets/images/sample/coming-soon-ha.png" />
                    </a>
                  </template>

                  <div class="card-in">
                    <div class="title-wrap">
                      <div class="title">
                        <a href="#">{{ good.text }}</a>
                      </div>
                      <div class="text">
                        <p class="txt1">{{ good.code1 }}</p>
                        <!-- <p class="txt2">{{ good.code2 }}</p> -->
                      </div>
                    </div>
                    <div class="counter-area">
                      <nsp-counter />
                      <div class="price-area">
                        <span class="price"><em>£</em> 92,599.44</span>
                        <span class="price-sm">(RRP EUR 1,700.00)</span>
                      </div>
                    </div>
                    <div class="btn-area">
                      <nsp-btn
                        class="btn-fill"
                        :disable="false"
                        >Add to Cart
                      </nsp-btn>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </q-carousel-slide>
        </q-carousel>
        <!-- //썸네일 리스트 -->
      </div>
      <!--// anchor : Related -->
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, computed } from 'vue';
import DownLoadBtn from './DownLoadBtn.vue';
import required from '@/validate/rules/required';

//slide
const slide1 = ref(1);
const relatSlideOption = ref({
  vertical: false,
  transitionPrev: 'slide-right',
  transitionNext: 'slide-left',
  swipeable: true,
  animated: true,
  controlColor: 'white',
  navigationIcon: 'radio_button_unchecked',
  navigation: false,
  padding: true,
  arrows: true,
});

//탭 메뉴
const PrdInfoTabs = [
  {
    name: 'Features',
    isActive: true,
  },
  { name: 'Specifications' },
  { name: 'Documents' },
  { name: 'Related Product' },
];

async function tabClick(idx) {
  const $target = `#anchor${idx + 1}`;
  const _secTitH = document.querySelector('.sec-title').offsetHeight;
  const _offset = document.querySelector($target).offsetTop - _secTitH - 5;
  window.scrollTo({ top: _offset, left: 0, behavior: 'smooth' });
}

const _isVisible = ref(false);

//스크롤 이벤트
const scrollEvents = () => {
  const $tab = document.querySelector('.prd-tabs-menu');
  const _tabOffset = $tab.offsetTop;
  const _isScrollValue = window.scrollY;

  _isScrollValue > _tabOffset + 140 ? (_isVisible.value = true) : _isScrollValue < _tabOffset ? (_isVisible.value = false) : '';
};

onMounted(() => {
  window.addEventListener('scroll', scrollEvents, true);
});

onBeforeMount(() => {
  window.removeEventListener('scroll', scrollEvents);
});

//상품 리스트 샘플
const goodsSamples = ref([
  {
    id: 1,
    num: 1,
    img: null,
    text: 'Bespoke 4-Door Flex™ Refrigerator (29 cu. ft.) with Beverage Center™ with Customizable Door Panel Colors',
    code1: 'RS27T5561SR/AA',
    code2: 'BRF365200AP/AA',
    price: '92,599.44',
    isActive: false,
  },
  {
    id: 2,
    num: 1,
    img: 'sample-thum_ex2.jpg',
    text: 'Bespoke 4-Door Flex™ Refrigerator (29 cu. ft.) with Beverage Center™ with Customizable Door Panel Colors',
    code1: 'RS27T5561SR/AA',
    code2: 'BRF365200AP/AA',
    price: '92,599.44',
    isActive: false,
  },
  {
    id: 3,
    num: 1,
    img: 'sample-thum_ex3.jpg',
    text: 'Bespoke 4-Door Flex™ Refrigerator (29 cu. ft.) with Beverage Center™ with Customizable Door Panel Colors',
    code1: 'RS27T5561SR/AA',
    code2: 'BRF365200AP/AA',
    price: '92,599.44',
    isActive: false,
  },
  {
    id: 4,
    num: 1,
    img: 'sample-thum_ex1.jpg',
    text: 'Bespoke 4-Door Flex™ Refrigerator (29 cu. ft.) with Beverage Center™ with Customizable Door Panel Colors',
    code1: 'RS27T5561SR/AA',
    code2: 'BRF365200AP/AA',
    price: '92,599.44',
    isActive: false,
  },
  {
    id: 5,
    num: 1,
    img: 'sample-thum_ex2.jpg',
    text: 'Bespoke 4-Door Flex™ Refrigerator (29 cu. ft.) with Beverage Center™ with Customizable Door Panel Colors',
    code1: 'RS27T5561SR/AA',
    code2: 'BRF365200AP/AA',
    price: '92,599.44',
    isActive: false,
  },
]);
</script>
