import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends React.Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            return value.products.map( product => {
              return <Product key={product.id} product={product}/>;
            })
          }}
        </ProductConsumer>
      </div>
    )
  }
}