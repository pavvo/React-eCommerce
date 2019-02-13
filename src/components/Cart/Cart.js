import React from "react";
import ReactDOM from "react-dom";
import { ProductConsumer } from "../../context";
import { Table, Button } from "antd";
import EmptyCart from "./EmptyCart";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Cart extends React.Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;

            const columns = [
              {
                title: "Product Title",
                dataIndex: "title"
              },
              {
                title: "Price",
                dataIndex: "price"
              },
              {
                title: "Quantity",
                dataIndex: "count"
              },
              {
                title: "Remove",
                key: "action",
                render: (text, record) => (
                  <span>
                    <a
                      onClick={() => {
                        value.removeItem(record.id);
                      }}
                    >
                      Delete
                    </a>
                  </span>
                )
              }
            ];
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div style={{ margin: "50px" }}>
                    <h4>Your cart</h4>
                    <Table
                      columns={columns}
                      dataSource={cart}
                      size="middle"
                      pagination={false}
                      style={{ paddingBottom: "50px" }}
                    />
                    <Button
                      type="danger"
                      onClick={() => {
                        value.clearCart();
                      }}
                      style={{ float: "left" }}
                    >
                      Clear cart
                    </Button>
                    <div style={{ float: "right", textAlign: "right" }}>
                      <h6>Subtotal: {value.cartSubTotal}$</h6>
                      <br />
                      <h6>Taxes: {value.cartTax}$</h6>
                      <hr />
                      <h6>Total cost: {value.cartTotal}$</h6>
                    </div>
                  </div>
                  ,
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
