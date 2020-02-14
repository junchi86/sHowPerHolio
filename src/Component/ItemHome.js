import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemHome.css";
import { Spin, Icon } from "antd";
import ItemCard from "./ItemCard/ItemCard";

function ItemHome() {
  const initialState = { shop: [], loading: true };
  const [shoppedItem, setShoppedItem] = useState(initialState.shop);
  const [isLoading, setIsLoading] = useState(initialState.loading);
  const antIcon = <Icon type="loading" style={{ fontSize: 35 }} spin />;
  const getItem = () => {
    const superItem = {
      lastBuildDate: "Fri, 14 Feb 2020 14:48:53 +0900",
      total: 9215,
      start: 1,
      display: 100,
      items: [
        {
          title: "<b>체리코코</b> 슬림 라인 원피스 도톰 V넥 C909PAOP11 I1-2-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=21404293677",
          image:
            "https://shopping-phinf.pstatic.net/main_2140429/21404293677.20191128163927.jpg",
          lprice: "22170",
          hprice: "27200",
          mallName: "네이버",
          productId: "21404293677",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 스트로베리 패턴 니트 캐주얼 C911MSKN18 S1-4-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21708175648",
          image:
            "https://shopping-phinf.pstatic.net/main_2170817/21708175648.20200110011127.jpg",
          lprice: "20290",
          hprice: "26460",
          mallName: "네이버",
          productId: "21708175648",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 코아 입술넥 니트",
          link: "https://search.shopping.naver.com/gate.nhn?id=21536750845",
          image:
            "https://shopping-phinf.pstatic.net/main_2153675/21536750845.20191216175434.jpg",
          lprice: "13600",
          hprice: "16000",
          mallName: "네이버",
          productId: "21536750845",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 로르 핀턱 원피스 체크 하프넥",
          link: "https://search.shopping.naver.com/gate.nhn?id=21522696025",
          image:
            "https://shopping-phinf.pstatic.net/main_2152269/21522696025.20191214173241.jpg",
          lprice: "39900",
          hprice: "51870",
          mallName: "네이버",
          productId: "21522696025",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 베이직 라운드 니트 자체제작 베이직 라운드넥 C812PAKN9 I2-5-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21875198065",
          image:
            "https://shopping-phinf.pstatic.net/main_2187519/21875198065.20200201163740.jpg",
          lprice: "22590",
          hprice: "27000",
          mallName: "네이버",
          productId: "21875198065",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 에나 케이블 니트 클래식 심플 C2001SYKN5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21930385972",
          image:
            "https://shopping-phinf.pstatic.net/main_2193038/21930385972.20200209155152.jpg",
          lprice: "18670",
          hprice: "22330",
          mallName: "네이버",
          productId: "21930385972",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 체크 롱셔츠원피스 내추럴 여유 차분함 C907MAOP3",
          link: "https://search.shopping.naver.com/gate.nhn?id=20916571412",
          image:
            "https://shopping-phinf.pstatic.net/main_2091657/20916571412.20190920150345.jpg",
          lprice: "39900",
          hprice: "55860",
          mallName: "네이버",
          productId: "20916571412",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 스트링 니트 원피스 단정 깔끔 C909PAOP1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21490087431",
          image:
            "https://shopping-phinf.pstatic.net/main_2149008/21490087431.20191213004841.jpg",
          lprice: "21700",
          hprice: "24800",
          mallName: "네이버",
          productId: "21490087431",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 드로잉 롱 스커트 캐주얼 내추럴 C912HSSK9 M1-3-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21911774743",
          image:
            "https://shopping-phinf.pstatic.net/main_2191177/21911774743.20200206200821.jpg",
          lprice: "28630",
          hprice: "34560",
          mallName: "네이버",
          productId: "21911774743",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 테일 롱 스커트 A라인 깔끔 C2001SYSK7 M2-6-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21918516771",
          image:
            "https://shopping-phinf.pstatic.net/main_2191851/21918516771.20200207164359.jpg",
          lprice: "14780",
          hprice: "17710",
          mallName: "네이버",
          productId: "21918516771",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 베러덴 체크 원피스 모던 빈티지 C912PAOP25 E2-1-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21911722670",
          image:
            "https://shopping-phinf.pstatic.net/main_2191172/21911722670.20200207013850.jpg",
          lprice: "35910",
          hprice: "41280",
          mallName: "네이버",
          productId: "21911722670",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 슬림 플레어 니트원피스 자체제작 골지 플레어",
          link: "https://search.shopping.naver.com/gate.nhn?id=20820779717",
          image:
            "https://shopping-phinf.pstatic.net/main_2082077/20820779717.20190905144656.jpg",
          lprice: "31510",
          hprice: "39000",
          mallName: "네이버",
          productId: "20820779717",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 주름 스커트 롱스커트 플리츠 밴딩 하이웨스트 C902SYSK231 L2-5-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21880242122",
          image:
            "https://shopping-phinf.pstatic.net/main_2188024/21880242122.20200202154514.jpg",
          lprice: "30960",
          hprice: "37000",
          mallName: "네이버",
          productId: "21880242122",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 캐주얼 멜빵 원피스 걸리시 블랙진 멜빵 C907MSOP15 H1-5-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=20754162415",
          image:
            "https://shopping-phinf.pstatic.net/main_2075416/20754162415.20190827151211.jpg",
          lprice: "36810",
          hprice: "49000",
          mallName: "네이버",
          productId: "20754162415",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 코지 플리츠 롱 원피스",
          link: "https://search.shopping.naver.com/gate.nhn?id=21513192077",
          image:
            "https://shopping-phinf.pstatic.net/main_2151319/21513192077.20191213113517.jpg",
          lprice: "45570",
          hprice: "49000",
          mallName: "네이버",
          productId: "21513192077",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 데어 오프 스커트 A라인 차분 C911SYSK37 F2-3-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21776571869",
          image:
            "https://shopping-phinf.pstatic.net/main_2177657/21776571869.20200117163339.jpg",
          lprice: "21790",
          hprice: "28420",
          mallName: "네이버",
          productId: "21776571869",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 조이 플라워 니트 빈티지 C912PAKN2 H1-5-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=21769558521",
          image:
            "https://shopping-phinf.pstatic.net/main_2176955/21769558521.20200116164758.jpg",
          lprice: "29300",
          hprice: "38220",
          mallName: "네이버",
          productId: "21769558521",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 심플 투유 피치 스커트 치마바지 깔끔",
          link: "https://search.shopping.naver.com/gate.nhn?id=21716708562",
          image:
            "https://shopping-phinf.pstatic.net/main_2171670/21716708562.20200108195040.jpg",
          lprice: "19850",
          hprice: "25000",
          mallName: "네이버",
          productId: "21716708562",
          productType: "1"
        },
        {
          title: "로니 플라워 원피스",
          link: "https://search.shopping.naver.com/gate.nhn?id=82333856281",
          image:
            "https://shopping-phinf.pstatic.net/main_8233385/82333856281.jpg",
          lprice: "30690",
          hprice: "0",
          mallName: "체리코코",
          productId: "82333856281",
          productType: "2"
        },
        {
          title:
            "<b>체리코코</b> 프릴 슬림 니트 원피스 A라인 캐주얼 C912YLOP7 Q2-7-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21787558159",
          image:
            "https://shopping-phinf.pstatic.net/main_2178755/21787558159.20200119150431.jpg",
          lprice: "22540",
          hprice: "29400",
          mallName: "네이버",
          productId: "21787558159",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 올리버 컬러하찌 니트 울50 데일리 C911MSNA1 I2-5-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21708100718",
          image:
            "https://shopping-phinf.pstatic.net/main_2170810/21708100718.20200107164219.jpg",
          lprice: "21700",
          hprice: "28420",
          mallName: "네이버",
          productId: "21708100718",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 베니 롱 스커트 슬림 H라인 C907PASK8 R1-3-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=20890417040",
          image:
            "https://shopping-phinf.pstatic.net/main_2089041/20890417040.20190917134602.jpg",
          lprice: "20290",
          hprice: "27000",
          mallName: "네이버",
          productId: "20890417040",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 모먼트 미디 스커트 H라인 C912PASK6 E2-2-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21829778242",
          image:
            "https://shopping-phinf.pstatic.net/main_2182977/21829778242.20200127145106.jpg",
          lprice: "18900",
          hprice: "23090",
          mallName: "네이버",
          productId: "21829778242",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 스퀘어 니트 스퀘어넥니트 슬림 일자핏 7부",
          link: "https://search.shopping.naver.com/gate.nhn?id=21826395441",
          image:
            "https://shopping-phinf.pstatic.net/main_2182639/21826395441.20200126171058.jpg",
          lprice: "15980",
          hprice: "19000",
          mallName: "네이버",
          productId: "21826395441",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 마레 카라 니트 원피스 캐주얼 내추럴 C909PAOP26 Q2-4-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21337496305",
          image:
            "https://shopping-phinf.pstatic.net/main_2133749/21337496305.20191119170558.jpg",
          lprice: "26670",
          hprice: "39000",
          mallName: "네이버",
          productId: "21337496305",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 피치 셔츠 원피스 베이직 C911SYOP21 H2-2-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21738339819",
          image:
            "https://shopping-phinf.pstatic.net/main_2173833/21738339819.20200111173227.jpg",
          lprice: "20290",
          hprice: "23760",
          mallName: "네이버",
          productId: "21738339819",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 라방 트위드 원피스 H라인 슬림 C911YLOP9 L2-1-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21576912834",
          image:
            "https://shopping-phinf.pstatic.net/main_2157691/21576912834.20191221170859.jpg",
          lprice: "47870",
          hprice: "56000",
          mallName: "네이버",
          productId: "21576912834",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 브이 핀턱 원피스 여유 슬림",
          link: "https://search.shopping.naver.com/gate.nhn?id=21609288131",
          image:
            "https://shopping-phinf.pstatic.net/main_2160928/21609288131.20191226172734.jpg",
          lprice: "30320",
          hprice: "32300",
          mallName: "네이버",
          productId: "21609288131",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 스윗 케이블 니트 빈티지 유니크 C909PAKN4 Q1-4-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21404163443",
          image:
            "https://shopping-phinf.pstatic.net/main_2140416/21404163443.20191128162155.jpg",
          lprice: "25480",
          hprice: "32000",
          mallName: "네이버",
          productId: "21404163443",
          productType: "1"
        },
        {
          title:
            "[<b>체리코코</b>][롯데백화점]트위드 체크 스커트(C912PASK2)/세련/깔끔(F2-5-5)",
          link: "https://search.shopping.naver.com/gate.nhn?id=21952646388",
          image:
            "https://shopping-phinf.pstatic.net/main_2195264/21952646388.jpg",
          lprice: "24800",
          hprice: "0",
          mallName: "롯데닷컴",
          productId: "21952646388",
          productType: "2"
        },
        {
          title:
            "<b>체리코코</b> 데일리 포근 니트 베이직 데일리 C907PSKN3 Q1-5-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=20908749352",
          image:
            "https://shopping-phinf.pstatic.net/main_2090874/20908749352.20191210035217.jpg",
          lprice: "22380",
          hprice: "32160",
          mallName: "네이버",
          productId: "20908749352",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 포켓 밴딩 스커트 캐주얼 넉넉 C907PSSK6 Q1-6-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=20890172878",
          image:
            "https://shopping-phinf.pstatic.net/main_2089017/20890172878.20190917131345.jpg",
          lprice: "30800",
          hprice: "41000",
          mallName: "네이버",
          productId: "20890172878",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 레타 트위드 원피스 단정 깔끔 C911PSOP13 L1-7-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=21577030043",
          image:
            "https://shopping-phinf.pstatic.net/main_2157703/21577030043.20191221173033.jpg",
          lprice: "44320",
          hprice: "59000",
          mallName: "네이버",
          productId: "21577030043",
          productType: "1"
        },
        {
          title: "[<b>체리코코</b>] 첼스 레이스 원피스/데일리/단정",
          link: "https://search.shopping.naver.com/gate.nhn?id=21937991722",
          image:
            "https://shopping-phinf.pstatic.net/main_2193799/21937991722.1.jpg",
          lprice: "40420",
          hprice: "0",
          mallName: "11번가",
          productId: "21937991722",
          productType: "2"
        },
        {
          title:
            "<b>체리코코</b> los dos knit 반팔니트 벌룬 슬림 스판 C807MSKN60 I1-2-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21010361177",
          image:
            "https://shopping-phinf.pstatic.net/main_2101036/21010361177.20191008040922.jpg",
          lprice: "18830",
          hprice: "25000",
          mallName: "네이버",
          productId: "21010361177",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 슬림 골지 니트 자체제작 봄신상 골지 시보리 C812YEKN2 H2-4-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21361358574",
          image:
            "https://shopping-phinf.pstatic.net/main_2136135/21361358574.20191122145725.jpg",
          lprice: "21070",
          hprice: "29000",
          mallName: "네이버",
          productId: "21361358574",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 로나 스트랩 원피스 보온 편안함",
          link: "https://search.shopping.naver.com/gate.nhn?id=21522988295",
          image:
            "https://shopping-phinf.pstatic.net/main_2152298/21522988295.20191214182223.jpg",
          lprice: "31170",
          hprice: "39000",
          mallName: "네이버",
          productId: "21522988295",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 모어덴 원피스 기모안감 데일리 내추럴 C912PAOP24 F1-6-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21787722323",
          image:
            "https://shopping-phinf.pstatic.net/main_2178772/21787722323.20200119154121.jpg",
          lprice: "26300",
          hprice: "35000",
          mallName: "네이버",
          productId: "21787722323",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 마인 베이직 니트 라운드넥 C912PAKN8 F1-5-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21769625722",
          image:
            "https://shopping-phinf.pstatic.net/main_2176962/21769625722.20200117044805.jpg",
          lprice: "29300",
          hprice: "39000",
          mallName: "네이버",
          productId: "21769625722",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 뮬리 알파카 니트 캐주얼 데일리 C911SYKN41 H1-1-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21742306427",
          image:
            "https://shopping-phinf.pstatic.net/main_2174230/21742306427.20200112180304.jpg",
          lprice: "30330",
          hprice: "39000",
          mallName: "네이버",
          productId: "21742306427",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 바이 데님 스커트 베이직 캐주얼 C2001YLSK5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21925625339",
          image:
            "https://shopping-phinf.pstatic.net/main_2192562/21925625339.20200208164012.jpg",
          lprice: "18670",
          hprice: "22320",
          mallName: "네이버",
          productId: "21925625339",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 브이 루즈 니트 내추럴 V넥 C912YLKN2 E1-2-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21762321697",
          image:
            "https://shopping-phinf.pstatic.net/main_2176232/21762321697.20200115182801.jpg",
          lprice: "22560",
          hprice: "29000",
          mallName: "네이버",
          productId: "21762321697",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 세이지 보트넥 니트 데일리 C911MSKN21 S2-7-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21738322980",
          image:
            "https://shopping-phinf.pstatic.net/main_2173832/21738322980.20200111172754.jpg",
          lprice: "21790",
          hprice: "29000",
          mallName: "네이버",
          productId: "21738322980",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 핀턱 미디 스커트 유니크 베이직 C911SYSK48 H2-6-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=21820249170",
          image:
            "https://shopping-phinf.pstatic.net/main_2182024/21820249170.20200124164804.jpg",
          lprice: "29300",
          hprice: "37440",
          mallName: "네이버",
          productId: "21820249170",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 심플 헤어리 니트 데일리 C911SYKN56 H1-3-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21738546089",
          image:
            "https://shopping-phinf.pstatic.net/main_2173854/21738546089.20200210044235.jpg",
          lprice: "14720",
          hprice: "19000",
          mallName: "네이버",
          productId: "21738546089",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 매치 셔츠 원피스 A라인 C912PAOP10 H1-7-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21769729947",
          image:
            "https://shopping-phinf.pstatic.net/main_2176972/21769729947.20200116170210.jpg",
          lprice: "27790",
          hprice: "37000",
          mallName: "네이버",
          productId: "21769729947",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> telacuti skirt 트임 미니 하이웨스트 H라인 스커트 치마",
          link: "https://search.shopping.naver.com/gate.nhn?id=82267022693",
          image:
            "https://shopping-phinf.pstatic.net/main_8226702/82267022693.jpg",
          lprice: "19750",
          hprice: "0",
          mallName: "노멀데이",
          productId: "82267022693",
          productType: "2"
        },
        {
          title: "<b>체리코코</b> 심플 폴라 니트 V넥 C911SYKN35 K1-1-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21561742883",
          image:
            "https://shopping-phinf.pstatic.net/main_2156174/21561742883.20191219170029.jpg",
          lprice: "23800",
          hprice: "33320",
          mallName: "네이버",
          productId: "21561742883",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 노티드 원피스 셔츠원피스 깔끔 C907PAOP7",
          link: "https://search.shopping.naver.com/gate.nhn?id=21144683061",
          image:
            "https://shopping-phinf.pstatic.net/main_2114468/21144683061.20191023212356.jpg",
          lprice: "24790",
          hprice: "33000",
          mallName: "네이버",
          productId: "21144683061",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 브라우니 퍼프 니트 슬림 C912YLKN5 H2-6-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21762157100",
          image:
            "https://shopping-phinf.pstatic.net/main_2176215/21762157100.20200115180802.jpg",
          lprice: "23290",
          hprice: "31000",
          mallName: "네이버",
          productId: "21762157100",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 니쥬 크롭 니트 편안함 프리사이즈 루즈핏 C905MAKN4 R1-1-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=20890542395",
          image:
            "https://shopping-phinf.pstatic.net/main_2089054/20890542395.20190917140903.jpg",
          lprice: "27680",
          hprice: "37000",
          mallName: "네이버",
          productId: "20890542395",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> <b>CHERRYKOKO</b> 레이 셔츠 원피스 셔츠원피스 플레어 오버핏 끈세트",
          link: "https://search.shopping.naver.com/gate.nhn?id=21826063640",
          image:
            "https://shopping-phinf.pstatic.net/main_2182606/21826063640.20200126155757.jpg",
          lprice: "20020",
          hprice: "25000",
          mallName: "네이버",
          productId: "21826063640",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 크롭 꽈배기 폴라 니트 라운드넥 캐주얼 C911SYKN57 H1-3-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21738237685",
          image:
            "https://shopping-phinf.pstatic.net/main_2173823/21738237685.20200111171231.jpg",
          lprice: "18900",
          hprice: "28270",
          mallName: "네이버",
          productId: "21738237685",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 와인드 폴라 니트 베이직 C911MSKN23 S2-7-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21725550077",
          image:
            "https://shopping-phinf.pstatic.net/main_2172555/21725550077.20200128030623.jpg",
          lprice: "21790",
          hprice: "28420",
          mallName: "네이버",
          productId: "21725550077",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 파인드 꽈배기 니트 베이직 C911MSKN20 G2-4-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21671363339",
          image:
            "https://shopping-phinf.pstatic.net/main_2167136/21671363339.20200106213008.jpg",
          lprice: "23940",
          hprice: "32000",
          mallName: "네이버",
          productId: "21671363339",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 모디 체크 원피스 A라인 C911SYOP18 F1-4-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21671401545",
          image:
            "https://shopping-phinf.pstatic.net/main_2167140/21671401545.20200106214104.jpg",
          lprice: "24790",
          hprice: "33000",
          mallName: "네이버",
          productId: "21671401545",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 소프트 플라워 니트 빈티지 라운드넥",
          link: "https://search.shopping.naver.com/gate.nhn?id=21404771202",
          image:
            "https://shopping-phinf.pstatic.net/main_2140477/21404771202.20191128172729.jpg",
          lprice: "21450",
          hprice: "22950",
          mallName: "네이버",
          productId: "21404771202",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 로미 꽈배기 니트 베이직 C911SYKN48 E2-5-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21723490913",
          image:
            "https://shopping-phinf.pstatic.net/main_2172349/21723490913.20200109182115.jpg",
          lprice: "25520",
          hprice: "28050",
          mallName: "네이버",
          productId: "21723490913",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 앤드 핀턱 라인 원피스 독특 간절기 C905MAOP6 I2-4-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=20770989455",
          image:
            "https://shopping-phinf.pstatic.net/main_2077098/20770989455.20190829152838.jpg",
          lprice: "36810",
          hprice: "64320",
          mallName: "네이버",
          productId: "20770989455",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 메이지 라인 스커트 데일리 캐주얼 C911SYSK38 M2-3-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21715103376",
          image:
            "https://shopping-phinf.pstatic.net/main_2171510/21715103376.20200108172226.jpg",
          lprice: "18780",
          hprice: "25000",
          mallName: "네이버",
          productId: "21715103376",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 패턴 니트 라운드넥 유니크 C910KN3 R1-5-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21470193791",
          image:
            "https://shopping-phinf.pstatic.net/main_2147019/21470193791.20191207174849.jpg",
          lprice: "27300",
          hprice: "38220",
          mallName: "네이버",
          productId: "21470193791",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 리멤버 도트 원피스 도트 데일리 C907SYOP6 S2-3-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=20820850970",
          image:
            "https://shopping-phinf.pstatic.net/main_2082085/20820850970.20190905145319.jpg",
          lprice: "30330",
          hprice: "45500",
          mallName: "네이버",
          productId: "20820850970",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 퍼프 라운드니트 라운드넥 슬림 C907MAKN2",
          link: "https://search.shopping.naver.com/gate.nhn?id=20908317563",
          image:
            "https://shopping-phinf.pstatic.net/main_2090831/20908317563.20190919150539.jpg",
          lprice: "24790",
          hprice: "35140",
          mallName: "네이버",
          productId: "20908317563",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 센느 울 스커트 슬림 내추럴 C909MASK9",
          link: "https://search.shopping.naver.com/gate.nhn?id=21463846050",
          image:
            "https://shopping-phinf.pstatic.net/main_2146384/21463846050.20191216023210.jpg",
          lprice: "27300",
          hprice: "37440",
          mallName: "네이버",
          productId: "21463846050",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 드로잉 라운드 니트 여유 넉넉",
          link: "https://search.shopping.naver.com/gate.nhn?id=21708088500",
          image:
            "https://shopping-phinf.pstatic.net/main_2170808/21708088500.20200107163904.jpg",
          lprice: "32950",
          hprice: "35700",
          mallName: "네이버",
          productId: "21708088500",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 니쥬 크롭 니트",
          link: "https://search.shopping.naver.com/gate.nhn?id=21507090836",
          image:
            "https://shopping-phinf.pstatic.net/main_2150709/21507090836.20191227153413.jpg",
          lprice: "37000",
          hprice: "37000",
          mallName: "네이버",
          productId: "21507090836",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 키엘 골지 니트 세련 C911SYKN55 E2-6-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21742384933",
          image:
            "https://shopping-phinf.pstatic.net/main_2174238/21742384933.20200113010554.jpg",
          lprice: "15780",
          hprice: "21000",
          mallName: "네이버",
          productId: "21742384933",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 헤링본 미니 스커트 A라인 단정 C909MASK4 S2-3-5",
          link: "https://search.shopping.naver.com/gate.nhn?id=21601788676",
          image:
            "https://shopping-phinf.pstatic.net/main_2160178/21601788676.20191225182728.jpg",
          lprice: "29870",
          hprice: "36260",
          mallName: "네이버",
          productId: "21601788676",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 콤마 뽀글이 니트 베이직 캐주얼 C911MSKN22 G2-3-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21671254981",
          image:
            "https://shopping-phinf.pstatic.net/main_2167125/21671254981.20200107004238.jpg",
          lprice: "24040",
          hprice: "32000",
          mallName: "네이버",
          productId: "21671254981",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 멜트 프릴 원피스 캐주얼 C909PAOP23 R2-7-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21601758548",
          image:
            "https://shopping-phinf.pstatic.net/main_2160175/21601758548.20191225182131.jpg",
          lprice: "27570",
          hprice: "36310",
          mallName: "네이버",
          productId: "21601758548",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> em know skirt",
          link: "https://search.shopping.naver.com/gate.nhn?id=21533409370",
          image:
            "https://shopping-phinf.pstatic.net/main_2153340/21533409370.20191216104424.jpg",
          lprice: "17500",
          hprice: "17500",
          mallName: "네이버",
          productId: "21533409370",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 썸제이 니트 베이직 캐주얼 C911MSKN24 G1-4-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21671278350",
          image:
            "https://shopping-phinf.pstatic.net/main_2167127/21671278350.20200106210622.jpg",
          lprice: "29300",
          hprice: "38220",
          mallName: "네이버",
          productId: "21671278350",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 크런치 초코 원피스 슬림 캐주얼 C909MAOP13 R1-2-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21286872701",
          image:
            "https://shopping-phinf.pstatic.net/main_2128687/21286872701.20191112182042.jpg",
          lprice: "40290",
          hprice: "57000",
          mallName: "네이버",
          productId: "21286872701",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 로이즈 원피스 모던 프리사이즈 C907MSOP60 R2-3-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=20827890297",
          image:
            "https://shopping-phinf.pstatic.net/main_2082789/20827890297.20190906143842.jpg",
          lprice: "18030",
          hprice: "24000",
          mallName: "네이버",
          productId: "20827890297",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 어반 크롭 니트 보온 부드러움 C909PSKN7 Q1-4-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=20993854425",
          image:
            "https://shopping-phinf.pstatic.net/main_2099385/20993854425.20191001160833.jpg",
          lprice: "25900",
          hprice: "35520",
          mallName: "네이버",
          productId: "20993854425",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 슬림 골지 니트스커트 자체제작 니트스커트 밴딩 C812YESK1 L1-5-4",
          link: "https://search.shopping.naver.com/gate.nhn?id=21902809826",
          image:
            "https://shopping-phinf.pstatic.net/main_2190280/21902809826.20200206031028.jpg",
          lprice: "22590",
          hprice: "27000",
          mallName: "네이버",
          productId: "21902809826",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 웨이브 라운드 니트 유니크 라운드넥 C909PAKN51 Q2-4-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=21404672723",
          image:
            "https://shopping-phinf.pstatic.net/main_2140467/21404672723.20191128171614.jpg",
          lprice: "21790",
          hprice: "29000",
          mallName: "네이버",
          productId: "21404672723",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 페미닌 라인 원피스 니트 A라인 라운드넥 C909PSOP5 P2-3-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=20993947730",
          image:
            "https://shopping-phinf.pstatic.net/main_2099394/20993947730.20191001161807.jpg",
          lprice: "31360",
          hprice: "41000",
          mallName: "네이버",
          productId: "20993947730",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> alpaca lovering knit",
          link: "https://search.shopping.naver.com/gate.nhn?id=21513314328",
          image:
            "https://shopping-phinf.pstatic.net/main_2151331/21513314328.20191213113731.jpg",
          lprice: "31500",
          hprice: "31500",
          mallName: "네이버",
          productId: "21513314328",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 세이드 벨트 스커트 A라인 캐주얼 C909PASK24 I2-2-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=21470161705",
          image:
            "https://shopping-phinf.pstatic.net/main_2147016/21470161705.20191207173626.jpg",
          lprice: "26300",
          hprice: "35000",
          mallName: "네이버",
          productId: "21470161705",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 체크 뮤즈 원피스 클래식 스판 C907PAOP5 R2-3-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=20943644037",
          image:
            "https://shopping-phinf.pstatic.net/main_2094364/20943644037.20190924145441.jpg",
          lprice: "21790",
          hprice: "29000",
          mallName: "네이버",
          productId: "20943644037",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 글루밍 소프트 니트 루즈 C912PAKN3 H1-7-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21820120100",
          image:
            "https://shopping-phinf.pstatic.net/main_2182012/21820120100.20200124162313.jpg",
          lprice: "24790",
          hprice: "32340",
          mallName: "네이버",
          productId: "21820120100",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> meltingly skirt",
          link: "https://search.shopping.naver.com/gate.nhn?id=21534732243",
          image:
            "https://shopping-phinf.pstatic.net/main_2153473/21534732243.20191216150526.jpg",
          lprice: "21700",
          hprice: "21700",
          mallName: "네이버",
          productId: "21534732243",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 마론 니트 원피스 여유 베이직 C910OP2 I1-5-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=21469927679",
          image:
            "https://shopping-phinf.pstatic.net/main_2146992/21469927679.20191207163117.jpg",
          lprice: "29300",
          hprice: "37440",
          mallName: "네이버",
          productId: "21469927679",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 심플 네이미 라인 니트 베이직 C911SYKN38 G2-4-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21737957982",
          image:
            "https://shopping-phinf.pstatic.net/main_2173795/21737957982.20200111162931.jpg",
          lprice: "27300",
          hprice: "37440",
          mallName: "네이버",
          productId: "21737957982",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 샌느 니트 원피스 내추럴 C909PAOP22 P2-7-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21404587903",
          image:
            "https://shopping-phinf.pstatic.net/main_2140458/21404587903.20191128170723.jpg",
          lprice: "23060",
          hprice: "24650",
          mallName: "네이버",
          productId: "21404587903",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 딥 플레어스커트 빈티지 날씬 C907MASK4",
          link: "https://search.shopping.naver.com/gate.nhn?id=20908557560",
          image:
            "https://shopping-phinf.pstatic.net/main_2090855/20908557560.20190919152716.jpg",
          lprice: "30100",
          hprice: "42140",
          mallName: "네이버",
          productId: "20908557560",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 헤이즈 스커트 플라워스커트 쉬폰 플리츠 롱",
          link: "https://search.shopping.naver.com/gate.nhn?id=21829835150",
          image:
            "https://shopping-phinf.pstatic.net/main_2182983/21829835150.20200127150414.jpg",
          lprice: "22840",
          hprice: "24300",
          mallName: "네이버",
          productId: "21829835150",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 하찌 라운드 니트 여리여리 루즈 크롭 C905MAKN6 R1-7-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=20753701361",
          image:
            "https://shopping-phinf.pstatic.net/main_2075370/20753701361.20190827143458.jpg",
          lprice: "23010",
          hprice: "49400",
          mallName: "네이버",
          productId: "20753701361",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 플리츠 미니 스커트 부드러움 내추럴 C907MSSK43 L1-3-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=20785192904",
          image:
            "https://shopping-phinf.pstatic.net/main_2078519/20785192904.20191123025503.jpg",
          lprice: "28550",
          hprice: "38000",
          mallName: "네이버",
          productId: "20785192904",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> <b>CHERRYKOKO</b> 슬림 골지 니트 자체제작 봄신상 골지 시보리",
          link: "https://search.shopping.naver.com/gate.nhn?id=21823388571",
          image:
            "https://shopping-phinf.pstatic.net/main_2182338/21823388571.20200125163954.jpg",
          lprice: "24500",
          hprice: "26100",
          mallName: "네이버",
          productId: "21823388571",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 세미 체크 스커트 슬림 A라인 C907SYSK16 L1-1-1",
          link: "https://search.shopping.naver.com/gate.nhn?id=20828056637",
          image:
            "https://shopping-phinf.pstatic.net/main_2082805/20828056637.20190906144400.jpg",
          lprice: "27040",
          hprice: "34560",
          mallName: "네이버",
          productId: "20828056637",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 퍼블릭 데님 스커트 하이웨스트 밑단컷팅 연청",
          link: "https://search.shopping.naver.com/gate.nhn?id=21829857679",
          image:
            "https://shopping-phinf.pstatic.net/main_2182985/21829857679.20200127150856.jpg",
          lprice: "22210",
          hprice: "27000",
          mallName: "네이버",
          productId: "21829857679",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 베이글 레이스 스커트 데일리 깔끔 C2001YLSK33",
          link: "https://search.shopping.naver.com/gate.nhn?id=21964423478",
          image:
            "https://shopping-phinf.pstatic.net/main_2196442/21964423478.20200214010009.jpg",
          lprice: "25450",
          hprice: "32000",
          mallName: "네이버",
          productId: "21964423478",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 서클 포인트 스커트 A라인 유니크 C2001YLSK13 P1-5-2",
          link: "https://search.shopping.naver.com/gate.nhn?id=21964578199",
          image:
            "https://shopping-phinf.pstatic.net/main_2196457/21964578199.20200213212307.jpg",
          lprice: "33400",
          hprice: "42000",
          mallName: "네이버",
          productId: "21964578199",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 하찌 크림 니트 캐주얼 데일리 C909PAKN54 Q2-3-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21470002776",
          image:
            "https://shopping-phinf.pstatic.net/main_2147000/21470002776.20191211031910.jpg",
          lprice: "29300",
          hprice: "39000",
          mallName: "네이버",
          productId: "21470002776",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> 컬러 체크 스커트 단정 H라인",
          link: "https://search.shopping.naver.com/gate.nhn?id=21820215454",
          image:
            "https://shopping-phinf.pstatic.net/main_2182021/21820215454.20200124163954.jpg",
          lprice: "27110",
          hprice: "29750",
          mallName: "네이버",
          productId: "21820215454",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> basic moderning knit 제작니트 기본 라운드넥",
          link: "https://search.shopping.naver.com/gate.nhn?id=21820598878",
          image:
            "https://shopping-phinf.pstatic.net/main_2182059/21820598878.20200125015907.jpg",
          lprice: "21590",
          hprice: "25650",
          mallName: "네이버",
          productId: "21820598878",
          productType: "1"
        },
        {
          title: "<b>체리코코</b> puree skirt",
          link: "https://search.shopping.naver.com/gate.nhn?id=21534761145",
          image:
            "https://shopping-phinf.pstatic.net/main_2153476/21534761145.20191216154223.jpg",
          lprice: "21000",
          hprice: "21000",
          mallName: "네이버",
          productId: "21534761145",
          productType: "1"
        },
        {
          title:
            "<b>체리코코</b> 콜미 뷔스티에 원피스 빈티지 캐주얼 C2001MSOP13 R1-4-3",
          link: "https://search.shopping.naver.com/gate.nhn?id=21964570586",
          image:
            "https://shopping-phinf.pstatic.net/main_2196457/21964570586.20200213212038.jpg",
          lprice: "32610",
          hprice: "41000",
          mallName: "네이버",
          productId: "21964570586",
          productType: "1"
        }
      ]
    };

    setShoppedItem(shoppedItem.concat(superItem.items));
    setIsLoading(false);
  };
  useEffect(getItem, []);
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>{" "}
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
  );
}

export default ItemHome;
