import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import reset from "styled-reset";

const DIV = styled.div`
  ${reset}
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css";
  @import "https://fonts.googleapis.com/css?family=Montserrat";
  padding: 10px;
  img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    animation-delay: 0.5s;
  }
  .outer {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    box-sizing: border-box;
  }
  .outer:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: 0.3s all;
    opacity: 0;
  }

  .innerText {
    position: absolute;
    text-align: right;
    margin: auto;
    width: 97%;
    bottom: 3%;
    overflow: hidden;
    white-space: nowrap;
    z-index: 5;
    h1 {
      position: relative;
      font-size: 35px;
      font-weight: 700;
      color: white;
      text-align: right;
      margin-bottom: 15px;
      top: 200px;
    }
    h2 {
      position: relative;
      font-size: 30px;
      color: white;
      top: 200px;
    }
    h3 {
      position: relative;
      font-size: 35px;
      font-weight: 700;
      color: white;
      margin-top: 10px;
      top: 200px;
    }
  }

  &:nth-child(5n) {
    width: 33.333%;
  }
  &:nth-child(5n + 1) {
    width: 50%;
  }
  &:nth-child(5n + 2) {
    width: 50%;
  }
  &:nth-child(5n + 3) {
    width: 33.333%;
  }
  &:nth-child(5n + 4) {
    width: 33.333%;
  }
`;

function ItemCard({ productId, title, lprice, image, link, mallName }) {
  const titleR = title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, "");
  return (
    <DIV className="item">
      <Link
        to={{
          pathname: `/item-detail/${productId}`,
          state: {
            productId,
            title,
            lprice,
            image,
            link,
            mallName
          }
        }}
      >
        <div className="outer">
          <img src={image} alt={title} className="animated fadeIn" />
          <div className="innerText">
            <h1>{titleR.slice(0, 12) + ".."}</h1>
            <h2>{lprice}원</h2>
            <Link
              to={{
                pathname: `/item-detail/${productId}`,
                state: {
                  productId,
                  title,
                  lprice,
                  image,
                  link
                }
              }}
            >
              <h3>Go to the Shop!</h3>
            </Link>
          </div>
        </div>
      </Link>
    </DIV>
  );
}

export default ItemCard;
