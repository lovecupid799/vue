<template>
  <h2 class="guide-tit1">퍼블리싱 환경 및 규칙</h2>
  <h3 class="guide-tit2">프로젝트 환경</h3>
  <h4 class="guide-tit3">개발 환경</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>개발환경 : SDL Framework (vue3, quasar, bootstrap, NSP), ECMA6</li>
      <li>해상도 : 1440px 고정</li>
    </ul>
  </div>

  <h4 class="guide-tit3">사용 폰트</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>기본 폰트 : SamsungOneKorea</li>
      <li>타이틀 폰트 : Samsung Sharp Sans</li>
    </ul>
  </div>

  <h4 class="guide-tit3">퍼블 구조</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>
        <div>
          <p><strong>assets</strong><br />: 웹리소스 폴더, 개발과 같은 위치에서 사용</p>
          <ul>
            <li>css : SDL 프레임워크 CSS</li>
            <li>fonts : SDL 프레임워크 FONTS</li>
            <li>images : NSP 이미지</li>
            <li>scss : NSP CSS</li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <p><strong>components-pub</strong><br />: 퍼블리싱 폴더, 퍼블에서 사용하는 레이아웃, 공통, 페이지 파일이 있음.</p>
          <ul>
            <li>common : NSP 퍼블 공통파일</li>
            <li>view : NSP 퍼블리싱 파일</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <h3 class="guide-tit2">예약어 규칙</h3>
  

  <h4 class="guide-tit3">예약어</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>btn : 버튼 예약어</li>
      <li>ico : 아이콘 예약어</li>
      <li>im : 이미지 예약어</li>
      <li>thum : 썸네일 이미지 예약어</li>
      <li>type : 요소의 타입</li>
      <li>theme : 컴포넌트의 타입</li>
      <li>pop : 팝업 예약어</li>
    </ul>
  </div>

  <h4 class="guide-tit3">레이아웃</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>헤더 영역 : #header</li>
      <li>컨테이너 영역 : #container</li>
      <li>푸터 영역 : #footer</li>
    </ul>
  </div>

  <h4 class="guide-tit3">구조</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>.xx-wrap : 영역의 부모</li>
      <li>.xx-head : 영역의 상단</li>
      <li>.xx-body : 영역의 바디</li>
      <li>.xx-foot : 영역의 하단</li>
    </ul>
  </div>

  <h4 class="guide-tit3">그룹핑</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>.xx-box : 박스형태의 그룹핑</li>
      <li>.xx-area : 특정 영역으로 그룹핑이 필요할 때</li>
      <li>.xx-list : 리스트 - ex) card-list</li>
      <li>.xx-item : 리스트의 한 요소 - ex) card-item</li>
      <li>.xx-group : 요소 그룹핑이 필요할 때 사용 - ex) radio-group</li>
    </ul>
  </div>

  <h3 class="guide-tit2">네이밍</h3>
  <h4 class="guide-tit3">클래스 네이밍</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>정의 : prefix, subfix, suffix를 사용</li>
      <li>공통 네이밍 : 형태_의미_순서_상태</li>
      <li>로컬 네이밍 : 분류_형태_의미_순서_상태</li>
    </ul>
  </div>

  <h4 class="guide-tit3">이미지 네이밍</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>공통 이미지 : 형태-의미_순서_상태 (ex) ico-del_xx.svg</li>
      <li>로컬 이미지 : 형태(구분)-형태-의미_순서_상태 (ex) btn-ico-del_xx.svg</li>
      <li>
        <div>
          피그마 네이밍과 동일 : 폴더 구분은 (-) 사용, 이미지명의 단어 조합(_) 사용 
          <p class="mgt-4">(ex) 피그마 : ico/shopping/in_stock => 이미지 : ico-shopping-in_stock.svg</p>
        </div>
      </li>
    </ul>
  </div>

  <h4 class="guide-tit3">이벤트 네이밍</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>실행 아이디 : 대문자로 정의 (ex) target-id='CODE-VIEW3'</li>
      <li>상태 클래스 : 소문자로 정의 (ex) is-xxx (ex) is-open</li>
    </ul>
  </div>

  <h3 class="guide-tit2">마크업 규칙</h3>
  <h4 class="guide-tit3">HTML</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>클래스명 : 케밥케이스</li>
      <li>들여쓰기 : 2칸</li>
      <li>부트스트랩 태그 : 부트스트랩 사용시 랜더링된 태그로 사용(SDL 프레임워크 사용 동일)</li>
      <li>리스트 : 반복문으로 구현해야하는 특별한 이유가 없다면 일반 마크업으로 진행</li>
      <li>주석 : 주석은 개발에 꼭 노티해야하는 경우에만 사용하며, 단락과 단락은 줄바꿈(한줄)으로 그룹핑한다. &lt;!-- 주석 시작 --&gt;&lt;!-- //주석 끝 --&gt;</li>
      <li>수치값 : 수치값은 정수이며, 디자인에서 홀수로 정의된 경우에는 반올림하거나 반내림하여 정수로 변환하여 사용한다.</li>
    </ul>
  </div>

  <h4 class="guide-tit3">CSS</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>quasar, bootstrap css 방어 후 커스텀 css 적용</li>
      <li>주석처리 : 1뎁스는 영문 대문자, 2뎁스부터는 영문 소문자 및 한글</li>
      <li>속성 정의 순서 : 형태 및 표시(display), 위치(float, position), 폰트(font-size, color), 크기(width, height), 여백(padding, margin), 정렬(text-align), border, background, overflow, transform, animation, 그 외
