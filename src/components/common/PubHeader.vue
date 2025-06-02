<template>
  <div id="header">
    <div class="inner">
      <!-- gnb etc -->
      <div class="head-top">
        <div class="head-left">
          <router-link :to="{ name: '' }">
            <h1 class="logo">
              <!-- <img
                src="@/assets/images/common/head-logo.png"
                alt="SALES PORTAL" /> -->
              <!-- OMS LOGO : <img  src="@/assets/images/common/head-oms-logo.png" alt="SALES PORTAL" /> -->
            </h1>
          </router-link>
          <!-- 법인사용자, Multi sold to를 가지고 있는 거래선이 들어왔을때 노출 -->
          <div class="head-select">
            <nsp-select
              class="nsp-select"
              :options="[{ 항목: 1 }, { 항목: 2 }]"
              first-option="all" />
          </div>
          <!-- //법인사용자, Multi sold to를 가지고 있는 거래선이 들어왔을때 노출 -->
        </div>

        <div class="head-etc">
          <nsp-input
            class="nsp-input-search"
            :maxlength="11"
            :placeholder="'search'">
            <template #append>
              <q-icon>
                <i class="ico-search_b i-16" />
              </q-icon>
            </template>
          </nsp-input>

          <div class="head-btn">
            <!-- cart -->
            <div class="btn-cart-wrap">
              <nsp-btn class="btn-cart"
                ><span class="ico"></span>
                <sdl-badge
                  secondary
                  number
                  class="type-circle color1"
                  >0</sdl-badge
                >
              </nsp-btn>
            </div>
            <!-- //cart -->

            <!-- favorite -->
            <div class="btn-like-wrap">
              <nsp-btn
                class="btn-like"
                @click="favoToggleAct"
                ><span class="ico"></span
              ></nsp-btn>
              <div
                v-if="favoToggle"
                class="head-etc-layer">
                <div class="l-in">
                  <div class="l-tit">
                    <h2 class="h-tit2">Favorite<span class="num">5</span></h2>
                  </div>
                  <div class="l-body">
                    <div class="l-list-favo">
                      <nsp-radio
                        v-for="(item, i) of ['Favorite Name 1', 'Favorite Name 2', 'Favorite Name 3', 'Favorite Name 4', 'Favorite Name 5']"
                        :key="i"
                        v-model="favoRadio"
                        :label="item"
                        :val="item" />
                    </div>
                    <!-- 개발 : 
                     리스트가 없을 때 노출
                    <div class="l-no-data">
                      <p>There is no Favorite Order</p>
                    </div>
                     -->
                  </div>
                  <div class="l-btn">
                    <nsp-btn class="btn-fill sm">Add to Cart</nsp-btn>
                    <nsp-btn class="btn-outline sm">Manage Favorite</nsp-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //favorite -->

            <!-- my -->
            <div class="btn-my-wrap">
              <nsp-btn
                class="btn-my"
                @click="myToggleAct"
                ><span class="ico"></span
              ></nsp-btn>
              <div
                v-if="myToggle"
                class="head-etc-layer">
                <div class="l-in">
                  <div class="l-tit">
                    <h2 class="h-tit2">My Account</h2>
                  </div>
                  <div class="l-body">
                    <ul class="l-list">
                      <li>
                        <router-link :to="{ name: 'AD-U-0054M01' }">My Profile</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="l-btn">
                    <nsp-btn class="btn-fill sm">Logout</nsp-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //my -->

            <!-- alarm -->
            <div class="btn-alarm-wrap">
              <nsp-btn
                class="btn-alarm"
                @click="alarmToggleAct"
                ><span class="ico"></span>
                <sdl-badge
                  secondary
                  number
                  class="type-circle color1"
                  >4</sdl-badge
                >
              </nsp-btn>
              <div
                v-if="alarmToggle"
                class="head-alarm-layer">
                <div class="alarm-in">
                  <div class="alarm-tit">
                    <h2 class="h-tit2">Notifications<span class="num">125</span></h2>
                    <nsp-btn class="btn-txt underline"
                      >Mark all as read
                      <span class="ico-done i-12"></span>
                    </nsp-btn>
                  </div>
                  <SdlTab
                    badge-count
                    class="tab-line"
                    :list="alarmTabs">
                    <template #sdl-tab-1>
                      <div class="tab-cnt">
                        <ul class="alarm-list">
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >ORDER</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">Yesterday</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">SO No. 1200977924</strong> has been <strong class="text-bold">order created</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <!-- 개발 : 확인한 알람은 클래스 "alarm-read" 추가 -->
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item alarm-read">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >FINANCE</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">4 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">DDR No. 8472638492</strong> has been <strong class="text-bold">DDR confirmation needed</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >CLAIM</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">5 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">SO No. 1200977924</strong> has been <strong class="text-bold">order created</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >RETURN</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">5 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">SO No. 1200977924</strong> has been <strong class="text-bold">return request approved</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >Q&A</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">9 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">Request No. 84768492</strong> has been <strong class="text-bold">answer added</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >ORDER</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">11 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">SO No. 1200977924</strong> has been <strong class="text-bold">order ETA changed</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >FINANCE</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">12 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">DDR No. 8472638492</strong> has been <strong class="text-bold">remittance advice requested</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >ORDER</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">14 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">SO No. 1200977924</strong> has been <strong class="text-bold">shipped</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </template>
                    <template #sdl-tab-2>
                      <div class="tab-cnt">
                        <ul class="alarm-list">
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >ORDER</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">Yesterday</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">SO No. 1200977924</strong> has been <strong class="text-bold">order created</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                          <li class="alarm-li">
                            <router-link
                              :to="{ name: '' }"
                              class="alarm-item">
                              <div class="item-head">
                                <div class="left">
                                  <sdl-badge
                                    primary
                                    class="type-rect color5"
                                    >FINANCE</sdl-badge
                                  >
                                </div>
                                <div class="right">
                                  <span class="r-date">4 days ago</span>
                                  <nsp-btn class="btn-ico r-del">
                                    <span class="ico-circle-delete_red_b i-16"> </span>
                                  </nsp-btn>
                                </div>
                              </div>
                              <div class="item-body"><strong class="text-bold">DDR No. 8472638492</strong> has been <strong class="text-bold">DDR confirmation needed</strong> on <strong class="text-bold">10/14/2024</strong></div>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </template>
                    <template #sdl-tab-3>
                      <div class="tab-cnt">
                        <div class="alarm-no">
                          <p>No Notification to Check</p>
                        </div>
                      </div>
                    </template>
                    <template #sdl-tab-4>
                      <div class="tab-cnt">
                        <div class="alarm-no">
                          <p>No Notification to Check</p>
                        </div>
                      </div>
                    </template>
                    <template #sdl-tab-5>
                      <div class="tab-cnt">
                        <div class="alarm-no">
                          <p>No Notification to Check</p>
                        </div>
                      </div>
                    </template>
                  </SdlTab>
                </div>
              </div>
            </div>
            <!-- //alarm -->
          </div>
        </div>
      </div>
      <!-- //gnb etc -->

      <!-- gnbWrap -->
      <nav class="gnbWrap">
        <ul class="gnb-nav">
          <li
            class="menu-item"
            v-for="(menu, index) in rootMenus"
            :key="menu.menuId"
            :index="menu.menuId">
            <button
              type="button"
              class="menu-1depth"
              :class="{ on: menuSelectedIndex === index && menu.isNavOpen }"
              @click="navClick(menu, index, rootMenus)">
              {{ getLabel(menu) }}
            </button>
            <div
              class="sub-nav-wrap"
              v-if="menuSelectedIndex === index && menu.isNavOpen && getSubmenu(menu.menuId).length">
              <ul class="sub-nav">
                <li
                  class="sub-item"
                  v-for="submenu in getSubmenu(menu.menuId)"
                  :key="submenu.menuId"
                  :index="submenu.menuId">
                  <template v-if="getSubmenu(submenu.menuId).length > 0">
                    <h3 class="menu-2depth">{{ getLabel(submenu) }}</h3>
                    <ul class="sub-list">
                      <li
                        class="li"
                        v-for="item in getSubmenu(submenu.menuId)"
                        :key="item.menuId">
                        <sdl-checkbox
                          inline
                          class="form-check-star" /><a href="javascript:">{{ getLabel(item) }}</a>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <a
                      href="#"
                      class="menu-2depth"
                      >{{ getLabel(submenu) }}</a
                    >
                  </template>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <!-- //gnbWrap -->
    </div>
  </div>
  <div
    v-if="menuSelectedIndex !== null && dim"
    class="gnb-dim"
    :class="{ off: gnbCloseValue }"
    @click="gnbDimAct"></div>
