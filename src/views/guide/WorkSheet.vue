<template>
    <h1 class="work-tit"><span class="point">퍼블</span> 현황판</h1>
    <div class="work-head">
        <div class="work-anchor">
            <div class="left">
                <img
                class="work-space"
                src="data:image/png;base64,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"
                alt="SPACE" />
                
                <a
                class="btn-txt sm primary"
                target="_blank"
                href="#"
                >퍼블 가이드<span class="ico-outlink_blue_b"></span
                ></a>
                
                <p class="work-txt"><strong>퍼블 파일</strong> : 파일 링크(화면아이디로 파일명 정의), <strong>TYPE</strong> : 파일 타입(T : Tab, P : Popup, M : Mail), <strong>처리상태</strong> : 작업 상태</p>
            </div>
            <div class="right">
                <template
                v-for="(menu, index) in anchorList"
                :key="index">
                <button
                    type="button"
                    class="btn-anchor"
                    :class="{ active: menuSelectedIndex === index }"
                    @click="onAnchorClick(event, menu, index)">
                    {{ menu.name }}
                </button>
                </template>
            </div>
        </div>
        <div class="work-table">
            <table>
                <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 120px" />
                    <col style="width: 170px" />
                    <col style="width: 180px" />
                    <col style="width: 170px" />
                    <col style="width: 170px" />
                    <col style="width: 80px" />
                    <col style="width: 260px" />
                    <col style="width: 110px" />
                    <col style="width: 80px" />
                    <col style="width: 80px" />
                    <col style="width: auto" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">1Depth</th>
                    <th scope="col">2Depth</th>
                    <th scope="col">3Depth</th>
                    <th scope="col">4Depth</th>
                    <th scope="col">5Depth</th>
                    <th scope="col">Type</th>
                    <th scope="col">퍼블 파일</th>
                    <th scope="col">작업자</th>
                    <th scope="col">완료 예정일</th>
                    <th scope="col">처리상태</th>
                    <th scope="col">비고</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>
    <div className="workBody">
        <div className="workTable">
            <table>
                <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 120px" />
                    <col style="width: 170px" />
                    <col style="width: 180px" />
                    <col style="width: 170px" />
                    <col style="width: 170px" />
                    <col style="width: 80px" />
                    <col style="width: 260px" />
                    <col style="width: 110px" />
                    <col style="width: 80px" />
                    <col style="width: 80px" />
                    <col style="width: auto" />
                </colgroup>
                <tbody>
                    <tr id="COM">
                        <td></td>
                        <td>레이아웃</td>
                        <td>메인 레이아웃</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <!-- <router-link
                                target="_blank"
                                :to="{ name: 'SampleMain' }"
                                >샘플</router-link
                            > -->
                        </td>
                        <td>홍길동</td>
                        <td>24.00.00</td>
                        <td data-status=""></td>
                        <td>
                            <p class="etcTxt">
                                <span class="date">24.00.00</span>수정사항입력
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="LANDING">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="PRODUCT">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="ORDER">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="FINANCE">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="RETURN">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="CLAIM">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="BIZ">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="HELP">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="OMS">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="ADMIN">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hr" id="MAIL">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td><td></td>
                        <td data-status=""></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted} from 'vue';

const anchorList = ref([
  { id: 'COM', name: 'Common' },
  { id: 'LANDING', name: 'Home Landing' },
  { id: 'PRODUCT', name: 'Product' },
  { id: 'ORDER', name: 'Order' },
  { id: 'FINANCE', name: 'Finance' },
  { id: 'RETURN', name: 'Return' },
  { id: 'CLAIM', name: 'Claim' },
  { id: 'BIZ', name: 'Biz Center' },
  { id: 'HELP', name: 'Help Center' },
  { id: 'OMS', name: 'OMS' },
  { id: 'ADMIN', name: 'Admin' },
  { id: 'MAIL', name: 'E-Mail' },
]);

const menuSelectedIndex = ref(null);

const onAnchorClick = (event, menu, index) => {
  const $target = `#${menu.id}`;
  const _offset = document.querySelector($target).offsetTop + 102;
  window.scrollTo({ top: _offset, left: 0 });
  menuSelectedIndex.value = index;
};

let $anchor = [];


