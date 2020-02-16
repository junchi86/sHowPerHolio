import React from "react";
function Detail({ location }) {
  return (
    <div className='background-detail'>
      <aside className="profile-card">
        <header>
          <a target="_blank" rel="noopener noreferrer" href={location.state.link}>
            <img
              src={location.state.image}
              className="hoverZoomLink"
              alt={location.state.title}
            />
          </a>
          <h1>
            {location.state.title
              .replace(/(<b)(.+?)(<\s?\/\s?b>)/, "")
              .slice(0, 10)}
          </h1>
          <h2>
            {location.state.title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, "").slice(10)}
          </h2>
        </header>
      </aside>
    </div>
  );
}

export default Detail;
