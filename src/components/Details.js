import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context";
import { Card, Icon, Avatar, Button } from 'antd';
const { Meta } = Card; 

export default class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
      {value => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return(
            <React.Fragment>
              <Button style={{ width: 300, float: 'left', margin: '30px' }}><Link to="/">Back home</Link></Button>
              
              <Card style={{ width: 300, float: 'left', margin: '30px'}} cover={<img alt="example" src={img} />}
                actions={[
                  <div>Made by {company} | {price + '$'}</div>
                ]} >
                <Meta title={title} description={info} />
                {inCart ? <p style={{ width: 300, float: 'left', margin: '30px' }}>Already in cart</p> : <Button style={{ marginTop: '30px' }} onClick={() => {
                  value.addToCart(id)
                }}>Add to cart</Button>}
              </Card>
            </React.Fragment>
          )
      }}
      </ProductConsumer>
    )
  }
}