// src/App.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ContactForm from "./ContactForm"; // Import the ContactForm component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Data is directly available
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success("Item has been added to Cart!", {
      style: { backgroundColor: "white", color: "#ffc107" },
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "orange",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-uppercase text-black" to="/">
            Kalista
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link active border border-black rounded text-black"
                to="/"
              >
                Products
              </Link>
              <Link
                className="nav-link border border-black rounded text-black"
                style={{ marginLeft: "10px" }}
                to="/cart"
              >
                Your Cart
              </Link>
              <Link
                className="nav-link border border-black rounded text-black"
                style={{ marginLeft: "10px" }}
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/contact"
          element={<ContactForm />} // Add the ContactForm route here
        />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
};

export default App;
