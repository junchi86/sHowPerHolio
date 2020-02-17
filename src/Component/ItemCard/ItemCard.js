import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ productId, title, lprice, image, link, mallName }) {
  const titleR = title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, '');
  return (
    <div className="item">
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
            <h1>{titleR.slice(0, 12) + '..'}</h1>
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
    </div>
  );
}

export default ItemCard;
