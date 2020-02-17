import React, { useState, useEffect } from 'react';
import { Spin, Icon } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';

function Shop({ location }) {
  const initialState = { shop: [], loading: true };
  const [shoppedItem, setShoppedItem] = useState(initialState.shop);
  const [isLoading, setIsLoading] = useState(initialState.loading);
  const antIcon = <Icon type="loading" style={{ fontSize: 35 }} spin />;
  const getItem = () => {
    setShoppedItem(location.state.items.items);
    console.log(shoppedItem);
    setIsLoading(false);
  };

  useEffect(getItem, [location.state.items.items]);

  return (
    <div className="shop-component">
      <div className="box1">
        <h1>SHOP - {location.state.title}</h1>
        <p>SEE OUR {location.state.title} PRODUCTS</p>
      </div>
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>{' '}
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <div className="items">
            {shoppedItem.map(i => (
              <ItemCard
                key={i.productId}
                productId={i.productId}
                title={i.title}
                lprice={i.lprice}
                image={i.image}
                link={i.link}
                mallName={i.mallName}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
