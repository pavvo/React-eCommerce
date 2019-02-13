import React from "react";
import { ProductConsumer } from "../context";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";

export default class ProductModal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            const { openModal, closeModal } = value;
            const { img, title, price, info } = value.modalProduct;

            if (!openModal) {
              return null;
            } else {
              return (
                <Modal
                  title={value.modalProduct.title}
                  visible={value.modalOpen}
                  onOk={value.closeModal}
                  onCancel={value.closeModal}
                  okText="Go to cart"
                  cancelText="Continue Shopping"
                >
                  <img src={value.modalProduct.img} />
                  <p>{value.modalProduct.info}</p>
                  <b>
                    <p>{value.modalProduct.price}$</p>
                  </b>
                </Modal>
              );
            }
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
