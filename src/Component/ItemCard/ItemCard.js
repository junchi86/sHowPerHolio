import React from 'react';

function ItemCard({ title, lprice, image, link }) {
  const titleR = title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, '');
  return (
    <div className="item">
      <a href={link}>
        <div className="outer">
          <img src={image} alt={title} className="animated fadeIn" />
          <div className="innerText">
            <h1>{titleR.slice(0, 30)}</h1>
            <h2>{lprice}원</h2>
            <h3>Go to the Shop!</h3>
          </div>
        </div>
      </a>
    </div >
  );
}

export default ItemCard;
