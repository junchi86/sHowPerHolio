import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'antd/dist/antd.css';
import Detail from './Component/ItemCard/Detail';
import Main from './Component/MainPage/Main';
import New from './Component/MainPage/partials/New';
import LookBook from './Component/MainPage/partials/LookBook';
import Page1 from './Component/MainPage/partials/Page1';
import Shop from './Component/MainPage/partials/Shop';
import Collections from './Component/MainPage/partials/Collections';
import Footer from './Component/MainPage/partials/Footer';
import Help from './Component/MainPage/partials/Help';
import Login from './Component/MainPage/HeaderPartials/Login';
import Join from './Component/MainPage/HeaderPartials/Join';

const GlobalStyle = createGlobalStyle`
     ${reset};
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
         box-sizing:boerder-box;
     }
     body{
         font-family: 'Romanesco',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         font-size: 14px;
     }
`;

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Main}></Route>
        <Route exact path="/" component={Page1}></Route>
        <Switch>
          <Route exact path="/new" component={New}></Route>
          <Route exact path="/lookbook" component={LookBook}></Route>
          <Route path="/shop/:name" component={Shop}></Route>
          <Route exact path="/shop" component={Page1}></Route>
          <Route exact path="/collections" component={Collections}></Route>
          <Route exact path="/help" component={Help}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/join" component={Join}></Route>
          <Route path="/item-detail/:productId" component={Detail}></Route>
        </Switch>
        <Route path="/" component={Footer}></Route>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
