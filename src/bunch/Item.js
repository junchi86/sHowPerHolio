import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Item.css";
import { Card } from "antd";

function Item({ productId, title, image, lprice }) {
  return (
    <Link
      to={{
        pathname: `/item-detail/${productId}`,
        state: {
          title,
          image
        }
      }}
    >
      <Card
        key={productId}
        className="item"
        hoverable
        cover={<img src={image} alt={title} title={title} />}
      >
        <Card.Meta title={lprice} description={title.slice(0, 15) + "..."} />
      </Card>
    </Link>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lprice: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired
};

export default Item;
