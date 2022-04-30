'use strict';

const $body = document.querySelector('.body');
$body?.addEventListener('click', click_f, true);

const $detail_icon = document.querySelector('.detail-icon');
const $detailCHK = document.querySelector('.detailCHK');

function click_f(evt) {
  //상세버튼 출력
  if (evt.target.matches('.detail-icon')) {
    if ($detailCHK.checked == true) {
      $detail_icon.addEventListener('click', (evt) => {
        // $detail_icon.style.display = "none";
        $detail_icon.style.backgroundImage = "url('/img/icon/icon-triangle_inverted.png')";
        $detailCHK.checked = false;
      });
    } else if ($detailCHK.checked == false) {
      $detail_icon.addEventListener('click', (evt) => {
        // $detail_icon.style.display = "block";
        $detail_icon.style.backgroundImage = "url('/img/icon/icon-triangle.png')";
        $detailCHK.checked = true;
      });
    }
  }

  if (evt.target.matches('.detail-info')) {
    if ($detailCHK.checked == false) {
      $detail_icon.click();
    }
  }

  if (evt.target.matches('.detail-Page')) {
    if ($detailCHK.checked == true) {
      $detail_icon.click();
    }
  }


  const tabList = document.querySelectorAll('.detailmenu .Area li');
  const contents = document.querySelectorAll('.detailmenu .Areaboxs .cont');
  let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for (var i = 0; i < tabList.length; i++) {
    tabList[i].querySelector('.btn').addEventListener('click', function (e) {
      e.preventDefault();
      for (var j = 0; j < tabList.length; j++) {
        // 나머지 버튼 클래스 제거
        tabList[j].classList.remove('is_on');

        // 나머지 컨텐츠 display:none 처리
        contents[j].style.display = 'none';
      }
      console.log('뭘까?');
      // 버튼 관련 이벤트
      this.parentNode.classList.add('is_on');

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';
    });
  }
}
