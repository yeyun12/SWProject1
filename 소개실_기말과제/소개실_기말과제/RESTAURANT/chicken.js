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
        document.getElementById('시간').style.fontSize = '17px';
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
        mainName.textContent = '닭다구리';
        subName.textContent = '든든하고 다양한 닭요리 전문 맛집';
        소개.textContent = '매장 소개';
        설명.textContent = '영업 중간에 사라진 적이 있어 학교 커뮤니티 내에서도 많이들 찾았던 닭칼국수 맛집입니다. 푸짐한 양과 더불어 주례 맛집으로 알려져있으며 숨은 단골들이 많고, 현금/계좌이체 시 500원 할인 이벤트가 상시 열려있습니다. ';
        영업.textContent = "영업시간";
        시간.textContent = '주중 10:30 ~ 19:00 (확실치않음)';
        주차.textContent = '주차';
        가능.textContent = '불가능';
        메뉴.textContent = '대표메뉴';
        경컵.textContent = '닭칼국수\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a08000원'
        치즈.textContent = '개장칼국수\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a08000원';
        제육.textContent = '닭곰탕 \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09000원';
        주소.textContent = '주소';
        주소지.textContent = '부산 사상구 가야대로318번길 85';
        전화번호.textContent = '전화번호';
        길안내.textContent = '오시는 길';
       

    } else if (lang === 'en') {
        languageText.textContent = 'Please select a language';
        searchPlaceholder.placeholder = 'How about Korean food today?';
        mainName.textContent = 'Talk Teaguri ';
        subName.textContent = "A restaurant specializing in chicken dishes";
        소개.textContent = 'Store introduction';
        설명.textContent = "It is a chicken noodle restaurant that many people visited within the school community because it disappeared in the middle of business. It is known as a well-known weekly restaurant with generous portions, and there are many hidden regulars, and there is always a 500 won discount event for cash/account transfers.";
        영업.textContent = 'business';
        시간.textContent = 'Weekdays 10:30 ~ 19:00 (Not sure)'
        주차.textContent = 'Parking';
        가능.textContent = 'impossible';
        메뉴.textContent = 'Menu';
        경컵.textContent = 'Chicken Kalguksu\u00a0\u00a0\u00a08,000 won'
        치즈.textContent = 'Gaejang kalguksu\u00a0\u00a0\u00a08,000 won'
        제육.textContent = 'Chicken soup\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09,000 won';
        주소.textContent = 'Address';
        주소지.textContent = '85, Gayadae-ro 318, Sasang-gu, Busan';
        전화번호.textContent = 'number';
        길안내.textContent ='Finding a way';
      
       

    } else if (lang === 'jp') {
        languageText.textContent = '言語を選択してください';
        searchPlaceholder.placeholder = '今日は韓国料理にする？';
        mainName.textContent = '鶏ダグリ';
        subName.textContent ='食べ応えのある多様な鶏料理専門店';
        소개.textContent = '店舗紹介';
        설명.textContent = '団体席、バーテーブル、1人席など、様々な座席があり、気軽にアクセスしやすいまぜそばのグルメ店です。 釜山オムグン農産物市場で直接目で見て購入した新鮮な材料で作った料理を提供します。 美味しい料理と親切なサービスが絶品で、常連さんが多いです。';
        영업.textContent = '営業時間';
        시간.textContent = '平日 10:30~19:00 (定かでない)';
        주차.textContent = '駐車';
        가능.textContent = '可能';
        메뉴.textContent = 'メニュー';
        경컵.textContent = 'まぜそば\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500ウォン';
        치즈.textContent = '台湾の家庭料理丼\u00a0\u00a0\u00a09500ウォン';
        제육.textContent = '練り天うどん\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500ウォン';
        주소.textContent = '住所';
        주소지.textContent = '釜山市沙上区伽倻大路318番キル85';
        전화번호.textContent = '店番';
        길안내.textContent = '交通アクセス';
    


    } else if (lang === 'cn') {
        languageText.textContent = '请选择语言';
        searchPlaceholder.placeholder = '今天吃韩国菜吗？';
        mainName.textContent = '鸡腿';
        subName.textContent = '踏实又多样的鸡肉料理专门美食店';
        소개.textContent = '店铺介绍'; 
        설명.textContent = '因为营业途中消失过,所以在学校社区内也经常光顾的鸡肉刀削面美食店。 丰盛且以证婚人美食店著称,隐藏的常客较多,现金/转账时可享受500韩元的优惠活动。';
        영업.textContent = '营业时间';
        시간.textContent = '平日 10:30 ~ 20:00(不确定)';
        주차.textContent = '停车场';
        가능.textContent = '不可能 ';
        메뉴.textContent = '菜单';
        경컵.textContent = '鸡丝刀切面\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a08000韩元'
        치즈.textContent = '酱刀切面\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500韩元'
        제육.textContent = '炖鸡汤\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a09500韩元';
        주소.textContent = '地址';
        주소지.textContent ='釜山沙上区伽倻大路三一八号街85';
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