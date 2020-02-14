import React from "react";
import axios from "axios";

import "./ItemHome.css";
import { Spin, Icon } from "antd";
import ItemCard from "../Component/ItemCard/ItemCard";

class ItemSearch extends React.Component {
  state = {
    isLoading: true,
    items: []
  };

  getItem = async () => {
    if (this.props.location.state.value !== undefined) {
      const {
        data: {
          data: { items }
        }
      } = await axios.get(
        `https://yts.mx/api/v2/list_items.json?sort_by=rating&query_term=${this.props.location.state.value}`
      );
      this.setState({ items, isLoading: false });
    }
  };

  componentDidUpdate() {
    this.getItem();
    this.props.location.state = { pathname: "", state: { value: "" } };
  }
  componentDidMount() {
    this.getItem();
    this.props.location.state = { pathname: "", state: { value: "" } };
  }

  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 35 }} spin />;
    const { isLoading, items } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>{" "}
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <div className="items">
            {items ? (
              items.map(i => (
                <ItemCard
                  key={i.productId}
                  title={i.title}
                  lprice={i.lprice}
                  image={i.image}
                  link={i.link}
                />
              ))
            ) : (
              <h1>Result:0</h1>
            )}
          </div>
        )}
      </section>
    );
  }
}
export default ItemSearch;
