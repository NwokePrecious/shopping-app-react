// src/components/ProductList.jsx

import React from "react";
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container mt-4" style={{ textAlign: "center" }}>
      <h1>Hello there👋! Welcome to Kalista</h1>
      <p>We hope you get the best shopping experience 😁</p>
      <h3>Our Products</h3>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" style={{ gap: "10px" }} key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
