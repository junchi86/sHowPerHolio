import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';

function ShopFilter({ onClick }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link
          onClick={onClick}
          to='/shop/all'
        >
          <div className="menu-item-filter">ALL</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to='/shop/dresses'
        >
          <div className="menu-item-filter">DRESSES</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to='/shop/tops'
        >
          <div className="menu-item-filter">TOPS</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to='/shop/tshirts'
        >
          <div className="menu-item-filter">T-SHIRTS</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to='/shop/bottoms'
        >
          <div className="menu-item-filter">BOTTOMS</div>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div>SHOP</div>
    </Dropdown>
  );
}

export default ShopFilter;