onMounted(() => {
    
anchorList.value.forEach((e, idx) => {
    $anchor[idx] = document.querySelector(`#${e.id}`).offsetTop + 100;
});

const scrollAct = () => {
const isScrollTop = window.scrollY;

    $anchor.forEach((e, idx) => {
        if ($anchor[idx] < isScrollTop) {
        menuSelectedIndex.value = idx;
        } else if (isScrollTop < 100) {
        menuSelectedIndex.value = null;
        }
    });
};
  window.addEventListener('scroll', scrollAct);
});

// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', scrollAct);
// });
</script>

<style scoped lang="scss">
    .work-tit {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        font-weight: 700;
        min-width: 1440px;
        padding: 30px 10px 40px;
        text-align: center;
        .point {
            display: inline-flex;
            align-items: center;
            color: #0071f2;
            margin-right: 8px;
        }
        .logo {
            margin-top: -8px;
            margin-right: 4px;
        }
    }

    .work-anchor {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    // @include flex($jc:space-between, $gap: 24px);
    padding: 2px 10px;
    margin:0 -10px;
    text-align: right;
    background-color: #fff;
  .left {
    display: flex;
    align-items: center;
    gap: 8px;
    // @include flex($ai:center);
    .q-separator--vertical {
      margin: 5px 10px;
    }
    .work-txt {
      font-size: 13px;
      color: #444;
      margin: 0;
    }

    a {
      &.btn-txt {
        // @include flex($ai:center, $gap:4px);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 13px;
      }
    }
  }

  .right {
    // @include flex;
    display: flex;
  }
  
  .work-space {
    height: 16px;
  }

  .btn-anchor {
    display: inline-flex;
    font-size: 13px;
    color:#fff;
    padding: 0 5px;
    margin-bottom: 4px;
    border-radius: 3px;
    background-color: #00B3E3;
    &:not(:first-child) {
      margin-left: 4px;
    }
    &.active {
      background-color: #000;
    }
  }
}

.work-head {
    position: sticky;
    top: 0;
    min-width: 1440px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #ccdae9;
    overflow: hidden;
    th {
        font-size: 14px;
        height: 40px;
        text-align: center;
    }
}

.workBody {
    min-width: 1440px;
    padding: 0 10px 10px;
}

.workTable {
    display: block;
    table {
        table-layout: fixed;
        width: 100%;
        th,
        td {
            font-size: 14px;
            font-weight: 400;
            height: 40px;
            padding: 10px;
        }
        thead {
            th {
                color: #fff;
                text-align: center;
                vertical-align: middle;
                border: 0;
                border-top: 2px solid #0958b5;
                background-color: #086fe3;
            }
        }
        tbody {
            counter-reset: list-number;
            tr {
                td {
                    font-weight: 400;
                    vertical-align: middle;
                    &:first-child {
                        counter-increment: list-number;
                        &:before {
                            content: counter(list-number);
                        }
                    }
                    &[data-status="완료"] {
                        color: #7546e5;
                    }
                }
                &.hr {
                    td {
                        border-top: 3px solid #cacaca;
                    }
                }
                &.bg1 {
                    background-color: #fbf8c5;
                }
                &.bg2 {
                    background-color: #f1f1f1;
                }
            }
            td {
                border: 1px solid #e1e2e4;
                &:nth-child(1),
                &:nth-child(8),
                &:nth-child(9),
                &:nth-child(10) {
                    text-align: center;
                }
                &:nth-child(2) {
                    font-weight: bold;
                }
                &:nth-child(9) {
                    color: #9a9a9a;
                    a {
                        color: #111;
                    }
                }
                .etcTxt {
                    display: flex;
                    align-items: flex-start;
                    gap: 7px;
                    &:not(:first-child) {
                        margin-top: 6px;
                    }
                }
                .date {
                    flex-shrink: 0;
                    font-size: 13px;
                    padding: 4px 6px;
                    border-radius: 4px;
                    background-color: #cfed90;
                }
                .date1 {
                    flex-shrink: 0;
                    font-size: 13px;
                    padding: 4px 6px;
                    border-radius: 4px;
                    background-color: #ed9090;
                }
                .txt {
                    display: inline-flex;
                    align-items: center;
                    min-height: 29px;
                }
                .link {
                    &:focus {
                        font-weight: 700;
                    }
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        &.is-hidden {
            tbody {
                tr {
                    &.bg1 {
                        td {
                            display: none;
                        }
                    }
                    &.bg2 {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
