import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "antd/dist/antd.css";
import About from "./Component/About";
import Detail from "./Component/ItemCard/Detail";
import Main from "./Component/MainPage/Main";

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
        <Route exact path="/" component={Main}></Route>
        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route path="/item-detail/:productId" component={Detail}></Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
