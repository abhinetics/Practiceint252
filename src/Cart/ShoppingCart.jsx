import React, { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 2 },
    { id: 3, name: "Product 3", price: 30, quantity: 3 }
  ]);

  // Function to update the quantity of an item in the cart
  function updateQuantity(id, newQuantity) {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  // Function to calculate the total price of all items in the cart
  function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {/* Display each item in the cart */}
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          {/* Display total price of all items in the cart */}
          <tr>
            <td colSpan="3">Total Price:</td>
            <td>${calculateTotalPrice().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingCart;
