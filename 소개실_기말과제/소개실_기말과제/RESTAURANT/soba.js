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
        document.getElementById('주소지').style.fontSize = '17px';
    
}function 일본어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '17px';
    
}
function 중국어폰트(){
        document.getElementById('경컵').style.fontSize = '18.72px'
        document.getElementById('주소지').style.fontSize = '17px';
    
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
        mainName.textContent = '전원일기';
        subName.textContent = '동서대 유일 마제소바집';
        소개.textContent = '매장 소개';
        설명.textContent = '단체석, 바테이블, 1인석 등 다양한 좌석이 있어 부담없이 방문하기 좋은 마제소바 맛집입니다. 부산엄궁 농산물시장에서 직접 눈으로 보고 구매한 신선한 재료들로 만든 음식을 제공합니다. 맛있는 음식과 친절한 서비스가 일품으로, 단골이 많습니다.';
        영업.textContent = "영업시간";
        시간.textContent = '주중 11:30 ~ 20:00';
        주차.textContent = '주차';
        가능.textContent = '가능';
        메뉴.textContent = '대표메뉴';
        경컵.textContent = '마제소바\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500원'
        치즈.textContent = '대만식가정덮밥\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500원';
        제육.textContent = '튀김어묵우동\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500원';
        주소.textContent = '주소';
        주소지.textContent = '부산 사상구 가야대로318번길 74';
        전화번호.textContent = '전화번호';
        길안내.textContent = '오시는 길';
       

    } else if (lang === 'en') {
        languageText.textContent = 'Please select a language';
        searchPlaceholder.placeholder = 'How about Korean food today?';
        mainName.textContent = 'Jeonwonilgi ';
        subName.textContent = "Dongseo University's only majesoba restaurant";
        소개.textContent = 'Store introduction';
        설명.textContent = "There are various seats such as group seats, bar tables, and one person seats, so it is a good restaurant to visit without any hesitation. Eomgung Agricultural Market in Busan offers food made with fresh ingredients purchased directly. Delicious food and friendly service are excellent, and there are many regulars.";
        영업.textContent = 'business';
        시간.textContent = 'Weekdays 11:30 ~ 20:00'
        주차.textContent = 'Parking';
        가능.textContent = 'possible';
        메뉴.textContent = 'Menu';
        경컵.textContent = 'Maje soba \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09,500 won'
        치즈.textContent = 'Taiwan style rice\u00a0\u00a0\u00a0\u00a09,500 won'
        제육.textContent = 'Fried fish udon\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09,500 won';
        주소.textContent = 'Address';
        주소지.textContent = '74, Gayadae-ro 318, Sasang-gu, Busan';
        전화번호.textContent = 'number';
        길안내.textContent ='Finding a way';
      
       

    } else if (lang === 'jp') {
        languageText.textContent = '言語を選択してください';
        searchPlaceholder.placeholder = '今日は韓国料理にする？';
        mainName.textContent = '田園日記';
        subName.textContent = '大学路唯一のまぜそばのグルメ店';
        소개.textContent = '店舗紹介';
        설명.textContent = '団体席、バーテーブル、1人席など、様々な座席があり、気軽にアクセスしやすいまぜそばのグルメ店です。 釜山オムグン農産物市場で直接目で見て購入した新鮮な材料で作った料理を提供します。 美味しい料理と親切なサービスが絶品で、常連さんが多いです。';
        영업.textContent = '営業時間';
        시간.textContent = '平日 11:30~20:00';
        주차.textContent = '駐車';
        가능.textContent = '可能';
        메뉴.textContent = 'メニュー';
        경컵.textContent = 'まぜそば\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500ウォン';
        치즈.textContent = '台湾の家庭料理丼\u00a0\u00a0\u00a09500ウォン';
        제육.textContent = '練り天うどん\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500ウォン';
        주소.textContent = '住所';
        주소지.textContent = '釜山市沙上区伽倻大路318番キル74';
        전화번호.textContent = '店番';
        길안내.textContent = '交通アクセス';
    


    } else if (lang === 'cn') {
        languageText.textContent = '请选择语言';
        searchPlaceholder.placeholder = '今天吃韩国菜吗？';
        mainName.textContent = '田园日记';
        subName.textContent = '大学路唯一的马蹄荞麦面美食店';
        소개.textContent = '店铺介绍'; 
        설명.textContent = '有团体席、吧台、1人席等多种座位，是适合毫无负担地访问的Maje荞麦面美食店。 提供在釜山严弓农产品市场亲眼看到并购买的新鲜材料制作的食物。 美味佳肴和亲切的服务是一流的，常客很多。';
        영업.textContent = '营业时间';
        시간.textContent = '平日 11:30 ~ 20:00';
        주차.textContent = '停车场';
        가능.textContent = '可能';
        메뉴.textContent = '菜单';
        경컵.textContent = '马杰索瓦\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500韩元'
        치즈.textContent = '台湾家常菜盖饭\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500韩元'
        제육.textContent = '油炸鱼饼乌冬面\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500韩元';
        주소.textContent = '地址';
        주소지.textContent ='釜山沙上区伽倻大路三一八号街74';
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
  loop: true,

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