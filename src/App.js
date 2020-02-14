import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ItemHome from "./Component/ItemHome";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "antd/dist/antd.css";
import About from "./Component/About";
import Detail from "./Component/ItemCard/Detail";
import Page1 from "./Component/partials/Page1";
import Page2 from "./Component/partials/Page2";

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
        <Route exact path="/" component={Page1}></Route>
        <Page2 />
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
