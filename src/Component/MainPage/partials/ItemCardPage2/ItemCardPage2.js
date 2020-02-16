import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import reset from "styled-reset";

const DIV = styled.div`
  ${reset}
  padding: 10px;
  width: 100%;
  .outer {
    width: 100%;
    height: 60%;
    box-sizing: border-box;
    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
    .innerText {
      text-align: center;
      margin: 20px auto;
      width: 100%;
      white-space: nowrap;
      background: #f7f1f0;
      h1 {
        font-size: 30px;
        font-weight: 400;
        color: black;
        text-align: center;
        background: #f7f1f0;
      }
    }
  }
`;

function ItemCardPage2({ productId, title, lprice, image, link, mallName }) {
  const titleR = title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, "");
  return (
    <DIV>
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
              <h1>{titleR}</h1>
            </Link>
          </div>
        </div>
      </Link>
    </DIV>
  );
}

export default ItemCardPage2;
