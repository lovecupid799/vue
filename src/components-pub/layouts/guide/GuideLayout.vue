<template>
  <div id="guide-wrap">
    <div id="guide-container">
      <div class="guide-aside">
        <div class="logo">
          <h1 class="h1">PUBLISH GUIDE</h1>
        </div>
        <ul class="guide-gnb">
          <li class="li">
            <ul class="ul">
              <li>
                <router-link :to="{ name: 'exlist' }">예제 리스트</router-link>
              </li>

            </ul>
          </li>
          <li class="li">
            <p class="tit"><span class="span">마크업</span> 정보</p>
            <ul class="ul">
              <li>
                <router-link :to="{ name: 'worksheet' }">퍼블 현황판</router-link>
              </li>
              <li>
                <router-link :to="{ name: '/mob/worksheet' }">퍼블 모바일 현황판</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'rule' }"
                    >퍼블 환경 및 규칙</router-link
                >
              </li>
            </ul>
          </li>
          <li class="li">
              <p class="tit">
                <span class="span">퍼블</span> 컴포넌트 정보
              </p>
            <ul class="ul">
              <li>컴포넌트 목록</li>
              <li>컴포넌트 네이밍 정보</li>
            </ul>
          </li>
          <li class="li">
              <p class="tit">
                <span class="span">퍼블</span> 컴포넌트
              </p>
            <ul class="ul">
              <li>
                <router-link :to="{ name: 'text' }"
                    >TYPOGRAPHY</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'list' }"
                    >LIST</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'form' }"
                    >FORMS</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'button' }"
                    >BUTTON
                </router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'tabs' }"
                    >TABS
                </router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'toggle' }"
                    >COLLAPSE
                </router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'etc' }"
                    >ETC
                </router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="guide-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
   @use "@/assets/scss/guide/guide";
</style>

