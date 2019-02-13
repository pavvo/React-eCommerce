import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Card, Icon, Button } from 'antd';
import { ProductConsumer } from "../context";

const { Meta } = Card; 

export default class Product extends React.Component {
  
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div>
        <ProductConsumer>
          {(value) => (<Card style={{ width: 300, float: 'left', margin: '30px' }} cover={<div onClick={() => value.handleDetail(id)} ><Link to="/details"><img alt="example" src={img} style={{ width: '100%' }} /></Link></div>}
            actions={[
              <div>
                {inCart ?
                  <Button disabled onClick={() => { value.addToCart(id); value.openModal(id) }}><Icon type="plus" /></Button>
                  :
                  <Button onClick={() => { value.addToCart(id); value.openModal(id) }}><Icon type="plus" /></Button>}
              </div>
            ]} >
            <Meta title={title} description={"Price: " + price + '$'} />
          </Card>)}
          
        </ProductConsumer>
      </div>
    )
  }
}

Product.propTypes = {
  product:PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired 
}