import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Div = styled.div`
  background: url("https://cdn.shopify.com/s/files/1/0950/9820/t/261/assets/hero.jpg?117479");
  width: 100%;
  height: 100vh;
`;

function Page1() {
  return (
    <Div>
      <Header />
    </Div>
  );
}

export default Page1;
