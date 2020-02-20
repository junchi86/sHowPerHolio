import React from 'react';
import { Spin, Icon } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

function Shop({ location }) {
  const { name } = useParams()
  switch (name) {
    case 'all':
      location.state = { title: 'ALL', QUERY: 'doen', NUM: 100 }
      break
    case 'dresses':
      location.state = { title: 'DRESSES', QUERY: 'doen dress', NUM: 20 }
      break
    case 'tops':
      location.state = { title: 'TOPS', QUERY: 'doen 블라우스', NUM: 20 }
      break
    case 'tshirts':
      location.state = { title: 'TSHIRTS', QUERY: 'doen top', NUM: 20 }
      break;
    case 'bottoms':
      location.state = { title: 'BOTTOMS', QUERY: 'doen skirt', NUM: 20 }
      break;
    default:
      break;
  }

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
  )
}

export default Shop;
