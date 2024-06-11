//언어 변경
document.getElementById('ko-btn').addEventListener('click', function() {
    changeLanguage('ko');
});

document.getElementById('en-btn').addEventListener('click', function() {
    changeLanguage('en');
});

document.getElementById('jp-btn').addEventListener('click', function() {
    changeLanguage('jp');
});

document.getElementById('cn-btn').addEventListener('click', function() {
    changeLanguage('cn');
});

//폰트사이즈
function 한국어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '18.72px';
    
}function 영어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '18.72px';
    
}function 일본어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '18.72px';
    
}
function 중국어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '18.72px';
    
}

function changeLanguage(lang) {
    var languageText = document.getElementById('language-text');
    var searchPlaceholder = document.getElementById('search-placeholder');
    var mainName = document.getElementById('main-name');
    var 소개 = document.getElementById('소개');
    var subName = document.getElementById('sub-name');
    var 설명 = document.getElementById('설명');
    var 영업 = document.getElementById('영업');
    var 시간 = document.getElementById('시간');
    var 주차 = document.getElementById('주차');
    var 가능 = document.getElementById('가능');
    var 메뉴 = document.getElementById('메뉴');
    var 경컵 = document.getElementById('경컵');
    var 치즈 = document.getElementById('치즈');
    var 제육 = document.getElementById('제육');
    var 주소 = document.getElementById('주소');
    var 주소지 = document.getElementById('주소지');
    var 전화번호 = document.getElementById('전화번호');
    var 길안내 = document.getElementById('길안내');



    if (lang === 'ko') {
        languageText.textContent = '언어를 선택해주세요';
        searchPlaceholder.placeholder = '오늘은 한식?';
        mainName.textContent = '경대컵밥';
        subName.textContent = '다양한 메뉴와 최고의 가성비';
        소개.textContent = '매장 소개';
        설명.textContent = ' 친절하신 사장님께서 운영 중이신 비교적 저렴한 가격대와 제법 많은 메뉴들로 구성되어 있는 동서대 근처 컵밥 맛집입니다. 간편한 한끼 식사로 안성맞춤이며, 곱빼기 메뉴로 든든함까지 챙길 수 있습니다.';
        영업.textContent = "영업시간";
        시간.textContent = '주중 09:30 ~ 20:00';
        주차.textContent = '주차';
        가능.textContent = '가능';
        메뉴.textContent = '대표메뉴';
        경컵.textContent = '경대컵밥\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a04500원'
        치즈.textContent = '치즈컵밥\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a05000원';
        제육.textContent = '제육컵밥\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a05000원';
        주소.textContent = '주소';
        주소지.textContent = '부산 사상구 주례로 76';
        전화번호.textContent = '전화번호';
        길안내.textContent = '오시는 길';
       

    } else if (lang === 'en') {
        languageText.textContent = 'Please select a language';
        searchPlaceholder.placeholder = 'How about Korean food today?';
        mainName.textContent = 'Gyeongdae Cup Rice';
        subName.textContent = "Diverse menu and best value for money";
        소개.textContent = 'Store introduction';
        설명.textContent = "It's a cup rice restaurant near Dongseo University with a relatively low price range and quite a lot of menus operated by the kind boss. It's perfect for a simple meal, and you can even take care of your confidence with the double-sized menu.";
        영업.textContent = 'business';
        시간.textContent = 'Weekdays 09:30 ~ 20:00'
        주차.textContent = 'Parking';
        가능.textContent = 'possible';
        메뉴.textContent = 'Menu';
        경컵.textContent = 'original cup rice\u00a0\u00a0\u00a0\u00a0\u00a04,500 won'
        치즈.textContent = 'cheese cup rice\u00a0\u00a0\u00a0\u00a0\u00a0\u00a05,000 won'
        제육.textContent = 'pork cup rice\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a05,000 won';
        주소.textContent = 'Address';
        주소지.textContent = '76, Jurye-ro, Sasang-gu, Busan';
        전화번호.textContent = 'number';
        길안내.textContent ='Finding a way';
      
       

    } else if (lang === 'jp') {
        languageText.textContent = '言語を選択してください';
        searchPlaceholder.placeholder = '今日は韓国料理にする？';
        mainName.textContent = 'マグカップ';
        subName.textContent = '様々なメニューと最高のコスパ';
        소개.textContent = '店舗紹介';
        설명.textContent = '親切な社長が運営されている比較的低価格帯とかなり多くのメニューで構成されている東西大学近くのカップ飯グルメ店です。 手軽な一食に最適であり、大盛りメニューとして心強いです。';
        영업.textContent = '営業時間';
        시간.textContent = '平日 09:30~20:00';
        주차.textContent = '駐車';
        가능.textContent = '可能';
        메뉴.textContent = 'メニュー';
        경컵.textContent = '京大カップ飯\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a04500ウォン';
        치즈.textContent = 'チーズカップ飯\u00a0\u00a0\u00a0\u00a05000ウォン';
        제육.textContent = '豚肉カップ飯\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a05000ウォン';
        주소.textContent = '住所';
        주소지.textContent = '釜山沙上区周礼路76';
        전화번호.textContent = '店番';
        길안내.textContent = '交通アクセス';
    


    } else if (lang === 'cn') {
        languageText.textContent = '请选择语言';
        searchPlaceholder.placeholder = '今天吃韩国菜吗？';
        mainName.textContent = '庆大杯饭';
        subName.textContent = '多样化的菜单和最佳的性价比';
        소개.textContent = '店铺介绍'; 
        설명.textContent = '这是由亲切的老板正在运营的相对低廉的价格和相当多的菜品组成的东西大学附近的杯饭美食店。 非常适合作为简便的一顿饭,双份的菜单可以让人感到踏实。';
        영업.textContent = '营业时间';
        시간.textContent = '平日 09:30 ~ 20:00';
        주차.textContent = '停车场';
        가능.textContent = '可能';
        메뉴.textContent = '菜单';
        경컵.textContent = '庆大杯饭\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a04500韩元'
        치즈.textContent = '芝士杯饭\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a05000韩元'
        제육.textContent = '猪肉杯饭\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a05000韩元';
        주소.textContent = '地址';
        주소지.textContent ='釜山沙上区周礼路76';
        전화번호.textContent = '店号';
        길안내.textContent = '梧诗街';
     
    }
}
//슬라이드 애니메이션
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGropu: 3,
  loop: true, //슬라이드 무한 넘기기

  loopFillGroupwithBlank: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});