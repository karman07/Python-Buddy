import React from "react";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import "./CartDrawer.css";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {isOpen && <div className="cart-backdrop" onClick={onClose}></div>}

      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="cart-header">
          <h4>Shopping cart</h4>
          <FaTimes size={20} className="close-icon" onClick={onClose} />
        </div>

        {/* Free Delivery Message */}
        {subtotal > 50 && (
          <div className="free-delivery">
            🎉 You have added more than <strong>$50</strong> to your cart.{" "}
            <br />
            <span className="highlight-text">Delivery is free</span> for you!
          </div>
        )}

        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              {item.discount && (
                <span className="discount-badge">-${item.discount}</span>
              )}
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <strong>${item.price.toFixed(2)}</strong>
                <div className="quantity-controls">
                  <button className="qty-btn">
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn">
                    <FaPlus />
                  </button>
                </div>
              </div>
              <FaTimes className="remove-item" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="cart-footer">
          <p className="subtotal">
            Subtotal: <strong>${subtotal.toFixed(2)}</strong>
          </p>
          <div className="cart-buttons">
            <button className="view-cart-btn">View cart</button>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
