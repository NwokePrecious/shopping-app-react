// src/components/Product.jsx

import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div
      className="card"
      style={{ width: "22rem", height: "450px", margin: "1rem" }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{
          height: "200px",
          width: "15rem",
          objectFit: "contain",
          margin: "2rem",
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text">{product.price}€</p>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-warning"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
