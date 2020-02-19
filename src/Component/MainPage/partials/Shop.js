import React from 'react';
import { Spin, Icon } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function Shop({ location }) {
  const { QUERY, NUM } = location.state;
  const GET_ITEMS = gql`
    query getItems($QUERY: String!, $NUM: Int!) {
      items(QUERY: $QUERY, NUM: $NUM) {
        title
        link
        image
        lprice
        hprice
        mallName
        productId
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { QUERY, NUM }
  });

  const antIcon = <Icon type="loading" style={{ fontSize: 35 }} spin />;
  return (
    <div className="shop-component">
      <div className="box1">
        <h1>SHOP - {location.state.title}</h1>
        <p>SEE OUR {location.state.title} PRODUCTS</p>
      </div>
      <section className="container">
        {!loading && data ? (
          <div className="items">
            {data.items.map(i => (
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
        ) : (
          <div className="loader">
            <span className="loader__text">Loading...</span>{' '}
            <Spin indicator={antIcon} />
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
