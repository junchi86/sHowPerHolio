import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';

function ShopFilter({ onClick }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link
          onClick={onClick}
          to={{
            pathname: '/shop/all',
            state: { title: 'ALL', QUERY: 'doen', NUM: 100 }
          }}
        >
          <div className="menu-item-filter">ALL</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to={{
            pathname: '/shop/dresses',
            state: { title: 'DRESSES', QUERY: 'doen dress', NUM: 20 }
          }}
        >
          <div className="menu-item-filter">DRESSES</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to={{
            pathname: '/shop/tops',
            state: { title: 'TOPS', QUERY: 'doen 블라우스', NUM: 20 }
          }}
        >
          <div className="menu-item-filter">TOPS</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to={{
            pathname: '/shop/tshirts',
            state: { title: 'TSHIRTS', QUERY: 'doen top', NUM: 20 }
          }}
        >
          <div className="menu-item-filter">T-SHIRTS</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={onClick}
          to={{
            pathname: '/shop/bottoms',
            state: { title: 'BOTTOMS', QUERY: 'doen skirt', NUM: 20 }
          }}
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
