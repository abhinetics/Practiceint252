import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { name, price, image } = this.props;
    
    return (
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td><img src={image} alt={name} /></td>
      </tr>
    );
  }
}

export default Product;