</template>

<script>
import _ from 'lodash';
import { ref } from 'vue';

export default {
  setup() {
    const favoToggle = ref(false);
    const myToggle = ref(false);
    const alarmToggle = ref(false);
    const alarmTabs = ref([{ name: 'All', badgeCount: '6', isActive: true }, { name: 'Order', badgeCount: '2' }, { name: 'Finance' }, { name: 'Return' }, { name: 'Claim' }]);
    const favoRadio = ref('Favorite Name 1');

    document.addEventListener('click', function (e) {
      if (!e.target.closest('#header .head-etc')) {
        alarmToggle.value = false;
        myToggle.value = false;
        favoToggle.value = false;
      }
    });
    return {
      alarmTabs,
      alarmToggle,
      favoToggle,
      myToggle,
      favoRadio,
    };
  },
  props: {
    state: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      pubMenus: [
        //Product
        { menuLevel: 1, menuId: 'mL1', depth1: 'Catalog', labelJson: { ko_KR: 'Catalog' }, isNavOpen: false },

        // { menuLevel: 2, menuId: 'mL1L2-1', parentId: 'mL1', labelJson: { ko_KR: 'Normal Order' } },
        // { menuLevel: 3, menuId: 'mL1L2L3-1', parentId: 'mL1L2-1', labelJson: { ko_KR: 'Place Order' } },

        //Order
        { menuLevel: 1, menuId: 'mL2', depth1: 'Order', labelJson: { ko_KR: 'Order' }, isNavOpen: false },

        { menuLevel: 2, menuId: 'mL2L2-1', parentId: 'mL2', labelJson: { ko_KR: 'Normal Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-1', parentId: 'mL2L2-1', labelJson: { ko_KR: 'Place Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-2', parentId: 'mL2L2-1', labelJson: { ko_KR: 'Place Multiple Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-3', parentId: 'mL2L2-1', labelJson: { ko_KR: 'Place Order (Home Delivery)' } },
        { menuLevel: 3, menuId: 'mL2L2L3-4', parentId: 'mL2L2-1', labelJson: { ko_KR: 'Upload Multiple Order (I)' } },
        { menuLevel: 3, menuId: 'mL2L2L3-5', parentId: 'mL2L2-1', labelJson: { ko_KR: 'Upload Multiple Order' } },

        { menuLevel: 2, menuId: 'mL2L2-2', parentId: 'mL2', labelJson: { ko_KR: 'Contract Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-1', parentId: 'mL2L2-2', labelJson: { ko_KR: 'Place Order (Contract Reference)' } },

        { menuLevel: 2, menuId: 'mL2L2-3', parentId: 'mL2', labelJson: { ko_KR: 'Quoted Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-1', parentId: 'mL2L2-3', labelJson: { ko_KR: 'Quoted Order' } },

        { menuLevel: 2, menuId: 'mL2L2-4', parentId: 'mL2', labelJson: { ko_KR: 'PO List' } },
        { menuLevel: 3, menuId: 'mL2L2L3-1', parentId: 'mL2L2-4', labelJson: { ko_KR: 'Display And Change Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-2', parentId: 'mL2L2-4', labelJson: { ko_KR: 'Upload Special Order (Multiple Customer)' } },
        { menuLevel: 3, menuId: 'mL2L2L3-3', parentId: 'mL2L2-4', labelJson: { ko_KR: 'Special (FOC)' } },

        { menuLevel: 2, menuId: 'mL2L2-5', parentId: 'mL2', labelJson: { ko_KR: 'Manage Customer Order (Subsidiary)' } },
        { menuLevel: 3, menuId: 'mL2L2L3-1', parentId: 'mL2L2-5', labelJson: { ko_KR: 'Confirm Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-2', parentId: 'mL2L2-5', labelJson: { ko_KR: 'Manage Customer Order' } },

        { menuLevel: 2, menuId: 'mL2L2-6', parentId: 'mL2', labelJson: { ko_KR: 'Availability' } },
        { menuLevel: 3, menuId: 'mL2L2L3-1', parentId: 'mL2L2-6', labelJson: { ko_KR: 'Availability' } },

        { menuLevel: 2, menuId: 'mL2L2-7', parentId: 'mL2', labelJson: { ko_KR: 'Seeding Order' } },
        { menuLevel: 3, menuId: 'mL2L2L3-1', parentId: 'mL2L2-7', labelJson: { ko_KR: 'Create Seediing Order Plan' } },
        { menuLevel: 3, menuId: 'mL2L2L3-2', parentId: 'mL2L2-7', labelJson: { ko_KR: 'Display Seeding Order Plan' } },
        { menuLevel: 3, menuId: 'mL2L2L3-3', parentId: 'mL2L2-7', labelJson: { ko_KR: 'Display Seeding Order Request' } },
        { menuLevel: 3, menuId: 'mL2L2L3-4', parentId: 'mL2L2-7', labelJson: { ko_KR: 'Seeding Order Report' } },

        //Sales Support
        { menuLevel: 1, menuId: 'mL3', depth1: 'Sales Support', labelJson: { ko_KR: 'Sales Support' }, isNavOpen: false },
        { menuLevel: 2, menuId: 'mL3L2-1', parentId: 'mL3', labelJson: { ko_KR: 'Marketing Plan' } },
        { menuLevel: 3, menuId: 'mL3L2L3-1', parentId: 'mL3L2-1', labelJson: { ko_KR: 'Marketing Calendar' } },
        { menuLevel: 3, menuId: 'mL3L2L3-2', parentId: 'mL3L2-1', labelJson: { ko_KR: 'Promotion Plan' } },

        { menuLevel: 2, menuId: 'mL3L2-2', parentId: 'mL3', labelJson: { ko_KR: 'Product Marketing' } },
        { menuLevel: 3, menuId: 'mL3L2L3-1', parentId: 'mL3L2-2', labelJson: { ko_KR: 'Product & Sales Guide' } },

        { menuLevel: 2, menuId: 'mL3L2-3', parentId: 'mL3', labelJson: { ko_KR: 'Marketing Material' } },
        { menuLevel: 3, menuId: 'mL3L2L3-1', parentId: 'mL3L2-3', labelJson: { ko_KR: 'Display Guide' } },
        { menuLevel: 3, menuId: 'mL3L2L3-2', parentId: 'mL3L2-3', labelJson: { ko_KR: 'Marketing Resources' } },
        { menuLevel: 3, menuId: 'mL3L2L3-3', parentId: 'mL3L2-3', labelJson: { ko_KR: 'Brochure Template' } },

        { menuLevel: 2, menuId: 'mL3L2-4', parentId: 'mL3', labelJson: { ko_KR: 'Download Center' } },
        { menuLevel: 3, menuId: 'mL3L2L3-1', parentId: 'mL3L2-4', labelJson: { ko_KR: 'Download Center' } },

        { menuLevel: 2, menuId: 'mL3L2-5', parentId: 'mL3', labelJson: { ko_KR: 'Contents Mgmt.' } },
        { menuLevel: 3, menuId: 'mL3L2L3-1', parentId: 'mL3L2-5', labelJson: { ko_KR: 'Calendar Management' } },
        { menuLevel: 3, menuId: 'mL3L2L3-2', parentId: 'mL3L2-5', labelJson: { ko_KR: 'Contents Management' } },

        //Finance
        { menuLevel: 1, menuId: 'mL4', depth1: 'Finance', labelJson: { ko_KR: 'Finance' }, isNavOpen: false },
        { menuLevel: 2, menuId: 'mL4L2-1', parentId: 'mL4', labelJson: { ko_KR: 'Credit' } },
        { menuLevel: 3, menuId: 'mL4L2L3-1', parentId: 'mL4L2-1', labelJson: { ko_KR: 'Credit Status' } },
        { menuLevel: 3, menuId: 'mL4L2L3-2', parentId: 'mL4L2-1', labelJson: { ko_KR: 'Credit Status - Subsidiary' } },
        { menuLevel: 3, menuId: 'mL4L2L3-3', parentId: 'mL4L2-1', labelJson: { ko_KR: 'Credit & Hedge Status' } },
        { menuLevel: 3, menuId: 'mL4L2L3-4', parentId: 'mL4L2-1', labelJson: { ko_KR: 'Credit & PFI Trend' } },

        { menuLevel: 2, menuId: 'mL4L2-2', parentId: 'mL4', labelJson: { ko_KR: 'AR/AP' } },
        { menuLevel: 3, menuId: 'mL4L2L3-1', parentId: 'mL4L2-2', labelJson: { ko_KR: 'A/P Status' } },
        { menuLevel: 3, menuId: 'mL4L2L3-2', parentId: 'mL4L2-2', labelJson: { ko_KR: 'Remittance Advice List' } },
        { menuLevel: 3, menuId: 'mL4L2L3-3', parentId: 'mL4L2-2', labelJson: { ko_KR: 'A/R Status - Subsidiary' } },
        { menuLevel: 3, menuId: 'mL4L2L3-4', parentId: 'mL4L2-2', labelJson: { ko_KR: 'DDR Request' } },
        { menuLevel: 3, menuId: 'mL4L2L3-5', parentId: 'mL4L2-2', labelJson: { ko_KR: 'A/P Balance Confirmation' } },
        { menuLevel: 3, menuId: 'mL4L2L3-6', parentId: 'mL4L2-2', labelJson: { ko_KR: 'DDR Payment Clearing' } },
        { menuLevel: 3, menuId: 'mL4L2L3-7', parentId: 'mL4L2-2', labelJson: { ko_KR: 'A/R Balance Confirmation - Subsidiary' } },

        //Operation
        { menuLevel: 1, menuId: 'mL5', depth1: 'Operation', labelJson: { ko_KR: 'Operation' }, isNavOpen: false },

        { menuLevel: 2, menuId: 'mL5L2-2', parentId: 'mL5', labelJson: { ko_KR: 'Return' } },
        { menuLevel: 3, menuId: 'mL5L2L3-1', parentId: 'mL5L2-1', labelJson: { ko_KR: 'Return Overview' } },
        { menuLevel: 3, menuId: 'mL5L2L3-2', parentId: 'mL5L2-1', labelJson: { ko_KR: 'Return Request' } },
        { menuLevel: 3, menuId: 'mL5L2L3-3', parentId: 'mL5L2-1', labelJson: { ko_KR: 'Return Request List' } },
        { menuLevel: 3, menuId: 'mL5L2L3-4', parentId: 'mL5L2-1', labelJson: { ko_KR: 'Return Tracking' } },

        { menuLevel: 2, menuId: 'mL5L2-2', parentId: 'mL5', labelJson: { ko_KR: 'Sell Out/PSI' } },
        { menuLevel: 3, menuId: 'mL5L2L3-1', parentId: 'mL5L2-2', labelJson: { ko_KR: 'Input Sell Out' } },
        { menuLevel: 3, menuId: 'mL5L2L3-2', parentId: 'mL5L2-2', labelJson: { ko_KR: 'PSI Inquires' } },
        { menuLevel: 3, menuId: 'mL5L2L3-3', parentId: 'mL5L2-2', labelJson: { ko_KR: 'PSI Inquiry' } },

        { menuLevel: 2, menuId: 'mL5L2-3', parentId: 'mL5', labelJson: { ko_KR: 'Claim' } },
        { menuLevel: 3, menuId: 'mL5L2L3-1', parentId: 'mL5L2-3', labelJson: { ko_KR: 'Promotion List' } },
        { menuLevel: 3, menuId: 'mL5L2L3-2', parentId: 'mL5L2-3', labelJson: { ko_KR: 'Promotion List - Subsidiary' } },
        { menuLevel: 3, menuId: 'mL5L2L3-3', parentId: 'mL5L2-3', labelJson: { ko_KR: 'Submitted Claim List' } },

        //Biz Center
        { menuLevel: 1, menuId: 'mL6', depth1: 'Biz Center', labelJson: { ko_KR: 'Biz Center' }, isNavOpen: false },
        { menuLevel: 2, menuId: 'mL6L2-1', parentId: 'mL6', labelJson: { ko_KR: 'Biz Center' } },
        { menuLevel: 3, menuId: 'mL6L2L3-1', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Maintain Call Transaction' } },
        { menuLevel: 3, menuId: 'mL6L2L3-2', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Model & Inventory Available' } },
        { menuLevel: 3, menuId: 'mL6L2L3-3', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Order Tracking' } },
        { menuLevel: 3, menuId: 'mL6L2L3-4', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Call History By Home Delivery Order' } },
        { menuLevel: 3, menuId: 'mL6L2L3-5', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Change Order Addresses' } },
        { menuLevel: 3, menuId: 'mL6L2L3-6', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Order Cancellation' } },
        { menuLevel: 3, menuId: 'mL6L2L3-7', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Damage Allowance' } },
        { menuLevel: 3, menuId: 'mL6L2L3-8', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Return Request' } },
        { menuLevel: 3, menuId: 'mL6L2L3-9', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Replacement Request' } },
        { menuLevel: 3, menuId: 'mL6L2L3-10', parentId: 'mL6L2-1', labelJson: { ko_KR: 'DO Block & Release' } },
        { menuLevel: 3, menuId: 'mL6L2L3-11', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Cancel In Transit' } },
        { menuLevel: 3, menuId: 'mL6L2L3-12', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Pending/Open Call' } },
        { menuLevel: 3, menuId: 'mL6L2L3-13', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Damage Allowance List' } },
        { menuLevel: 3, menuId: 'mL6L2L3-14', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Exception Report' } },
        { menuLevel: 3, menuId: 'mL6L2L3-15', parentId: 'mL6L2-1', labelJson: { ko_KR: 'DO Job ID Report' } },
        { menuLevel: 3, menuId: 'mL6L2L3-16', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Available Report' } },
        { menuLevel: 3, menuId: 'mL6L2L3-17', parentId: 'mL6L2-1', labelJson: { ko_KR: 'Quarantine Event' } },
        { menuLevel: 3, menuId: 'mL6L2L3-18', parentId: 'mL6L2-1', labelJson: { ko_KR: 'DO Block Report' } },

        //Sales Insight
        { menuLevel: 1, menuId: 'mL7', depth1: 'Sales Insight', labelJson: { ko_KR: 'Sales Insight' }, isNavOpen: false },
        { menuLevel: 2, menuId: 'mL7L2-1', parentId: 'mL7', labelJson: { ko_KR: 'Sales Insight' } },
        { menuLevel: 3, menuId: 'mL7L2L3-1', parentId: 'mL7L2-1', labelJson: { ko_KR: 'Sales Progress' } },
        { menuLevel: 3, menuId: 'mL7L2L3-2', parentId: 'mL7L2-1', labelJson: { ko_KR: 'Customer Performance' } },
        { menuLevel: 3, menuId: 'mL7L2L3-3', parentId: 'mL7L2-1', labelJson: { ko_KR: 'Daily Order Status' } },
        { menuLevel: 3, menuId: 'mL7L2L3-4', parentId: 'mL7L2-1', labelJson: { ko_KR: 'Customer Detail' } },
        { menuLevel: 3, menuId: 'mL7L2L3-5', parentId: 'mL7L2-1', labelJson: { ko_KR: 'Sales Performance' } },
        { menuLevel: 3, menuId: 'mL7L2L3-6', parentId: 'mL7L2-1', labelJson: { ko_KR: 'Sales Performance' } },

        //Help Center
        { menuLevel: 1, menuId: 'mL8', depth1: 'Help Center', labelJson: { ko_KR: 'Help Center' }, isNavOpen: false },
        { menuLevel: 2, menuId: 'mL8L2-1', parentId: 'mL8', labelJson: { ko_KR: 'Q&A' } },
        { menuLevel: 3, menuId: 'mL8L2L3-1', parentId: 'mL8L2-1', labelJson: { ko_KR: 'Request Help' } },
        { menuLevel: 3, menuId: 'mL8L2L3-2', parentId: 'mL8L2-1', labelJson: { ko_KR: 'Q&A Detail' } },

        { menuLevel: 2, menuId: 'mL8L2-2', parentId: 'mL8', labelJson: { ko_KR: 'FAQ' } },
        { menuLevel: 3, menuId: 'mL8L2L3-1', parentId: 'mL8L2-2', labelJson: { ko_KR: 'FAQ' } },

        { menuLevel: 2, menuId: 'mL8L2-3', parentId: 'mL8', labelJson: { ko_KR: 'Notice' } },
        { menuLevel: 3, menuId: 'mL8L2L3-1', parentId: 'mL8L2-3', labelJson: { ko_KR: 'Notice Detail' } },

        { menuLevel: 2, menuId: 'mL8L2-4', parentId: 'mL8', labelJson: { ko_KR: 'VOC' } },
        { menuLevel: 3, menuId: 'mL8L2L3-1', parentId: 'mL8L2-4', labelJson: { ko_KR: 'Request VOC' } },
        { menuLevel: 3, menuId: 'mL8L2L3-2', parentId: 'mL8L2-4', labelJson: { ko_KR: 'VOC Detail' } },
      ],
      menuSelectedIndex: null,
      dim: false,
      gnbCloseValue: false,
    };
  },
  computed: {
    rootMenus() {
      return _.sortBy(this.pubMenus.filter(menu => menu.menuLevel === 1));
    },
  },
  mounted() {},
  methods: {
    getSubmenu(parentId) {
      return _.sortBy(this.pubMenus.filter(menu => menu.parentId === parentId));
    },

    navClick(menu, index, rootMenus) {
      this.btnToggleClose();
      this.rootMenus = rootMenus.map((item, i) => {
        if (index === i) {
          menu.isNavOpen = !menu.isNavOpen;
          this.menuSelectedIndex = index;
          this.getSubmenu(menu.menuId).length > 0 ? (this.dim = menu.isNavOpen) : (this.dim = false);
        } else {
          item.isNavOpen = false;
        }

        document.addEventListener('click', function (e) {
          if (!e.target.closest('#header')) {
            menu.isNavOpen = false;
            this.dim = false;
          }
        });
      });
    },

    gnbDimAct() {
      this.gnbCloseValue = true;
      setTimeout(() => {
        this.dim = false;
        this.gnbCloseValue = false;
      }, 500);
    },

    getLabel({ labelJson, label }) {
      if (labelJson && labelJson.ko_KR !== undefined && labelJson.ko_KR.trim() !== '') {
        return labelJson.ko_KR;
      }
      return label;
    },

    //header etc menu layer
    myToggleAct() {
      this.myToggle = !this.myToggle;
      this.favoToggle = false;
      this.alarmToggle = false;
    },

    favoToggleAct() {
      this.favoToggle = !this.favoToggle;
      this.myToggle = false;
      this.alarmToggle = false;
    },

    alarmToggleAct() {
      this.alarmToggle = !this.alarmToggle;
      this.myToggle = false;
      this.favoToggle = false;
    },

    btnToggleClose() {
      this.alarmToggle = false;
      this.myToggle = false;
      this.favoToggle = false;
    },
  },
};
</script>
