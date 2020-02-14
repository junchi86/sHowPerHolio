import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./itemCard.css";
import reset from "styled-reset";

const DIV = styled.div`
  ${reset}
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css";
  @import "https://fonts.googleapis.com/css?family=Montserrat";
  &:nth-child(5n + 0) {
    width: 33.333%;
    .outer {
      height: 33.333vh;
    }
  }
  &:nth-child(5n + 1) {
    width: 50%;
    .outer {
      height: 50vh;
    }
  }
  &:nth-child(5n + 2) {
    width: 50%;
    .outer {
      height: 50vh;
    }
  }
  &:nth-child(5n + 3) {
    width: 33.333%;
    .outer {
      height: 33.333vh;
    }
  }
  &:nth-child(5n + 4) {
    width: 33.333%;
    .outer {
      height: 33.333vh;
    }
  }

  .wrapper {
    position: static;
    font-family: Montserrat;
    margin: 0.5vw;
  }

  .outer {
    position: relative;
    background: #fff;
    max-width: 100%;

    overflow: hidden;
    display: flex;
    align-items: center;
  }

  img {
    width: 45%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: 0;
    animation-delay: 0.5s;
  }

  .content {
    animation-delay: 0.3s;
    position: absolute;
    left: 20px;
    z-index: 3;
  }

  .content h1 {
    color: #111;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    line-height: 1.3;
    margin-top: 15px;
    text-align: left;
  }

  .content h1 span {
    color: gray;
    font-size: 15px;
  }

  .content p {
    width: 250px;
    line-break: strict;
    font-size: 13px;
    line-height: 1.4;
    color: #aaa;
    margin: 20px 0;
  }

  .button {
    width: fit-content;
    height: fit-content;
    margin-top: 10px;
  }

  .button a {
    display: inline-block;
    overflow: hidden;
    position: relative;
    font-size: 11px;
    color: #111;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid #aaa;
    font-weight: bold;
  }

  .button a:after {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 0%;
    background: #111;
    height: 100%;
    z-index: -1;
    transition: width 0.3s ease-in-out;
    transform: skew(-25deg);
    transform-origin: right;
  }

  .button a:hover:after {
    width: 150%;
    left: -10px;
    transform-origin: left;
  }

  .button a:hover {
    color: #fff;
    transition: all 0.5s ease;
  }

  .button a:nth-of-type(1) {
    border-radius: 50px 0 0 50px;
    border-right: none;
  }

  .button a:nth-of-type(2) {
    border-radius: 0px 50px 50px 0;
  }

  .cart-icon {
    padding-right: 8px;
  }

  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

function ItemCard({ productId, title, lprice, image, link, mallName }) {
  const titleR = title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, "");
  return (
    <DIV>
      <div className="wrapper">
        <div className="outer">
          <div className="content animated fadeInLeft">
            <span className="bg animated fadeInDown">lowest price!</span>
            <h1>
              <span>{mallName}</span>
              <br />
              {titleR.slice(0, 13) + " .."}
            </h1>
            <p>{titleR.slice(0, 70) + " .."}</p>
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
              <div className="button">
                <a href="#">{lprice}원</a>
                <a className="cart-btn" href="#">
                  <i className="cart-icon ion-bag" />
                  Go to the Shop!
                </a>
              </div>
            </Link>
          </div>
          <img
            src={image}
            alt={title}
            width="300px"
            className="animated fadeInRight"
          />
        </div>
      </div>
    </DIV>
  );
}

export default ItemCard;
