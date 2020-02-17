import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

function ShopFilter() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/shop/all">
          <a>ALL</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/shop/dresses">
          <a>DRESSES</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/shop/tops">
          <a>TOPS</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/shop/tshirts">
          <a>T-SHIRTS</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/shop/bottoms">
          <a>BOTTOMS</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="shop-component">
      <div className="box1">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default ShopFilter;
