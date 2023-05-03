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

class ProductList extends Component {
  render() {
    const products = [
      { name: 'Product 1', price: 10.0, image: 'https://example.com/image1.jpg' },
      { name: 'Product 2', price: 20.0, image: 'https://example.com/image2.jpg' },
      { name: 'Product 3', price: 30.0, image: 'https://example.com/image3.jpg' },
    ];
    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Product key={index} name={product.name} price={product.price} image={product.image} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductList;
