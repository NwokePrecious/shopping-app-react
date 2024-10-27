// src/components/Cart.jsx

import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div className="container mt-4" style={{ textAlign: "center" }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.title} - {item.price}€
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3 className="mt-3">Total Price: {getTotalPrice}€</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
