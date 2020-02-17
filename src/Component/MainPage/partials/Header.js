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
          <div className="logo">Cherry Coke</div>
          <ul className="ultwo">
            <Link to="/help">
              <li>HELP</li>
            </Link>
            <Link to="/search">
              <li>
                <Icon type="search" />
              </li>
            </Link>
            <Link to="/cart">
              <li>
                <Icon type="shopping-cart" />
              </li>
            </Link>
            <Link to="/user">
              <li>
                <Icon type="smile" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
