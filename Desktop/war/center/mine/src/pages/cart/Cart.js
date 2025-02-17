import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import "./CartPage.css";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Fresh orange Klementina", price: 3.12, quantity: 3, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png", discount: 2.79, originalPrice: 4.05, portion: "1kg" },
    { id: 2, name: "Pesto sauce Barilla", price: 3.95, quantity: 1, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png", portion: "200g" },
    { id: 3, name: "Steak salmon fillet", price: 27.00, quantity: 2, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png", portion: "1kg" },
  ]);

  // Update Quantity
  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = cartItems.reduce((acc, item) => acc + (item.discount || 0), 0);
  const estimatedTotal = subtotal - discount;

  return (
    <div className="cart-page">
      {/* Cart Items Section */}
      <div className="cart-items">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="product-info">
                    <img src={item.image} alt={item.name} className="product-image" />
                    <div className="product-details">
                      <p className="product-name">{item.name}</p>
                      <small className="portion">{item.portion}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="price">${item.price.toFixed(2)}</span>
                  {item.originalPrice && <span className="original-price">${item.originalPrice.toFixed(2)}</span>}
                </td>
                <td>
                  <div className="quantity-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}><FaMinus /></button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button>
                  </div>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>Subtotal ({cartItems.length} items): <span>${subtotal.toFixed(2)}</span></p>
          <p>Saving: <span className="saving">-${discount.toFixed(2)}</span></p>
          <p>Delivery: <span className="free">Free</span></p>
          <hr />
          <p className="total">Estimated Total: <span>${estimatedTotal.toFixed(2)}</span></p>
        </div>
        <button className="checkout-btn">Proceed to Checkout →</button>
      </div>
    </div>
  );
};

export default CartComponent;
