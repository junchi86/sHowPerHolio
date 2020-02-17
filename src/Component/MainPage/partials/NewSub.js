import React from 'react';
import { Link } from 'react-router-dom';

function NewSub({ productId, title, lprice, image, link, mallName }) {
  const titleR = title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, '');

  return (
    <div className="itemcard">
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
    </div>
  );
}

export default NewSub;
