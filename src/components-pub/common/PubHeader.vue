<template>
  <div id="header">
    <div class="inner">
      <!-- gnb etc -->
      <div class="head-top">
        <div class="head-left">
          <router-link>
            <h1 class="logo">
              <!-- <img
                style="height: 24px"
                src="data:image/png;base64,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"
                alt="SPACE"
              /> -->
            </h1>
          </router-link>
        </div>

        <div class="head-etc">오른쪽 메뉴</div>
      </div>
      <!-- //gnb etc -->

      <!-- gnbWrap -->
      <nav class="gnbWrap">
        <ul class="gnb-nav">
          <li
            class="menu-item"
            v-for="(menu, index) in rootMenus"
            :key="menu.menuId"
            :index="menu.menuId"
          >
            <button
              type="button"
              class="menu-1depth"
              :class="{ on: menuSelectedIndex === index && menu.isNavOpen }"
              @mouseover="navClick(menu, index, rootMenus)"
            >
              {{ getLabel(menu) }}
            </button>
            <div
              class="sub-nav-wrap"
              v-if="menuSelectedIndex === index && menu.isNavOpen && getSubmenu(menu.menuId).length"
            >
              <ul class="sub-nav">
                <li
                  class="sub-item"
                  v-for="submenu in getSubmenu(menu.menuId)"
                  :key="submenu.menuId"
                  :index="submenu.menuId"
                >
                  <template v-if="getSubmenu(submenu.menuId).length > 0">
                    <h3 class="menu-2depth">{{ getLabel(submenu) }}</h3>
                    <ul class="sub-list">
                      <li class="li" v-for="item in getSubmenu(submenu.menuId)" :key="item.menuId">
                        <pub-checkbox inline class="form-check-star" />
                        <a href="javascript:">{{ getLabel(item) }}</a>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <a href="#" class="menu-2depth">{{ getLabel(submenu) }}</a>
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
    @mouseover="navLeave"
  ></div>
</template>

<script>
import _ from 'lodash'
import { ref } from 'vue'

