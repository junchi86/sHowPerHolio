import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import ShopFilter from './ShopFilter';

function Header() {
  return (
    <>
      <div className="header-component">
        <div className="back">
          <ul className="ulone">
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/new">
              <li>NEW</li>
            </Link>
            <Link to="/lookbook">
              <li>LOOKBOOK</li>
            </Link>
            <Link to="/shop">
              <li>
                <ShopFilter />
              </li>
            </Link>
            <Link to="/collections">
              <li>COLLECTIONS</li>
            </Link>
          </ul>
          <div className="logo"><Link to='/'>Cherry Coke</Link></div>
          <ul className="ultwo">
            <Link to="/join">
              <li>
                JOIN
              </li>
            </Link>
            <Link to="/login">
              <li>
                LOGIN
              </li>
            </Link>
            <Link to="/help">
              <li><Icon type="phone" /></li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
