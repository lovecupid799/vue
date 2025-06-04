<template>
  <h2 class="guide-tit1">TYPOGRAPHY</h2>
  <h3 class="guide-tit2">Title</h3>
  <h4 class="guide-tit3">뎁스</h4>
   <div class="guide-exBox">
    <div class="in">
      
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>

  <h3 class="guide-tit2">Text</h3>
  <h4 class="guide-tit3">보조텍스트</h4>
  <div class="guide-exBox">
    <div class="in">
      
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>

  <h4 class="guide-tit3">바디 텍스트</h4>
   <div class="guide-exBox">
    <div class="in">
      
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>

  <h3 class="guide-tit2">타이틀 영역</h3>
   <div class="guide-exBox">
   <div class="in">
      <p class="tit">타입1-1. props로 타이틀 추가 : 뎁스별 단계</p>
      <pub-title
        :title="'타이틀 뎁스1입니다.'"
        :h-bullet="false"></pub-title>

      <pub-title
        :title="'타이틀 뎁스2입니다.'"
        :h-depth="2"></pub-title>

      <pub-title
        :title="'타이틀 뎁스3입니다.'"
        :h-tag="'h3'"
        :h-depth="3"></pub-title>

      <pub-title
        :title="'타이틀 뎁스4입니다.'"
        :h-tag="'h4'"
        :h-depth="4"></pub-title>

      <p class="tit">타입1-2. props로 타이틀 추가</p>
      <pub-title :title="'타이틀입니다.'"></pub-title>

      <p class="tit">타입3-1. 양쪽 배치</p>
      <pub-title>
        <h2 class="h-tit1">
          <span>타이틀<span style="color: red">중요</span>입니다.</span>
        </h2>
        <template #right>오른쪽 영역</template>
      </pub-title>

      <p class="tit">타입3-2. 양쪽 배치 : 컴포넌트 영역에 마크업 추가</p>
      <pub-title>
        <h2 class="h-tit1">타이틀<span class="small-txt">보조텍스트</span></h2>
        <template #right>오른쪽 영역</template>
      </pub-title>

      <p class="tit">타입3-3. 양쪽 배치 : 세로 방향</p>
      <pub-title
        :left-vert="true"
        :right-vert="true">
        <h2 class="h-tit1">타이틀</h2>
        <p class="small-txt">보조텍스트 보조텍스트 보조텍스트</p>
        <template #right>
          <div>오른쪽 영역</div>
          <div>오른쪽 바텀 영역입니다.</div>
        </template>
        <template #btm>
          <div class="h-left">타이틀 아래 왼쪽 영역</div>
          <div class="h-right">타이틀 아래 오른쪽 영역</div>
        </template>
      </pub-title>
    </div>
    <div class="code">
      <pre>{{ ``}}</pre>
    </div>
  </div>
</template>
