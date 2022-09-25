import React from "react";
import Home from "./pages/Homepage/Home";
import Shop from "./pages/Shop/Shop";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart.js";
import CheckOut from "./pages/Checkout/CheckOut.js";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
};

export default App;