</li>
    </ul>
  </div>

  <h3 class="guide-tit2">이미지</h3>
  
  
  <h4 class="guide-tit3">확장자</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>아이콘 : svg</li>
      <li>투명 이미지 : png</li>
      <li>상품 이미지 : jpg</li>
    </ul>
  </div>
  
  <h4 class="guide-tit3">폴더</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>아이콘 폴더 : assets/images/icons</li>
      <li>이미지 폴더 : assets/images/img</li>
      <li>샘플이미지 폴더 : assets/images/sample</li>
    </ul>
  </div>

  <h3 class="guide-tit2">컴포넌트</h3>
  <h4 class="guide-tit3">적용 우선순위</h4>
  <div class="guide-txtBox">
    <ul class="ul-num">
      <li>. 퍼블 브런치에 있는 개발 컴포넌트(nsp, sdl) 적용</li>
      <li>. 컴포넌트에 추가기능이 필요할 경우 개발에 마크업 전달 후 요청</li>
      <li>.사용할 컴포넌트가 없을 경우 신규 컴포넌트 요청</li>
    </ul>
    <p style="margin-top: 8px;"><a href="http://uisdl.scp.samsung.net/v3/components/Overview" target="_blank">※ 컴포넌트 샘플 사이트 보기</a></p>
  </div>

  <h4 class="guide-tit3">기존 컴포넌트</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>기존 컴포넌트를 활용해서 스타일만 변경 후 사용한다.</li>
      <li>추가 기능이 필요할 경우공통담당 개발자에게 요청한다.</li>
      <li>기존 컴포넌트가 작업 디렉토리에 추가되지않았을 경우 임시 영역만 만들고, 컴포넌트가 공유되면 해당 영역에 추가한다.</li>
    </ul>
  </div>

  <h4 class="guide-tit3">신규 컴포넌트</h4>
  <div class="guide-txtBox">
    <ul class="ul">
      <li>신규 컴포넌트 항목은 개발에 먼저 확인받은 후 진행</li>
      <li>부트스트랩의 랜더링된 코드로 퍼블리싱한 후 개발쪽에 전달한다.</li>
      <li>개발된 컴포넌트를 퍼블 파일에 적용한다.</li>
    </ul>
  </div>
</template>
