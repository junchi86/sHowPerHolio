import React, { useState } from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import ShopFilter from './ShopFilter';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const onClickMenu = () => {
    setOpenMenu(!openMenu);
    setOpenUser(false);
  };
  const onClickUser = () => {
    setOpenUser(!openUser);
    setOpenMenu(false);
  };
  const setMenuFalse = () => {
    setOpenMenu(false);
    setOpenUser(false);
  };

  return (
    <>
      <div className="header-component">
        <div className="back">
          <ul
            className="ulone"
            style={
              openMenu
                ? {
                  display: 'block'
                }
                : {}
            }
          >
            <Link onClick={setMenuFalse} to={'/'}>
              <li>HOME</li>
            </Link>
            <Link onClick={setMenuFalse} to={'/new'}>
              <li>NEW</li>
            </Link>
            <Link onClick={setMenuFalse} to={'/lookbook'}>
              <li>LOOKBOOK</li>
            </Link>
            <Link to={'/shop'}>
              <li>
                <ShopFilter onClick={setMenuFalse} />
              </li>
            </Link>
            <Link onClick={setMenuFalse} to={'/collections'}>
              <li>COLLECTIONS</li>
            </Link>
          </ul>
          <div className="logo">
            <div className="res-icon">
              <Link onClick={onClickMenu}>
                <Icon type="menu" />
              </Link>
            </div>
            <div className="logo-name">
              <Link to="/" onClick={setMenuFalse}>
                Cherry Coke
              </Link>
            </div>
            <div className="res-icon">
              <Link onClick={onClickUser}>
                <Icon type="user" />
              </Link>
            </div>
          </div>
          <ul
            className="ultwo"
            style={
              openUser
                ? {
                  display: 'flex'
                }
                : {}
            }
          >
            <Link onClick={setMenuFalse} to={'/join'}>
              <li>JOIN</li>
            </Link>
            <Link onClick={setMenuFalse} to={'/login'}>
              <li>LOGIN</li>
            </Link>
            <Link onClick={setMenuFalse} to={'/help'}>
              <li>
                <Icon type="phone" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
