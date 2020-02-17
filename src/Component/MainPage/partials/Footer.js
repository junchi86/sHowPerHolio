import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <Link to="/">
          <li>CHERRY COKE 2020</li>
        </Link>
        <Link to="/">
          <li>TERMS OF USE</li>
        </Link>
        <Link to="/">
          <li>PRIVACY NOTICE</li>
        </Link>
        <Link to="/">
          <li>COOKIE POLICY</li>
        </Link>
        <Link to="/">
          <li>MADE BY J.H.KIM</li>
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
