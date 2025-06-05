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
                    <tr class="hr" id="Menu1">
                        <td></td>
                        <td>Menu1</td>
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
                    <tr class="hr" id="Menu2">
                        <td></td>
                        <td>Menu2</td>
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
                    <tr class="hr" id="Menu3">
                        <td></td>
                        <td>Menu3</td>
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
                    <tr class="hr" id="Menu4">
                        <td></td>
                        <td>Menu4</td>
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
                </tbody>
            </table>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted} from 'vue';

const anchorList = ref([
  { id: 'COM', name: 'Common' },
  { id: 'Menu1', name: 'Menu1' },
  { id: 'Menu2', name: 'Menu2' },
  { id: 'Menu3', name: 'Menu3' },
  { id: 'Menu4', name: 'Menu4' },
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

<style lang="scss">
   @use "@/assets/scss/guide/guide";
</style>
