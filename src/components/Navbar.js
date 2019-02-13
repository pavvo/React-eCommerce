import React from "react";
import ReactDOM from "react-dom";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

const spanStyle = {
  margin: '40px',
  fontSize: '18px',
  color: 'black'
};

export default class Navbar extends React.Component { 

  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  
  render(){
    return(
      <React.Fragment>
        <Menu mode="horizontal" onClick={this.handleClick}>
          <Menu.Item key="home">
            <Link to="/">
              <span style={spanStyle}><i className="fas fa-home"></i>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="products">
            <Link to="/">
              <span style={spanStyle}><i className="fas fa-store"></i>Products</span>
            </Link>
          </Menu.Item>   
          <Menu.Item key="cart">
            <Link to="/store">
              <span style={spanStyle}><i className="fas fa-shopping-cart"></i>Cart</span>
            </Link>
          </Menu.Item>       
        </Menu>
      </React.Fragment>
    )
  
  }
}