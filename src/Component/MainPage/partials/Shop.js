import React, { useState, useEffect } from 'react';
import { Spin, Icon } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import ShopFilter from './ShopFilter';

function Shop() {
  const initialState = { shop: [], loading: true };
  const [shoppedItem, setShoppedItem] = useState(initialState.shop);
  const [isLoading, setIsLoading] = useState(initialState.loading);
  const antIcon = <Icon type="loading" style={{ fontSize: 35 }} spin />;
  const getItem = () => {
    const superItem = {
      lastBuildDate: 'Mon, 17 Feb 2020 12:17:10 +0900',
      total: 400,
      start: 1,
      display: 100,
      items: [
        {
          title: '<b>DOEN</b> 도엔 블라우스 BEL TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21029419682',
          image:
            'https://shopping-phinf.pstatic.net/main_2102941/21029419682.20191006234921.jpg',
          lprice: '215900',
          hprice: '449340',
          mallName: '네이버',
          productId: '21029419682',
          productType: '1'
        },
        {
          title: '도엔 블라우스 <b>DOEN</b> LILLET TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82277526622',
          image:
            'https://shopping-phinf.pstatic.net/main_8227752/82277526622.jpg',
          lprice: '311900',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82277526622',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> The Jane Blouse',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592269',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592269.1.jpg',
          lprice: '213000',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592269',
          productType: '2'
        },
        {
          title: '<b>Doen</b> 블라우스 HENRI TOP BLOUSE [관부가세포함]',
          link: 'https://search.shopping.naver.com/gate.nhn?id=81737334860',
          image:
            'https://shopping-phinf.pstatic.net/main_8173733/81737334860.2.jpg',
          lprice: '270570',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '81737334860',
          productType: '2'
        },
        {
          title:
            '12월 여자들 사용자 정의, <b>Doen</b> 알파카 수제 랜턴 소매 카디건 스웨터',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21912110691',
          image:
            'https://shopping-phinf.pstatic.net/main_2191211/21912110691.jpg',
          lprice: '153000',
          hprice: '0',
          mallName: '집합몰',
          productId: '21912110691',
          productType: '2'
        },
        {
          title: 'Hortense Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592287',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592287.1.jpg',
          lprice: '227500',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592287',
          productType: '2'
        },
        {
          title:
            '12월 여자들이 가을과 겨울 사용자 정의, <b>Doen</b> 미국의 복고풍 랜턴 소매 크로 셰 뜨개질 스웨터',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21912115651',
          image:
            'https://shopping-phinf.pstatic.net/main_2191211/21912115651.jpg',
          lprice: '151000',
          hprice: '0',
          mallName: '집합몰',
          productId: '21912115651',
          productType: '2'
        },
        {
          title: '블라우스 MINA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82046903104',
          image:
            'https://shopping-phinf.pstatic.net/main_8204690/82046903104.1.jpg',
          lprice: '379650',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82046903104',
          productType: '2'
        },
        {
          title: 'June Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592285',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592285.1.jpg',
          lprice: '198500',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592285',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> HARDY TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82277516589',
          image:
            'https://shopping-phinf.pstatic.net/main_8227751/82277516589.jpg',
          lprice: '411900',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82277516589',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Leon Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592286',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592286.1.jpg',
          lprice: '213000',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592286',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Annabella Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335506',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335506.1.jpg',
          lprice: '356300',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335506',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Hardy Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335747',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335747.1.jpg',
          lprice: '390700',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335747',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Amaranth Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335781',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335781.1.jpg',
          lprice: '241900',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335781',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Chrysanthe Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335336',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335336.1.jpg',
          lprice: '356300',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335336',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Bridger Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335405',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335405.1.jpg',
          lprice: '402700',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335405',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Aldine Top',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335755',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335755.1.jpg',
          lprice: '213000',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335755',
          productType: '2'
        },
        {
          title: '<b>Doen</b> 블라우스 <b>Doen</b> VIOLA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=81948770784',
          image:
            'https://shopping-phinf.pstatic.net/main_8194877/81948770784.1.jpg',
          lprice: '232910',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '81948770784',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> ORA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82068556946',
          image:
            'https://shopping-phinf.pstatic.net/main_8206855/82068556946.jpg',
          lprice: '306930',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82068556946',
          productType: '2'
        },
        {
          title: '<b>Doen</b> 블라우스 <b>Doen</b> ROSEBAY TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=81821884947',
          image:
            'https://shopping-phinf.pstatic.net/main_8182188/81821884947.jpg',
          lprice: '250370',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '81821884947',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> CEZANNE TOP [관부가세포함]',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82103254305',
          image:
            'https://shopping-phinf.pstatic.net/main_8210325/82103254305.jpg',
          lprice: '528120',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82103254305',
          productType: '2'
        },
        {
          title:
            '2020 가을 여성 패션 격자 무늬 블라우스 긴 소매 턴 <b>DOEN</b> 칼라 레이디 셔츠',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21590718868',
          image:
            'https://shopping-phinf.pstatic.net/main_2159071/21590718868.jpg',
          lprice: '42600',
          hprice: '0',
          mallName: 'NH마켓',
          productId: '21590718868',
          productType: '2'
        },
        {
          title:
            '여성 페이즐리 셔츠 구매대행뚱보 캣츠 미국 정품 <b>DOEN</b> ANNABELLA 실크 페이즐리 프린트 여성 상의 셔츠 19',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21756327398',
          image:
            'https://shopping-phinf.pstatic.net/main_2175632/21756327398.jpg',
          lprice: '365000',
          hprice: '0',
          mallName: '7마켓',
          productId: '21756327398',
          productType: '2'
        },
        {
          title:
            'kirahosi 가을 겨울 와이드 팬츠 일자 바지 박시한 팬츠 64호+덧신증정 <b>DOen</b>9czu',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21636201705',
          image:
            'https://shopping-phinf.pstatic.net/main_2163620/21636201705.jpg',
          lprice: '28800',
          hprice: '0',
          mallName: '쿠팡',
          productId: '21636201705',
          productType: '2'
        },
        {
          title:
            '[세일몰]Burdully 2018 패션 봄 가을 여성 솔리드 더블 브레스트 턴 <b>doen</b> 칼라 코트 윈드 브레이커 우아한 슬림 여성 탑스 전체',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21622531609',
          image:
            'https://shopping-phinf.pstatic.net/main_2162253/21622531609.jpg',
          lprice: '407730',
          hprice: '0',
          mallName: '유닛808',
          productId: '21622531609',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> Marabella ruffled printed cotton mini dress 1230429',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21888858106',
          image:
            'https://shopping-phinf.pstatic.net/main_2188885/21888858106.jpg',
          lprice: '324300',
          hprice: '0',
          mallName: '유로망고',
          productId: '21888858106',
          productType: '2'
        },
        {
          title:
            '12월 여자들 사용자 정의, <b>Doen</b> 미국의 복고풍 진한 파란색 허리 크로 셰 뜨개질 랜턴 소매 카디건 스웨터',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21912096042',
          image:
            'https://shopping-phinf.pstatic.net/main_2191209/21912096042.jpg',
          lprice: '151000',
          hprice: '0',
          mallName: '집합몰',
          productId: '21912096042',
          productType: '2'
        },
        {
          title: '도엔 나시 블라우스 <b>DOEN</b> DARJEELING TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=80783265731',
          image:
            'https://shopping-phinf.pstatic.net/main_8078326/80783265731.2.jpg',
          lprice: '225120',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '80783265731',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> SIA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82046855373',
          image:
            'https://shopping-phinf.pstatic.net/main_8204685/82046855373.jpg',
          lprice: '225120',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82046855373',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 블라우스 <b>DOEN</b> CAMINA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82149880974',
          image:
            'https://shopping-phinf.pstatic.net/main_8214988/82149880974.jpg',
          lprice: '255420',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82149880974',
          productType: '2'
        },
        {
          title: '도엔 블라우스 <b>DOEN</b> RIVER TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=81001698331',
          image:
            'https://shopping-phinf.pstatic.net/main_8100169/81001698331.4.jpg',
          lprice: '447900',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '81001698331',
          productType: '2'
        },
        {
          title: '도엔 블라우스 <b>DOEN</b> ANNABELLA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82197576154',
          image:
            'https://shopping-phinf.pstatic.net/main_8219757/82197576154.jpg',
          lprice: '310900',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82197576154',
          productType: '2'
        },
        {
          title: '도엔 블라우스 <b>DOEN</b> AVONLEA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82197583872',
          image:
            'https://shopping-phinf.pstatic.net/main_8219758/82197583872.jpg',
          lprice: '310900',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82197583872',
          productType: '2'
        },
        {
          title: '도엔 블라우스 <b>DOEN</b> HARDY TOP [관부가세포함]',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82197567321',
          image:
            'https://shopping-phinf.pstatic.net/main_8219756/82197567321.jpg',
          lprice: '418030',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82197567321',
          productType: '2'
        },
        {
          title:
            '<b>Doen</b> 블라우스 <b>DOEN</b> ALBERTINE TOP BLOUSE [관부가세포함]',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82046875443',
          image:
            'https://shopping-phinf.pstatic.net/main_8204687/82046875443.1.jpg',
          lprice: '306930',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82046875443',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> YVETTE TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82046913365',
          image:
            'https://shopping-phinf.pstatic.net/main_8204691/82046913365.jpg',
          lprice: '306930',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82046913365',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> JUNE TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82090277054',
          image:
            'https://shopping-phinf.pstatic.net/main_8209027/82090277054.jpg',
          lprice: '218050',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82090277054',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 여성 플로럴 프린트 티어드 미디 원피스 멀티컬러 Multicolored',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21889004890',
          image:
            'https://shopping-phinf.pstatic.net/main_2188900/21889004890.jpg',
          lprice: '299000',
          hprice: '0',
          mallName: '발란',
          productId: '21889004890',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Adobe Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592238',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592238.1.jpg',
          lprice: '356300',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592238',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Vienna Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592242',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592242.1.jpg',
          lprice: '752100',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592242',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Bramble Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592239',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592239.1.jpg',
          lprice: '425100',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592239',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Mariposa Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592240',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592240.1.jpg',
          lprice: '528400',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592240',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 코튼 드레스 Avena ruffled lace-trimmed Swiss-dot cotton midi dress 1230436 16854924',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21782518371',
          image:
            'https://shopping-phinf.pstatic.net/main_2178251/21782518371.20200118144014.jpg',
          lprice: '400549',
          hprice: '684820',
          mallName: '네이버',
          productId: '21782518371',
          productType: '1'
        },
        {
          title: '[<b>DOEN</b>][도엔] Raven Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592243',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592243.1.jpg',
          lprice: '407900',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592243',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Cypress Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887591958',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887591958.1.jpg',
          lprice: '872600',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887591958',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Ranger Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592284',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592284.1.jpg',
          lprice: '270900',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592284',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 여성 숏 / 미디원피스 Black and beige',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21806012770',
          image:
            'https://shopping-phinf.pstatic.net/main_2180601/21806012770.jpg',
          lprice: '360000',
          hprice: '0',
          mallName: '발란',
          productId: '21806012770',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> CLAY DRESS 1910000307',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21212419754',
          image:
            'https://shopping-phinf.pstatic.net/main_2121241/21212419754.20191101184941.jpg',
          lprice: '487000',
          hprice: '487600',
          mallName: '네이버',
          productId: '21212419754',
          productType: '1'
        },
        {
          title: '<b>DOEN</b> 여성 숏 / 미디원피스 Dusty-pink Swiss-dot',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21749263745',
          image:
            'https://shopping-phinf.pstatic.net/main_2174926/21749263745.jpg',
          lprice: '681000',
          hprice: '0',
          mallName: '발란',
          productId: '21749263745',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 여성 숏 / 미디원피스 Black and beige',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21749269336',
          image:
            'https://shopping-phinf.pstatic.net/main_2174926/21749269336.jpg',
          lprice: '615000',
          hprice: '0',
          mallName: '발란',
          productId: '21749269336',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 코튼 드레스 자수 디테일 노바 Nova embroidered printed cotton midi dress 1230427 17349027',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21739402421',
          image:
            'https://shopping-phinf.pstatic.net/main_2173940/21739402421.jpg',
          lprice: '615950',
          hprice: '0',
          mallName: '트렌비',
          productId: '21739402421',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Anusha Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335745',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335745.1.jpg',
          lprice: '459500',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335745',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> MINUIT DRESS 1910000310',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21211889050',
          image:
            'https://shopping-phinf.pstatic.net/main_2121188/21211889050.20191101175500.jpg',
          lprice: '361040',
          hprice: '375500',
          mallName: '네이버',
          productId: '21211889050',
          productType: '1'
        },
        {
          title: '<b>DOEN</b> ADELAIDE DRESS',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21211884571',
          image:
            'https://shopping-phinf.pstatic.net/main_2121188/21211884571.20191101175356.jpg',
          lprice: '425100',
          hprice: '431600',
          mallName: '네이버',
          productId: '21211884571',
          productType: '1'
        },
        {
          title: '[<b>DOEN</b>][도엔] Appaloosa Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335787',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335787.1.jpg',
          lprice: '528400',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335787',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Tarragon Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335701',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335701.1.jpg',
          lprice: '700500',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335701',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Normandy Dress',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335713',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335713.1.jpg',
          lprice: '425100',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335713',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 여성 주름 장식 플로럴 프린트 원피스 Multicolored',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21387507177',
          image:
            'https://shopping-phinf.pstatic.net/main_2138750/21387507177.jpg',
          lprice: '599000',
          hprice: '0',
          mallName: '발란',
          productId: '21387507177',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 여성 티어드 플로럴 프린트 코듀로이 미디 원피스 Multicolored',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21387507297',
          image:
            'https://shopping-phinf.pstatic.net/main_2138750/21387507297.jpg',
          lprice: '475000',
          hprice: '0',
          mallName: '발란',
          productId: '21387507297',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 여성 주름 장식 플로럴 프린트 원피스 Multicolored',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21387507237',
          image:
            'https://shopping-phinf.pstatic.net/main_2138750/21387507237.jpg',
          lprice: '599000',
          hprice: '0',
          mallName: '발란',
          productId: '21387507237',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 여성 Malta 러플 플로럴 프린트 코듀로이 미디 원피스 Tonal-blue and cream',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21498427987',
          image:
            'https://shopping-phinf.pstatic.net/main_2149842/21498427987.jpg',
          lprice: '541000',
          hprice: '0',
          mallName: '발란',
          productId: '21498427987',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 드레스 Malta ruffled floral-print cotton-corduroy midi dress 1230428 16309266',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21435442939',
          image:
            'https://shopping-phinf.pstatic.net/main_2143544/21435442939.jpg',
          lprice: '537380',
          hprice: '0',
          mallName: '트렌비',
          productId: '21435442939',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 드레스 실크 Laurel asymmetric floral-print silk crepe de chine maxi dress 1230426 15662835',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21383414076',
          image:
            'https://shopping-phinf.pstatic.net/main_2138341/21383414076.jpg',
          lprice: '980670',
          hprice: '0',
          mallName: '트렌비',
          productId: '21383414076',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 드레스 미니 실크 Baudoin ruffled floral-print silk crepe de chine mini dress 1230425 15662834',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21383414254',
          image:
            'https://shopping-phinf.pstatic.net/main_2138341/21383414254.jpg',
          lprice: '598490',
          hprice: '0',
          mallName: '트렌비',
          productId: '21383414254',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 드레스 Esme ruffled floral-print cotton-voile maxi dress 1230422 15662814',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21383414300',
          image:
            'https://shopping-phinf.pstatic.net/main_2138341/21383414300.jpg',
          lprice: '615950',
          hprice: '0',
          mallName: '트렌비',
          productId: '21383414300',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 드레스 Marine belted ruffled ramie maxi dress 1230424 15662817',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21383414301',
          image:
            'https://shopping-phinf.pstatic.net/main_2138341/21383414301.jpg',
          lprice: '728470',
          hprice: '0',
          mallName: '트렌비',
          productId: '21383414301',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 드레스 Raven tiered floral-print cotton-corduroy midi dress 1230431 15850763',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21383492186',
          image:
            'https://shopping-phinf.pstatic.net/main_2138349/21383492186.jpg',
          lprice: '468510',
          hprice: '0',
          mallName: '트렌비',
          productId: '21383492186',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 블라우스 <b>DOEN</b> VENICE TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82149872428',
          image:
            'https://shopping-phinf.pstatic.net/main_8214987/82149872428.jpg',
          lprice: '306930',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82149872428',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> TOULOUSE TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82090256579',
          image:
            'https://shopping-phinf.pstatic.net/main_8209025/82090256579.jpg',
          lprice: '256430',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82090256579',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> EDIE TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82068551026',
          image:
            'https://shopping-phinf.pstatic.net/main_8206855/82068551026.jpg',
          lprice: '306930',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82068551026',
          productType: '2'
        },
        {
          title: '<b>Doen</b> 블라우스 <b>Doen</b> FRANCES TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=81821793302',
          image:
            'https://shopping-phinf.pstatic.net/main_8182179/81821793302.1.jpg',
          lprice: '270570',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '81821793302',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 블라우스 <b>DOEN</b> BRIDGER TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82146380846',
          image:
            'https://shopping-phinf.pstatic.net/main_8214638/82146380846.jpg',
          lprice: '406920',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82146380846',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 블라우스 SOURCE EMBROIDERED',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82138804337',
          image:
            'https://shopping-phinf.pstatic.net/main_8213880/82138804337.jpg',
          lprice: '363490',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82138804337',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> ACACIA TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82106721991',
          image:
            'https://shopping-phinf.pstatic.net/main_8210672/82106721991.jpg',
          lprice: '213000',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82106721991',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> AMARANTH TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82068566131',
          image:
            'https://shopping-phinf.pstatic.net/main_8206856/82068566131.jpg',
          lprice: '256430',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82068566131',
          productType: '2'
        },
        {
          title: '<b>Doen</b> 블라우스 <b>Doen</b> HORTENSE TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=81970523458',
          image:
            'https://shopping-phinf.pstatic.net/main_8197052/81970523458.jpg',
          lprice: '248520',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '81970523458',
          productType: '2'
        },
        {
          title: '<b>DOEN</b> 도엔 블라우스 / 스퀘어넥 <b>DOEN</b> LEON TOP',
          link: 'https://search.shopping.naver.com/gate.nhn?id=82106731716',
          image:
            'https://shopping-phinf.pstatic.net/main_8210673/82106731716.jpg',
          lprice: '229160',
          hprice: '0',
          mallName: 'IM인터내셔널',
          productId: '82106731716',
          productType: '2'
        },
        {
          title:
            '<b>DOEN</b> 여성 티어드 플로럴 프린트 맥시 원피스 핑크 Multicolored',
          link: 'https://search.shopping.naver.com/gate.nhn?id=19404481213',
          image:
            'https://shopping-phinf.pstatic.net/main_1940448/19404481213.2.jpg',
          lprice: '273000',
          hprice: '0',
          mallName: '발란',
          productId: '19404481213',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Bianca Pant',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592236',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592236.1.jpg',
          lprice: '241900',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592236',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Valentin Pant',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592237',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592237.1.jpg',
          lprice: '227500',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592237',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Persimmon Sweater',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887591980',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887591980.1.jpg',
          lprice: '872600',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887591980',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Maritime Jean',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592270',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592270.1.jpg',
          lprice: '241900',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592270',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Lane Short',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592271',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592271.1.jpg',
          lprice: '213000',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592271',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Martin Sweater',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887591987',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887591987.1.jpg',
          lprice: '872600',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887591987',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Riviera Pant',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21887592189',
          image:
            'https://shopping-phinf.pstatic.net/main_2188759/21887592189.1.jpg',
          lprice: '270900',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21887592189',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Field Sweater',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335667',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335667.1.jpg',
          lprice: '700500',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335667',
          productType: '2'
        },
        {
          title: '[<b>DOEN</b>][도엔] Julep Skirt',
          link: 'https://search.shopping.naver.com/gate.nhn?id=21391335654',
          image:
            'https://shopping-phinf.pstatic.net/main_2139133/21391335654.1.jpg',
          lprice: '574900',
          hprice: '0',
          mallName: '위즈위드',
          productId: '21391335654',
          productType: '2'
        }
      ]
    };

    setShoppedItem(shoppedItem.concat(superItem.items));
    setIsLoading(false);
  };
  useEffect(getItem, []);
  return (
    <div className="shop-component">
      <div className="box1">
        <h1>SHOP</h1>
        <p>SEE OUR FANCY PRODUCTS</p>
      </div>
      <ShopFilter />
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>{' '}
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <div className="items">
            {shoppedItem.map(i => (
              <ItemCard
                key={i.productId}
                productId={i.productId}
                title={i.title}
                lprice={i.lprice}
                image={i.image}
                link={i.link}
                mallName={i.mallName}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
