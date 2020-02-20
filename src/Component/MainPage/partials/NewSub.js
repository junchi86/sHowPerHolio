import React from 'react';

function NewSub({ title, image, link }) {
  const titleR = title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, '');

  return (
    <div className="itemcard">
      <div className="outer">
        <a href={link}><img src={image} alt={title} className="animated fadeIn" /></a>
        <div className="innerText">
          <h1>{titleR}</h1>
        </div>
      </div>
    </div>
  );
}

export default NewSub;
