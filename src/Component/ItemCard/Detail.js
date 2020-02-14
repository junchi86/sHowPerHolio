import React from "react";
import "./Detail.css";
import { Icon } from "antd";
import { Link } from "react-router-dom";

function Detail({ location }) {
  return (
    <aside className="profile-card">
      <header>
        {/* here’s the avatar */}
        <a target="_blank" rel="noopener noreferrer" href={location.state.link}>
          <img
            src={location.state.image}
            className="hoverZoomLink"
            alt={location.state.title}
          />
        </a>
        {/* the username */}
        <h1>
          {location.state.title
            .replace(/(<b)(.+?)(<\s?\/\s?b>)/, "")
            .slice(0, 10)}
        </h1>
        {/* and role or location */}
        <h2>
          {location.state.title.replace(/(<b)(.+?)(<\s?\/\s?b>)/, "").slice(10)}
        </h2>
      </header>
      {/* bit of a bio; who are you? */}
      <div className="profile-bio">
        <p>{location.state.lprice}</p>
      </div>
      {/* some social links to show off */}
      <ul className="profile-social-links">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={location.state.link}
          >
            <Icon type="search" />
          </a>
        </li>
        <li>
          <Link to="/">
            <Icon type="home" />
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <Icon type="facebook" theme="filled" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://junchi86.github.io/index"
          >
            <Icon type="question-circle" />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Detail;