export default {
  setup() {
    const favoToggle = ref(false)
    const myToggle = ref(false)
    const alarmToggle = ref(false)
    const alarmTabs = ref([
      { name: 'All', badgeCount: '6', isActive: true },
      { name: 'Order', badgeCount: '2' },
      { name: 'Finance' },
      { name: 'Return' },
      { name: 'Claim' },
    ])
    const favoRadio = ref('Favorite Name 1')

    document.addEventListener('click', function (e) {
      if (!e.target.closest('#header .head-etc')) {
        alarmToggle.value = false
        myToggle.value = false
        favoToggle.value = false
      }
    })
    return {
      alarmTabs,
      alarmToggle,
      favoToggle,
      myToggle,
      favoRadio,
    }
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
        {
          menuLevel: 1,
          menuId: 'mL1',
          depth1: 'Catalog',
          labelJson: { ko_KR: 'Catalog' },
          isNavOpen: false,
        },

        // { menuLevel: 2, menuId: 'mL1L2-1', parentId: 'mL1', labelJson: { ko_KR: 'Normal Order' } },
        // { menuLevel: 3, menuId: 'mL1L2L3-1', parentId: 'mL1L2-1', labelJson: { ko_KR: 'Place Order' } },

        //Order
        {
          menuLevel: 1,
          menuId: 'mL2',
          depth1: 'Order',
          labelJson: { ko_KR: 'Order' },
          isNavOpen: false,
        },

        { menuLevel: 2, menuId: 'mL2L2-1', parentId: 'mL2', labelJson: { ko_KR: 'Normal Order' } },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-1',
          parentId: 'mL2L2-1',
          labelJson: { ko_KR: 'Place Order' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-2',
          parentId: 'mL2L2-1',
          labelJson: { ko_KR: 'Place Multiple Order' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-3',
          parentId: 'mL2L2-1',
          labelJson: { ko_KR: 'Place Order (Home Delivery)' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-4',
          parentId: 'mL2L2-1',
          labelJson: { ko_KR: 'Upload Multiple Order (I)' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-5',
          parentId: 'mL2L2-1',
          labelJson: { ko_KR: 'Upload Multiple Order' },
        },

        {
          menuLevel: 2,
          menuId: 'mL2L2-2',
          parentId: 'mL2',
          labelJson: { ko_KR: 'Contract Order' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-1',
          parentId: 'mL2L2-2',
          labelJson: { ko_KR: 'Place Order (Contract Reference)' },
        },

        { menuLevel: 2, menuId: 'mL2L2-3', parentId: 'mL2', labelJson: { ko_KR: 'Quoted Order' } },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-1',
          parentId: 'mL2L2-3',
          labelJson: { ko_KR: 'Quoted Order' },
        },

        { menuLevel: 2, menuId: 'mL2L2-4', parentId: 'mL2', labelJson: { ko_KR: 'PO List' } },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-1',
          parentId: 'mL2L2-4',
          labelJson: { ko_KR: 'Display And Change Order' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-2',
          parentId: 'mL2L2-4',
          labelJson: { ko_KR: 'Upload Special Order (Multiple Customer)' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-3',
          parentId: 'mL2L2-4',
          labelJson: { ko_KR: 'Special (FOC)' },
        },

        {
          menuLevel: 2,
          menuId: 'mL2L2-5',
          parentId: 'mL2',
          labelJson: { ko_KR: 'Manage Customer Order (Subsidiary)' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-1',
          parentId: 'mL2L2-5',
          labelJson: { ko_KR: 'Confirm Order' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-2',
          parentId: 'mL2L2-5',
          labelJson: { ko_KR: 'Manage Customer Order' },
        },

        { menuLevel: 2, menuId: 'mL2L2-6', parentId: 'mL2', labelJson: { ko_KR: 'Availability' } },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-1',
          parentId: 'mL2L2-6',
          labelJson: { ko_KR: 'Availability' },
        },

        { menuLevel: 2, menuId: 'mL2L2-7', parentId: 'mL2', labelJson: { ko_KR: 'Seeding Order' } },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-1',
          parentId: 'mL2L2-7',
          labelJson: { ko_KR: 'Create Seediing Order Plan' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-2',
          parentId: 'mL2L2-7',
          labelJson: { ko_KR: 'Display Seeding Order Plan' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-3',
          parentId: 'mL2L2-7',
          labelJson: { ko_KR: 'Display Seeding Order Request' },
        },
        {
          menuLevel: 3,
          menuId: 'mL2L2L3-4',
          parentId: 'mL2L2-7',
          labelJson: { ko_KR: 'Seeding Order Report' },
        },

        //Sales Support
        {
          menuLevel: 1,
          menuId: 'mL3',
          depth1: 'Sales Support',
          labelJson: { ko_KR: 'Sales Support' },
          isNavOpen: false,
        },
        {
          menuLevel: 2,
          menuId: 'mL3L2-1',
          parentId: 'mL3',
          labelJson: { ko_KR: 'Marketing Plan' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-1',
          parentId: 'mL3L2-1',
          labelJson: { ko_KR: 'Marketing Calendar' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-2',
          parentId: 'mL3L2-1',
          labelJson: { ko_KR: 'Promotion Plan' },
        },

        {
          menuLevel: 2,
          menuId: 'mL3L2-2',
          parentId: 'mL3',
          labelJson: { ko_KR: 'Product Marketing' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-1',
          parentId: 'mL3L2-2',
          labelJson: { ko_KR: 'Product & Sales Guide' },
        },

        {
          menuLevel: 2,
          menuId: 'mL3L2-3',
          parentId: 'mL3',
          labelJson: { ko_KR: 'Marketing Material' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-1',
          parentId: 'mL3L2-3',
          labelJson: { ko_KR: 'Display Guide' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-2',
          parentId: 'mL3L2-3',
          labelJson: { ko_KR: 'Marketing Resources' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-3',
          parentId: 'mL3L2-3',
          labelJson: { ko_KR: 'Brochure Template' },
        },

        {
          menuLevel: 2,
          menuId: 'mL3L2-4',
          parentId: 'mL3',
          labelJson: { ko_KR: 'Download Center' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-1',
          parentId: 'mL3L2-4',
          labelJson: { ko_KR: 'Download Center' },
        },

        {
          menuLevel: 2,
          menuId: 'mL3L2-5',
          parentId: 'mL3',
          labelJson: { ko_KR: 'Contents Mgmt.' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-1',
          parentId: 'mL3L2-5',
          labelJson: { ko_KR: 'Calendar Management' },
        },
        {
          menuLevel: 3,
          menuId: 'mL3L2L3-2',
          parentId: 'mL3L2-5',
          labelJson: { ko_KR: 'Contents Management' },
        },

        //Finance
        {
          menuLevel: 1,
          menuId: 'mL4',
          depth1: 'Finance',
          labelJson: { ko_KR: 'Finance' },
          isNavOpen: false,
        },
        { menuLevel: 2, menuId: 'mL4L2-1', parentId: 'mL4', labelJson: { ko_KR: 'Credit' } },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-1',
          parentId: 'mL4L2-1',
          labelJson: { ko_KR: 'Credit Status' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-2',
          parentId: 'mL4L2-1',
          labelJson: { ko_KR: 'Credit Status - Subsidiary' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-3',
          parentId: 'mL4L2-1',
          labelJson: { ko_KR: 'Credit & Hedge Status' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-4',
          parentId: 'mL4L2-1',
          labelJson: { ko_KR: 'Credit & PFI Trend' },
        },

        { menuLevel: 2, menuId: 'mL4L2-2', parentId: 'mL4', labelJson: { ko_KR: 'AR/AP' } },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-1',
          parentId: 'mL4L2-2',
          labelJson: { ko_KR: 'A/P Status' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-2',
          parentId: 'mL4L2-2',
          labelJson: { ko_KR: 'Remittance Advice List' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-3',
          parentId: 'mL4L2-2',
          labelJson: { ko_KR: 'A/R Status - Subsidiary' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-4',
          parentId: 'mL4L2-2',
          labelJson: { ko_KR: 'DDR Request' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-5',
          parentId: 'mL4L2-2',
          labelJson: { ko_KR: 'A/P Balance Confirmation' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-6',
          parentId: 'mL4L2-2',
          labelJson: { ko_KR: 'DDR Payment Clearing' },
        },
        {
          menuLevel: 3,
          menuId: 'mL4L2L3-7',
          parentId: 'mL4L2-2',
          labelJson: { ko_KR: 'A/R Balance Confirmation - Subsidiary' },
        },

        //Operation
        {
          menuLevel: 1,
          menuId: 'mL5',
          depth1: 'Operation',
          labelJson: { ko_KR: 'Operation' },
          isNavOpen: false,
        },

        { menuLevel: 2, menuId: 'mL5L2-2', parentId: 'mL5', labelJson: { ko_KR: 'Return' } },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-1',
          parentId: 'mL5L2-1',
          labelJson: { ko_KR: 'Return Overview' },
        },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-2',
          parentId: 'mL5L2-1',
          labelJson: { ko_KR: 'Return Request' },
        },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-3',
          parentId: 'mL5L2-1',
          labelJson: { ko_KR: 'Return Request List' },
        },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-4',
          parentId: 'mL5L2-1',
          labelJson: { ko_KR: 'Return Tracking' },
        },

        { menuLevel: 2, menuId: 'mL5L2-2', parentId: 'mL5', labelJson: { ko_KR: 'Sell Out/PSI' } },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-1',
          parentId: 'mL5L2-2',
          labelJson: { ko_KR: 'Input Sell Out' },
        },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-2',
          parentId: 'mL5L2-2',
          labelJson: { ko_KR: 'PSI Inquires' },
        },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-3',
          parentId: 'mL5L2-2',
          labelJson: { ko_KR: 'PSI Inquiry' },
        },

        { menuLevel: 2, menuId: 'mL5L2-3', parentId: 'mL5', labelJson: { ko_KR: 'Claim' } },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-1',
          parentId: 'mL5L2-3',
          labelJson: { ko_KR: 'Promotion List' },
        },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-2',
          parentId: 'mL5L2-3',
          labelJson: { ko_KR: 'Promotion List - Subsidiary' },
        },
        {
          menuLevel: 3,
          menuId: 'mL5L2L3-3',
          parentId: 'mL5L2-3',
          labelJson: { ko_KR: 'Submitted Claim List' },
        },

        //Biz Center
        {
          menuLevel: 1,
          menuId: 'mL6',
          depth1: 'Biz Center',
          labelJson: { ko_KR: 'Biz Center' },
          isNavOpen: false,
        },
        { menuLevel: 2, menuId: 'mL6L2-1', parentId: 'mL6', labelJson: { ko_KR: 'Biz Center' } },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-1',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Maintain Call Transaction' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-2',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Model & Inventory Available' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-3',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Order Tracking' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-4',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Call History By Home Delivery Order' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-5',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Change Order Addresses' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-6',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Order Cancellation' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-7',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Damage Allowance' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-8',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Return Request' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-9',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Replacement Request' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-10',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'DO Block & Release' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-11',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Cancel In Transit' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-12',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Pending/Open Call' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-13',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Damage Allowance List' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-14',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Exception Report' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-15',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'DO Job ID Report' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-16',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Available Report' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-17',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'Quarantine Event' },
        },
        {
          menuLevel: 3,
          menuId: 'mL6L2L3-18',
          parentId: 'mL6L2-1',
          labelJson: { ko_KR: 'DO Block Report' },
        },

        //Sales Insight
        {
          menuLevel: 1,
          menuId: 'mL7',
          depth1: 'Sales Insight',
          labelJson: { ko_KR: 'Sales Insight' },
          isNavOpen: false,
        },
        { menuLevel: 2, menuId: 'mL7L2-1', parentId: 'mL7', labelJson: { ko_KR: 'Sales Insight' } },
        {
          menuLevel: 3,
          menuId: 'mL7L2L3-1',
          parentId: 'mL7L2-1',
          labelJson: { ko_KR: 'Sales Progress' },
        },
        {
          menuLevel: 3,
          menuId: 'mL7L2L3-2',
          parentId: 'mL7L2-1',
          labelJson: { ko_KR: 'Customer Performance' },
        },
        {
          menuLevel: 3,
          menuId: 'mL7L2L3-3',
          parentId: 'mL7L2-1',
          labelJson: { ko_KR: 'Daily Order Status' },
        },
        {
          menuLevel: 3,
          menuId: 'mL7L2L3-4',
          parentId: 'mL7L2-1',
          labelJson: { ko_KR: 'Customer Detail' },
        },
        {
          menuLevel: 3,
          menuId: 'mL7L2L3-5',
          parentId: 'mL7L2-1',
          labelJson: { ko_KR: 'Sales Performance' },
        },
        {
          menuLevel: 3,
          menuId: 'mL7L2L3-6',
          parentId: 'mL7L2-1',
          labelJson: { ko_KR: 'Sales Performance' },
        },

        //Help Center
        {
          menuLevel: 1,
          menuId: 'mL8',
          depth1: 'Help Center',
          labelJson: { ko_KR: 'Help Center' },
          isNavOpen: false,
        },
        { menuLevel: 2, menuId: 'mL8L2-1', parentId: 'mL8', labelJson: { ko_KR: 'Q&A' } },
        {
          menuLevel: 3,
          menuId: 'mL8L2L3-1',
          parentId: 'mL8L2-1',
          labelJson: { ko_KR: 'Request Help' },
        },
        {
          menuLevel: 3,
          menuId: 'mL8L2L3-2',
          parentId: 'mL8L2-1',
          labelJson: { ko_KR: 'Q&A Detail' },
        },

        { menuLevel: 2, menuId: 'mL8L2-2', parentId: 'mL8', labelJson: { ko_KR: 'FAQ' } },
        { menuLevel: 3, menuId: 'mL8L2L3-1', parentId: 'mL8L2-2', labelJson: { ko_KR: 'FAQ' } },

        { menuLevel: 2, menuId: 'mL8L2-3', parentId: 'mL8', labelJson: { ko_KR: 'Notice' } },
        {
          menuLevel: 3,
          menuId: 'mL8L2L3-1',
          parentId: 'mL8L2-3',
          labelJson: { ko_KR: 'Notice Detail' },
        },

        { menuLevel: 2, menuId: 'mL8L2-4', parentId: 'mL8', labelJson: { ko_KR: 'VOC' } },
        {
          menuLevel: 3,
          menuId: 'mL8L2L3-1',
          parentId: 'mL8L2-4',
          labelJson: { ko_KR: 'Request VOC' },
        },
        {
          menuLevel: 3,
          menuId: 'mL8L2L3-2',
          parentId: 'mL8L2-4',
          labelJson: { ko_KR: 'VOC Detail' },
        },
      ],
      menuSelectedIndex: null,
      dim: false,
      gnbCloseValue: false,
    }
  },
  computed: {
    rootMenus() {
      return _.sortBy(this.pubMenus.filter((menu) => menu.menuLevel === 1))
    },
  },
  mounted() {},
  methods: {
    getSubmenu(parentId) {
      return _.sortBy(this.pubMenus.filter((menu) => menu.parentId === parentId))
    },

    navClick(menu, index, rootMenus) {
      this.btnToggleClose()
      this.rootMenus = rootMenus.map((item, i) => {
        if (index === i) {
          if (menu.isNavOpen === false) {
            menu.isNavOpen = true
          }
          this.menuSelectedIndex = index
          this.getSubmenu(menu.menuId).length > 0 ? (this.dim = menu.isNavOpen) : (this.dim = false)
        } else {
          item.isNavOpen = false
        }

        document.addEventListener('click', function (e) {
          if (!e.target.closest('#header')) {
            menu.isNavOpen = false
            this.dim = false
          }
        })
      })
    },

    navLeave() {
      this.dim = false
      this.rootMenus.map((item, i) => {
        item.isNavOpen = false
      })
    },

    // gnbDimAct() {
    //   this.gnbCloseValue = true
    //   setTimeout(() => {
    //     this.dim = false
    //     this.gnbCloseValue = false
    //   }, 500)
    // },

    getLabel({ labelJson, label }) {
      if (labelJson && labelJson.ko_KR !== undefined && labelJson.ko_KR.trim() !== '') {
        return labelJson.ko_KR
      }
      return label
    },

    //header etc menu layer
    myToggleAct() {
      this.myToggle = !this.myToggle
      this.favoToggle = false
      this.alarmToggle = false
    },

    favoToggleAct() {
      this.favoToggle = !this.favoToggle
      this.myToggle = false
      this.alarmToggle = false
    },

    alarmToggleAct() {
      this.alarmToggle = !this.alarmToggle
      this.myToggle = false
      this.favoToggle = false
    },

    btnToggleClose() {
      this.alarmToggle = false
      this.myToggle = false
      this.favoToggle = false
    },
  },
}
</script>
