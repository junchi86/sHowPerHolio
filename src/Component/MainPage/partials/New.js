import React from 'react';
import NewSub from './NewSub';

function New() {
  const superItem = {
    lastBuildDate: 'Fri, 14 Feb 2020 18:34:45 +0900',
    total: 400,
    start: 1,
    display: 20,
    items: [
      {
        title: '[<b>DOEN</b>][도엔] Rose Top',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21391335785',
        image:
          'https://shopping-phinf.pstatic.net/main_2139133/21391335785.1.jpg',
        lprice: '227500',
        hprice: '0',
        mallName: '위즈위드',
        productId: '21391335785',
        productType: '2'
      },
      {
        title: '<b>DOEN</b> 도엔 블라우스 <b>DOEN</b> BEL TOP',
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
        title: '<b>DOEN</b> 여성 블라우스 Multicolored',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21806012939',
        image:
          'https://shopping-phinf.pstatic.net/main_2180601/21806012939.jpg',
        lprice: '360000',
        hprice: '0',
        mallName: '발란',
        productId: '21806012939',
        productType: '2'
      },
      {
        title:
          '<b>DOEN</b> Cezanne belted floral-print cotton-voile blouse 1230433',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21888857572',
        image:
          'https://shopping-phinf.pstatic.net/main_2188885/21888857572.jpg',
        lprice: '300800',
        hprice: '0',
        mallName: '유로망고',
        productId: '21888857572',
        productType: '2'
      },
      {
        title: '<b>DOEN</b> REINA TOP 1910000398',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21212697993',
        image:
          'https://shopping-phinf.pstatic.net/main_2121269/21212697993.20191101190736.jpg',
        lprice: '266700',
        hprice: '266900',
        mallName: '네이버',
        productId: '21212697993',
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
        title:
          '<b>DOEN</b> 블라우스 코튼 Atalia ruffled lace-trimmed Swiss-dot cotton blouse 1230434 16855051',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21588913784',
        image:
          'https://shopping-phinf.pstatic.net/main_2158891/21588913784.jpg',
        lprice: '477239',
        hprice: '0',
        mallName: '트렌비',
        productId: '21588913784',
        productType: '2'
      },
      {
        title: '<b>DOEN</b> 여성 블라우스 1230430',
        link: 'https://search.shopping.naver.com/gate.nhn?id=82345612845',
        image:
          'https://shopping-phinf.pstatic.net/main_8234561/82345612845.jpg',
        lprice: '367000',
        hprice: '0',
        mallName: 'BALAAN',
        productId: '82345612845',
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
        title: '[<b>DOEN</b>][도엔] The Jane Blouse',
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
        title: '<b>DOEN</b> 여성 블라우스 Dusty-pink Swiss-dot',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21749269359',
        image:
          'https://shopping-phinf.pstatic.net/main_2174926/21749269359.jpg',
        lprice: '484000',
        hprice: '0',
        mallName: '발란',
        productId: '21749269359',
        productType: '2'
      },
      {
        title:
          '<b>DOEN</b> Atalia ruffled lace-trimmed Swiss-dot cotton blouse 1230434',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21888857573',
        image:
          'https://shopping-phinf.pstatic.net/main_2188885/21888857573.jpg',
        lprice: '438300',
        hprice: '0',
        mallName: '유로망고',
        productId: '21888857573',
        productType: '2'
      },
      {
        title:
          '<b>DOEN</b> 블라우스 Austen ruffled floral-print cotton-corduroy blouse 1230435 16309455',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21435443106',
        image:
          'https://shopping-phinf.pstatic.net/main_2143544/21435443106.jpg',
        lprice: '325920',
        hprice: '0',
        mallName: '트렌비',
        productId: '21435443106',
        productType: '2'
      },
      {
        title:
          '<b>DOEN</b> 여성 Austen 러플 플로럴 프린트 코듀로이 블라우스 1230435',
        link: 'https://search.shopping.naver.com/gate.nhn?id=82303886804',
        image:
          'https://shopping-phinf.pstatic.net/main_8230388/82303886804.jpg',
        lprice: '343000',
        hprice: '0',
        mallName: 'BALAAN',
        productId: '82303886804',
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
        title: '[<b>DOEN</b>][도엔] Hortense Top',
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
          '<b>DOEN</b> 여성 Austen 러플 플로럴 프린트 코듀로이 블라우스 Multicolored',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21498427432',
        image:
          'https://shopping-phinf.pstatic.net/main_2149842/21498427432.jpg',
        lprice: '336000',
        hprice: '0',
        mallName: '발란',
        productId: '21498427432',
        productType: '2'
      },
      {
        title:
          '<b>DOEN</b> 블라우스 Cezanne belted floral-print cotton-voile blouse 1230433 15662688',
        link: 'https://search.shopping.naver.com/gate.nhn?id=21383413641',
        image:
          'https://shopping-phinf.pstatic.net/main_2138341/21383413641.jpg',
        lprice: '325920',
        hprice: '0',
        mallName: '트렌비',
        productId: '21383413641',
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
      }
    ]
  };

  const item = superItem.items;
  return (
    <div className="new-component">
      <div className="box1">
        <h1>NEW</h1>
        <p>SEE OUR NEW PRODUCT</p>
      </div>
      <div className="itemflex">
        <NewSub
          productId={item[5].productId}
          title="Happy Donabe Life with Naoko Takei Moore"
          lprice={item[5].lprice}
          image={item[5].image}
          link={item[5].link}
          mallName={item[5].mallName}
        />
        <NewSub
          productId={item[1].productId}
          title="BTS Spring 2020"
          lprice={item[1].lprice}
          image={item[1].image}
          link={item[1].link}
          mallName={item[1].mallName}
        />
        <NewSub
          productId={item[14].productId}
          title="Our Border Angels Drive"
          lprice={item[14].lprice}
          image={item[14].image}
          link={item[14].link}
          mallName={item[14].mallName}
        />
      </div>
    </div>
  );
}

export default New;
